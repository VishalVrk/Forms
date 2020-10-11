// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("./keys");

var firebaseConfig = {
  apiKey: "AIzaSyDBMjuL7v570XbXLjJjtVkt1IMV_9Qb4Cw",
  authDomain: "covid-assesment-3e6c7.firebaseapp.com",
  databaseURL: "https://covid-assesment-3e6c7.firebaseio.com",
  projectId: "covid-assesment-3e6c7",
  storageBucket: "covid-assesment-3e6c7.appspot.com",
  messagingSenderId: "795981455051",
  appId: "1:795981455051:web:bd49969cf2c14c88dc054e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// function signUp() {
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");

//   const promise = auth.createUserWithEmailAndPassword(
//     email.value,
//     password.value
//   );
//   promise.catch((e) => alert(e.message));
//   alert("signed Up");
// }
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.then(() => {
    alert("signed In");
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        // ...
        sessionStorage.setItem("id", idToken);
        // alert(idToken);
        window.location.href = "http://localhost:5501/public/dashboard.html";
      })
      .catch(function (error) {
        // Handle error
      });
  });
  promise.catch((e) => alert(e.message));
}
function signOut() {
  auth.signOut();
  sessionStorage.removeItem("id");
  alert("signedOut");
  window.location.href = "http://localhost:5501/public/admin.html";
}
