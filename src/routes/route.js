const express = require('express');
const router = express.Router();

const logger = require('../logger/logger')
const  dateFormat=require("../utils/helper")
const update= require("../validator/formatter")


router.get('/test-me', function (req, res) {
    
    console.log("Problem #1 ",logger.welNote())
    console.log("Problem #2",dateFormat.date())
    console.log("Problem #3",update.formatChanger())

    const lodash  = require('lodash')

let months=["January","February","March","April","May","June","july","August","September","October","November","December"];
console.log(lodash.chunk(months,4))

const oddNum=[1,3,5,7,9,11,13,15,17,19];
console.log(lodash.tail(oddNum,9));

const Num=[1,1,2,3,4,5,5,6]
console.log(lodash.union(Num));

const obj=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

console.log(lodash.fromPairs(obj));
   
    
    res.send('My first ever api!')

    
});

module.exports = router;

