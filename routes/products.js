const express = require('express');
const Joi = require('joi');
const mysql = require('mysql');

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
    name: Joi.string().min(4).max(40).required(),
    price: Joi.number().integer().min(0).max(1000000),
    image: Joi.string().trim().min(4).max(40).required()
    
});

route.get('/products', (req, res) => {
    
    pool.query('select * from products', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);  
        else
            res.send(rows);
    });
});

route.get('/product/:id', (req, res) => {
    let query = 'select * from products where id=?';
    let formated = mysql.format(query, [req.params.id]);

    pool.query(formated, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows[0]);
    });
});


route.post('/products', (req, res) => {
   
    let { error } = sema.validate(req.bod);   
    if (error)
        res.status(400).send(error.details[0].message);  
    else {  
      
        let query = "insert into products (name, price,image) values (?, ?, ?)";
        let formated = mysql.format(query, [req.body.name, req.body.price, req.body.image]);

        // Izvrsimo query
        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                
                query = 'select * from products where id=?';
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




route.put('/product/:id', (req, res) => {
    let { error } = sema.validate(req.bod); 
  
    if (error)
        res.status(400).send(error.details[0].message);
    else {
        let query = "update products set name=?, price=? ,image=? where id=?";
        let formated = mysql.format(query, [req.body.name, req.body.price, req.body.image, req.params.id]);

        pool.query(formated, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                query = 'select * from products where id=?';
                formated = mysql.format(query, [req.params.id]);

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


route.delete('/product/:id', (req, res) => {
    let query = 'select * from products where id=?';
    let formated = mysql.format(query, [req.params.id]);

    pool.query(formated, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else {
            let poruka = rows[0];

            let query = 'delete from products where id=?';
            let formated = mysql.format(query, [req.params.id]);

            pool.query(formated, (err, rows) => {
                if (err)
                    res.status(500).send(err.sqlMessage);
                else
                    res.send(poruka);
            });
        }
    });
});


module.exports = route;