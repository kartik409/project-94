const firebaseConfig = {
    apiKey: "AIzaSyDX3mmJ7deUJqlVLbwD5hWd8A5WajrNYA0",
    authDomain: "chat-8e63a.firebaseapp.com",
    databaseURL: "https://chat-8e63a-default-rtdb.firebaseio.com",
    projectId: "chat-8e63a",
    storageBucket: "chat-8e63a.appspot.com",
    messagingSenderId: "724844120120",
    appId: "1:724844120120:web:d1726b2de55eedb7af3ecd"
  };
  
  
  
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  
   
    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";
  
    function addroom() {
           room_name = document.getElementById("room_name").value;
  
           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
  getData();
  function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
  }
  function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
  }