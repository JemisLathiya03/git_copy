
// checkId.addEventListener("click",()=>{
//   console.log("checkbox is clicked");
//   e.preventDefault();
// })

// function clickCheckBox(e) {
//   console.log("checkbox is clicked");
//   e.preventDefault()
// }

  // document.getElementById("checkbox1").addEventListener("click", function(event){
  //   event.preventDefault()
  // });

function passchange() {
  var x = document.getElementById("plateformpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function togglrtodarkplateformlogin() {
  document.querySelector("#plateform-light").style.display = "block";
  document.querySelector("#plateform-dark").style.display = "none";
  document.querySelector(".login-plateform-form").style.backgroundColor = "black";
  document.querySelector("#plateformusername").style.backgroundColor = "#ffffff";
  document.querySelector(".plateform-login-form h3").style.color = "#ffffff";
  document.querySelector("#plateformpassword").style.backgroundColor = "#ffffff";
  document.querySelector("#plateform-light").style.backgroundColor = "#f5fdff";
}

function togglrtolightplateformlogin() {
  document.querySelector("#plateform-light").style.display = "none";
  document.querySelector("#plateform-dark").style.display = "block";
  document.querySelector(".login-plateform-form").style.backgroundColor = "#f9f9f9";
  document.querySelector("#plateformusername").style.backgroundColor = "unset";
  document.querySelector(".plateform-login-form h3").style.color = "black";
  document.querySelector("#plateformpassword").style.backgroundColor = "unset";
}

function togglrtodarkplateformforgot() {
  document.querySelector("#plateform-light").style.display = "block";
  document.querySelector("#plateform-dark").style.display = "none";
  document.querySelector(".login-plateform-form").style.backgroundColor = "black";
  document.querySelector("#plateformusername").style.backgroundColor = "#ffffff";
  document.querySelector(".plateform-login-form h3").style.color = "#ffffff";
  document.querySelector("#plateform-light").style.backgroundColor = "#f5fdff";
}

function togglrtolightplateformforgot() {
  document.querySelector("#plateform-light").style.display = "none";
  document.querySelector("#plateform-dark").style.display = "block";
  document.querySelector(".login-plateform-form").style.backgroundColor = "#f9f9f9";
  document.querySelector("#plateformusername").style.backgroundColor = "unset";
  document.querySelector(".plateform-login-form h3").style.color = "black";
}

// custmize active 

// Add active class to the current button (highlight it)
var header = document.getElementById("row-card");
var elements = document.getElementsByClassName("start-card");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-state-base");
    current[0].className = current[0].className.replace(" active-state-base", "");
    this.className += " active-state-base";
  });
}


let adminOpenMobileView = document.querySelectorAll(".admin-dashboard-mobile-open");
let adminOpenMobileViewPanel = document.querySelectorAll(".admin-dashboard-mobile-open-panel");
let adminOpenMobileViewShowButton = document.querySelectorAll(".admin-dashboard-mobile-close-button");

adminOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log("ghjk");
    if (adminOpenMobileViewPanel[index].style.display == "block") {
      adminOpenMobileViewPanel[index].style.display = "none";
      adminOpenMobileViewShowButton[index].style.display = "none";
    }
    else{
      adminOpenMobileViewPanel[index].style.display = "block";
      adminOpenMobileViewShowButton[index].style.display = "block";
    }
  })
});
adminOpenMobileViewShowButton.forEach((element, index) => {
  element.addEventListener("click", () => {
    adminOpenMobileViewPanel[index].style.display = "none";
    adminOpenMobileViewShowButton[index].style.display = "none";
  })
});

// patient-dashbord-mobile view


let patientOpenMobileView = document.querySelectorAll(".patient-dashboard-mobile-open");
let patientOpenMobileViewPanel = document.querySelectorAll(".patient-dashboard-mobile-open-panel");

patientOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (patientOpenMobileViewPanel[index].style.display == "block") {
      patientOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      patientOpenMobileViewPanel[index].style.display = "block";
    }
  })
});


// Provider-menu-mobile view


let providerMenuOpenMobileView = document.querySelectorAll(".provider-menu-mobile-open");
let providerMenuOpenMobileViewPanel = document.querySelectorAll(".provider-menu-mobile-open-panel");

providerMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (providerMenuOpenMobileViewPanel[index].style.display == "block") {
      providerMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      providerMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});


// User-accsee-mobile view


let userAccessMenuOpenMobileView = document.querySelectorAll(".user-access-mobile-open");
let userAccessMenuOpenMobileViewPanel = document.querySelectorAll(".user-access-mobile-open-panel");

userAccessMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (userAccessMenuOpenMobileViewPanel[index].style.display == "block") {
      userAccessMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      userAccessMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});

// partner-mobile view


let partnerMenuOpenMobileView = document.querySelectorAll(".partner-mobile-open");
let partnerMenuOpenMobileViewPanel = document.querySelectorAll(".partner-mobile-open-panel");

partnerMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (partnerMenuOpenMobileViewPanel[index].style.display == "block") {
      partnerMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      partnerMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});

// patient-history-mobile view


let patientHistoryMenuOpenMobileView = document.querySelectorAll(".patient-history-mobile-open");
let patientHistoryMenuOpenMobileViewPanel = document.querySelectorAll(".patient-history-mobile-open-panel");

patientHistoryMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (patientHistoryMenuOpenMobileViewPanel[index].style.display == "block") {
      patientHistoryMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      patientHistoryMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});

// patient-history-mobile view


let blockHistoryMenuOpenMobileView = document.querySelectorAll(".block-history-mobile-open");
let blockHistoryMenuOpenMobileViewPanel = document.querySelectorAll(".block-history-mobile-open-panel");

blockHistoryMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (blockHistoryMenuOpenMobileViewPanel[index].style.display == "block") {
      blockHistoryMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      blockHistoryMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});

// Serch-records-mobile view


let searchRecordsMenuOpenMobileView = document.querySelectorAll(".search-records-mobile-open");
let searchRecordsMenuOpenMobileViewPanel = document.querySelectorAll(".search-records-mobile-open-panel");

searchRecordsMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (searchRecordsMenuOpenMobileViewPanel[index].style.display == "block") {
      searchRecordsMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      searchRecordsMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});

// Email-log-mobile view


let emailLogMenuOpenMobileView = document.querySelectorAll(".email-log-mobile-open");
let emailLogMenuOpenMobileViewPanel = document.querySelectorAll(".email-log-mobile-open-panel");

emailLogMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (emailLogMenuOpenMobileViewPanel[index].style.display == "block") {
      emailLogMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      emailLogMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});


// SMS-log-mobile view


let SMSLogMenuOpenMobileView = document.querySelectorAll(".SMS-log-mobile-open");
let SMSLogMenuOpenMobileViewPanel = document.querySelectorAll(".SMS-log-mobile-open-panel");

SMSLogMenuOpenMobileView.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (SMSLogMenuOpenMobileViewPanel[index].style.display == "block") {
      SMSLogMenuOpenMobileViewPanel[index].style.display = "none";
    }
    else{
      SMSLogMenuOpenMobileViewPanel[index].style.display = "block";
    }
  })
});





// let openAndCloseMenubar=document.getElementById("dashboard-menubar");
// let sideMenubarForMobile=document.querySelector(".dashboard-nav-2");
// openAndCloseMenubar.addEventListener("click",()=> {
//   if (sideMenubarForMobile.style.display === "flex") {
//     sideMenubarForMobile.style.display="none";
//   }else{
//     sideMenubarForMobile.style.display="flex";
//   }
// })


// $(document).ready(function () {


//   // Add new js functions here -----------------------------------------------------------------
//   $(".toggle-sidebar,.overlay").click(function () {
//     $("body").toggleClass("sidebar-open")
//   });

// });

let adminDashbordAddClassSidebar=document.querySelector("body");
let adsbhfd=document.getElementById("dashboard-menubar");
let adminOverlayClickButtonChange=document.querySelector(".admin-dashboard-toggle-sidebar");
let adminOverlayClickOverleyChange=document.querySelector(".admin-dashboard-overley");
let menuButtonClickTime = 0;
adminOverlayClickButtonChange.addEventListener("click",()=> {
  console.log("hello");
  adminDashbordAddClassSidebar.classList.toggle("admin-dashboard-siderbar-open");
  document.querySelector(".admin-dashboard-siderbar-open .dashboard-nav-2").style.transition = "all 0.3s ease-in";
  // if (menuButtonClickTime == 0) {
  //   document.querySelector(".dashboard-nav-2").style.transition = "all 0.3s ease-in";
  //   menuButtonClickTime=1;
  // }
  // else{
  //   document.querySelector(".dashboard-nav-2").style.transition = "none";
  //   menuButtonClickTime=0;
  // }
  
})
adminOverlayClickOverleyChange.addEventListener("click",()=> {
  console.log("no");
  adminDashbordAddClassSidebar.classList.toggle("admin-dashboard-siderbar-open");
  // document.querySelector(".dashboard-nav-2").style.transition = "none";
})


// patient-requst-form-upload-button
function updateFileName(input) {
  var fileName = input.value.split('\\').pop();  // Get the file name from the path
  document.getElementById('fileName').innerText = fileName || "No file chosen";
}


//admin-edit-physician-account-upload-photo
// photo
function updateFileName1(input) {
  var fileName = input.value.split('\\').pop();  // Get the file name from the path
  document.getElementById('adminEditPhysicianPhotoUpload').innerText = fileName || "No file chosen";
}
// signature
function updateFileName2(input) {
  var fileName = input.value.split('\\').pop();  // Get the file name from the path
  document.getElementById('adminEditPhysicianSignatureUpload').innerText = fileName || "No file chosen";
}


//physician-profile-account-upload-photo
// photo
function updateFileName1(input) {
  var fileName = input.value.split('\\').pop();  // Get the file name from the path
  document.getElementById('adminEditPhysicianPhotoUpload').innerText = fileName || "No file chosen";
}
// signature
function updateFileName2(input) {
  var fileName = input.value.split('\\').pop();  // Get the file name from the path
  document.getElementById('adminEditPhysicianSignatureUpload').innerText = fileName || "No file chosen";
}



// patient-document-page-select all checkbox css


$('.selectall').click(function() {
if ($(this).is(':checked')) {
$('input:checkbox').prop('checked', true);
} else {
$('input:checkbox').prop('checked', false);
}
});

$("input[type='checkbox'].justone").change(function(){
var a = $("input[type='checkbox'].justone");
if(a.length == a.filter(":checked").length){
$('.selectall').prop('checked', true);
}
else {
$('.selectall').prop('checked', false);
}
});


// in search record in mobile select all checbox functionality
document.getElementById("select-all-checkbox").addEventListener("click",()=>{
  var elementCheck=document.getElementsByClassName('on-selection-checkox');  
  for(var i=0; i<elementCheck.length; i++){  
      if(elementCheck[i].type=='checkbox') {
          elementCheck[i].checked=true;  
      } 
  }
});


        