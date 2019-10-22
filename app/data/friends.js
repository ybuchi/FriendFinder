// ===============================================================================
// DATA
// Below data will hold all of the potential friends' names.
// Initially we just set it equal to a "dummy" friend.
// ===============================================================================

var tableArray = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"John",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            2,
            4,
            1,
            1,
            1,
            5,
            4,
            1
          ]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;