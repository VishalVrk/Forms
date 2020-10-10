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

var messagesRef = firebase.database().ref("Patients");

PatientForm = document.querySelector("#form-patient");
PatientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var email = PatientForm["email"].value;
  var dob = PatientForm["dob"].value;
  //   var symptoms =
  //   var conditions =
  var pregnant = radioPregnant();
  var helthEmp = radioHealEmp();
  var Risk = radioRisk();
  var prioritized = radioprioritized();
  var splSetting = radiosplSetting();

  function radioPregnant() {
    var Pregnant = document.querySelector("input[name=optradio]:checked").value;
    return Pregnant;
  }
  function radioHealEmp() {
    var HealEmp = document.querySelector("input[name=optradio1]:checked").value;
    return HealEmp;
  }
  function radioRisk() {
    var Risk = document.querySelector("input[name=optradio2]:checked").value;
    return Risk;
  }
  function radioprioritized() {
    var prioritized = document.querySelector("input[name=optradio5]:checked")
      .value;
    return prioritized;
  }
  function radiosplSetting() {
    var splSetting = document.querySelector("input[name=optradio4]:checked")
      .value;
    return splSetting;
  }
  console.log(email, dob, pregnant, helthEmp, Risk, prioritized, splSetting);

  saveMessage(email, dob, pregnant, helthEmp, Risk, prioritized, splSetting);
});
function saveMessage(
  email,
  dob,
  pregnant,
  helthEmp,
  Risk,
  prioritized,
  splSetting
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    dob: dob,
    pregnant: pregnant,
    helthEmp: helthEmp,
    Risk: Risk,
    prioritized: prioritized,
    splSetting: splSetting,
  });
}
