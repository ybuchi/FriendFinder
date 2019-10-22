// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var allPossibleFriends = require("../data/friends");
var index

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {

    res.json(allPossibleFriends);

  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
// Create New Person - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middlewarec
  var newPerson = req.body;


  allPossibleFriends.push(newPerson);

  console.log(allPossibleFriends[0].name);
  console.log("This is new Person: " + newPerson.scores);
  
  //Calculate the user's score and compare it with the others
  //Create a variable that will hold all the scores

  var scores = [];

  function sumArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }
 function compareArrays(array1, array2){
  var finalArray = []

  //Loop through the given array to compare the scores between the two arrays
  for (u = 0; u < array1.length; u++){
  


   newNumber = Math.abs(array1[u] - array2[u]);

   //push the new number in the finalArray
   finalArray.push(newNumber);
   
  }
   //Once done with the loop, calculate the final score by adding all nuymbers in the array

  console.log(finalArray);
  var score = sumArray(finalArray)
  console.log("The score is : " + score);

  //Store the score in an array 
  scores.push(score);
 }//end of Compare Array function

  //Create a for loop that will use comparArrays function 

for (i = 0; i < allPossibleFriends.length; i++){

  compareArrays(allPossibleFriends[i].scores, newPerson.scores);
  console.log(allPossibleFriends);

}
console.log("Here is the list of scores: " + scores);

  //Choose the lowest score and display the matching friend's profile in an alert
  var index = 0;
  var value = scores[0];
  for (var i = 1; i < scores.length - 1 ; i++) {
  if (scores[i] < value) {
    value = scores[i];
    index = i;
  }

}
console.log("The index with the lowest number is: " + index);

console.log("The best match is: " + allPossibleFriends[index].name);



// app.get("/api/friends", function(req,res){
//   //Respond with the closest match
// alert(res.json(allPossibleFriends[index].name));

// })

});//end of post method

};
