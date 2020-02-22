const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
require('../middleware/passport')(passport);
const User = require("../models/user");

users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post("/register", (req, res) => {
    const today = new Date();
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio,
        created: today
    };

    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => {
                            res.status(201).json({
                               status: user.email + ' registered',
                            })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({error: 'User already exists'})
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: "15m"
                    });
                    res.status(200).json(token);
                }
            } else {
                res.status(400).json({error: 'User does not exist'})
            }
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
});
module.exports = users;