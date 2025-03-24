
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
  
    var name = getElementVal("name");
    var department = getElementVal("department");
    var semester = getElementVal("semester");
    var description = getElementVal("description");
    
  
    saveMessages(name, department, semester, description, status);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("complaintForm").reset();
  }
  
  const saveMessages = (name, department, semester,description,status) => {
    var newComplaintForm = complaintFormDB.push();
  
    newComplaintForm.set({
      name: name,
      department:department ,
      semester: semester,
      description: description,
      status: "pending",
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  