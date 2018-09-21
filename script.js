 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBfpnhjMssOiYpmwpdO6z3x3C_N4PgrRq8",
    authDomain: "train-c8763.firebaseapp.com",
    databaseURL: "https://train-c8763.firebaseio.com",
    projectId: "train-c8763",
    storageBucket: "train-c8763.appspot.com",
    messagingSenderId: "239031625064"
  };
  firebase.initializeApp(config);

  $("#add-button-x").on("click", function(){
      var trainName = $("#train").val().trim();
      console.log(trainName);
  })