var changeModalButtonCssElements = document.getElementsByClassName("patient-dashboard-modal-body-button");
for (var i = 0; i < changeModalButtonCssElements.length; i++) {
    changeModalButtonCssElements[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("patient-dashboard-modal-body-button-active");
    current[0].className = current[0].className.replace(" patient-dashboard-modal-body-button-active", "");
    this.className += " patient-dashboard-modal-body-button-active";
  });
}

var onClickToRedirect=document.querySelector(".patient-dashboard-modal-body-button-redirect");

onClickToRedirect.addEventListener("click",()=>{
    var activeModelButtonToRedirect=document.querySelector(".patient-dashboard-modal-body-button-active");

    if (activeModelButtonToRedirect.id == "dashboard-modal-body-button-me") {
        onClickToRedirect.href = "submit_information.html";
    }
    else if (activeModelButtonToRedirect.id == "dashboard-modal-body-button-someOneElse") {
        onClickToRedirect.href = "submit_information_someone.html";
    }
})