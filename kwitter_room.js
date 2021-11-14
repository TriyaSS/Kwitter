
var firebaseConfig = {
      apiKey: "AIzaSyAqUfOBD7AGS93SZfY8RVw1Ir5MdEsZP2Y",
      authDomain: "trial-623b9.firebaseapp.com",
      databaseURL: "https://trial-623b9-default-rtdb.firebaseio.com",
      projectId: "trial-623b9",
      storageBucket: "trial-623b9.appspot.com",
      messagingSenderId: "863354180170",
      appId: "1:863354180170:web:04596361a3b52d333b4cb3",
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  
      user_name =localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

      function  addRoom(){
            var room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose: "addinroomname"            });
                  localStorage.setItem("room_name", room_name);
                  window.location = "kwitter_room.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log("room_name" + Room_names );
        row = "<div class='room_name' id=" + Room_names + "onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";

      });});}
getData();
