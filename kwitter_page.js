
const firebaseConfig = {
    apiKey: "AIzaSyBTMFWpksmffKqeAk7VlJ36BMC5J1h433A",
    authDomain: "chatapp-74734.firebaseapp.com",
    databaseURL: "https://chatapp-74734-default-rtdb.firebaseio.com",
    projectId: "chatapp-74734",
    storageBucket: "chatapp-74734.appspot.com",
    messagingSenderId: "470319052695",
    appId: "1:470319052695:web:a14151e760816a2e91b6d2",
    measurementId: "G-PCBJT97PYC"
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