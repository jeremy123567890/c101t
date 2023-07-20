// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD83TIbHOpCcU-NObli9I2M8xO0yzqbPZw",
    authDomain: "kwitter-ecff7.firebaseapp.com",
    databaseURL: "https://kwitter-ecff7-default-rtdb.firebaseio.com",
    projectId: "kwitter-ecff7",
    storageBucket: "kwitter-ecff7.appspot.com",
    messagingSenderId: "43045304706",
    appId: "1:43045304706:web:04cef1102523a57146379b",
    measurementId: "G-81WG1R1GZC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



