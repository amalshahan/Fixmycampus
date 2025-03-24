const firebaseConfig = {
  apiKey: "AIzaSyAntn_AszKaERCxDJaYr1AqYulMSUyQVv8",
  authDomain: "fixmycampus-81313.firebaseapp.com",
  databaseURL: "https://fixmycampus-81313-default-rtdb.firebaseio.com",
  projectId: "fixmycampus-81313",
  storageBucket: "fixmycampus-81313.firebasestorage.app",
  messagingSenderId: "487715498876",
  appId: "1:487715498876:web:dbb370d680ac56b6c312f9"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var complaintFormDB = firebase.database().ref("complaintForm");

document.getElementById("complaintForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const user = firebase.auth().currentUser;
  if (user) {
    const email = user.email;
    const name = getElementVal("name");
    const department = getElementVal("department");
    const semester = getElementVal("semester");
    const description = getElementVal("description");
    const status = "Pending"; // Default status

    saveMessages(email, name, department, semester, description, status);

    // enable alert
    document.querySelector(".alert").style.display = "block";

    // remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // reset the form
    document.getElementById("complaintForm").reset();
  } else {
    console.error("User is not logged in.");
  }
}

const saveMessages = (email, name, department, semester, description, status) => {
  var newComplaintForm = complaintFormDB.push();

  newComplaintForm.set({
    email: email,
    name: name,
    department: department,
    semester: semester,
    description: description,
    status: status
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
