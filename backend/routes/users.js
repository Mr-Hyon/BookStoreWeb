const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// handle user login
router.post('/login', async (req, res) => {
    try{
        console.log("incoming username:"+req.body.username);
        const user = await User.findOne({username: req.body.username, password: req.body.password});
        if(!user)
            res.json({success: false, message: 'non-exist user or wrong password'});
        else
            res.json({success: true, message:'Login Success' ,LoginUser: user});
    }catch(err){
        res.json({message: err});
    }
});

// handle user register
router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    try {
        const checkuser = await User.findOne({username: req.body.username});
        if(!checkuser){
            await user.save();
            res.json({success: true, message: 'register success'});
        }
        else{
            res.json({success: false, message: 'user already exist'});
        }
    } catch( err ){
        res.json( {message: err} );
    }
});


module.exports = router;