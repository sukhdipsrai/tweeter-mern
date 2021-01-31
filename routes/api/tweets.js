const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Tweet');
const validateTweetInput = require('../../validation/tweets');


router.get("/", (req,res)=>{
    Tweet.find()
        .sort({date: -1})
        .then(tweets => res.json(tweets))
        .catch( err => res.status(404).json({ notweetsfound: 'No tweets found'}))
})

router.get('/user/:user_id;', (req,res)=>{
    Tweet.find({user: req.params.user_id})
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({notweetsfound:"No Tweets found from that user"}))
})

router.get('/:id', (req, res) => {
    Tweet.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err => res.status(404).json({ notweetfound: 'No tweet found with that ID' }));
});

module.exports = router;