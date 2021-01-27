const express = require('express');
const Joi = require('joi');
const mysql = require('mysql');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webshop'
});



const route = express.Router();

route.use(express.json());


// Sema za validaciju
const sema = Joi.object().keys({
    first_name: Joi.string().min(4).max(40).required(),
    last_name: Joi.string().min(4).max(40).required(),
    email: Joi.string().trim().min(4).max(40).required(),
    password: Joi.string().trim().min(4).max(40).required()

});

const login = Joi.object().keys({
    email: Joi.string().trim().min(4).max(40).required(),
    password: Joi.string().trim().min(4).max(200).required()

});

route.get('/users', (req, res) => {

    pool.query('select * from users', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows);
    });
});


route.post('/users', (req, res) => {

    let { error } = sema.validate(req.bod);
    if (error)
        res.status(400).send(error.details[0].message);
    else {

        let query = "insert into users (first_name, last_name,email,password) values (?, ?, ?,?)";
        // const salt =  bcrypt.genSalt(10);
        // now we set user password to hashed password
        //const pass =  bcrypt.hash(req.body.password, salt);
        var salt = bcrypt.genSaltSync(10);
        let pass = bcrypt.hashSync(req.body.password, salt);
        let formated = mysql.format(query, [req.body.first_name, req.body.last_name, req.body.email, pass]);

        // Izvrsimo query
        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {

                query = 'select * from users where id=?';
                formated = mysql.format(query, [response.insertId]);

                pool.query(formated, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});


route.post('/login', (req, res) => {

    let { error } = login.validate(req.bod);
    if (error)
        res.status(400).send(error.details[0].message);
    else {
        let query = "SELECT * FROM users where email=?";

        let formated = mysql.format(query, [req.body.email]);

        // Izvrsimo query
        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
               
                
                if (response.length != 0) {
                    bcrypt.compare(req.body.password, response[0]['password'], (err, result) => {
                        if (err) {
                            console.log('bcrypt - error - ', err);
                            return res.status(401).json({
                                tite: 'login failed',
                                error: 'invalid credentials'
                            })
                        } else {
                            if (!result) {
                                return res.status(401).json({
                                    tite: 'login failed',
                                    error: 'invalid credentials'
                                })
                            } else {
                                let token = jwt.sign({ userId: response[0]['id'] }, 'secretkey');
                                return res.status(200).json({
                                    title: 'login sucess',
                                    token: token
                                })
                            }

                        }
                    });
                }else{
                    return res.status(401).json({
                        tite: 'login failed',
                        error: 'invalid credentials'
                    })
                }

            }
        });
    }
});



route.post('/review', (req, res) => {
    let token = req.headers.token; //token

    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })

        pool.query('select * from users where id=' + decoded.userId, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else{

                let query = "insert into reviews (idUser,idProduct, comment) values (?,?, ?)";
            
                let formated = mysql.format(query, [decoded.userId, req.body.idProduct, req.body.comment]);
        
                // Izvrsimo query
                pool.query(formated, (err, response) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else {
        
                        query = 'select * from reviews where id=?';
                        formated = mysql.format(query, [response.insertId]);
        
                        pool.query(formated, (err, rows) => {
                            if (err)
                                res.status(500).send(err.sqlMessage);
                            else
                                res.send(rows[0]);
                        });
                    }
                });
            }

               
        });


    })
});


route.get('/user', (req, res) => {
    let token = req.headers.token; //token

    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })

        pool.query('select * from users where id=' + decoded.userId, (err, rows) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else

                res.send(rows[0]);
        });


    })
});

module.exports = route;