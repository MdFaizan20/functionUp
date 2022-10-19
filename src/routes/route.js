const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})



// -write an api which gives the missing number in an array 

router.get("/sol1", function (req, res) {
let array=[1,2,3,5,6,7]
let n=array.length+1 
let sumOfnaturalNumber =n*(n+1)/2
let sumOfarray=0
for(let i=0;i<array.length;i++){
    let element = array[i]
    sumOfarray+=element
}
let result = sumOfnaturalNumber-sumOfarray
res.send( {  missingNumber: result } );
});


// -write an api which gives the missing number in an array of integers starting from anywhere

router.get("/sol2", function (req, res) {

let arr= [33, 34, 35, 37, 38]
let n=arr.length+1 
let sumOfnaturalNumber =n*(33+38)/2  //logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
let sumOfarray=0
for(let i=0;i<arr.length;i++){
    let element = arr[i]
    sumOfarray+=element
}
let result = sumOfnaturalNumber-sumOfarray
res.send( { missingNumber: result } );
});



module.exports = router;