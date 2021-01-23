const express = require('express');
const Joi = require('joi');
const mysql = require('mysql');
const bcrypt = require("bcrypt");

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
    last_name:Joi.string().min(4).max(40).required(),
    email: Joi.string().trim().min(4).max(40).required(),
    password: Joi.string().trim().min(4).max(40).required()
    
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
        let formated = mysql.format(query, [req.body.first_name, req.body.last_name, req.body.email,req.body.password]);

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

module.exports = route;