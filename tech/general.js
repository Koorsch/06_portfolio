function scrollAndOpen(sectionId) {
  // Scrolle til sectionen
  const sticky = document.querySelector(".timeline");
  const stickyOffset = sticky.offsetHeight;
  const section = document.querySelector(sectionId);

  const offset = section.offsetTop - stickyOffset + 400;
  section.scrollIntoView({ top: offset, behavior: "smooth" });

  // Åbn den valgte section, luk de andre
  const details = document.querySelectorAll("details");
  details.forEach((detail) => {
    if (detail.closest(sectionId)) {
      detail.open = true; // Åbn den der section
    } else {
      detail.open = false; // Luk de andre
    }
  });
}
function closeAllDetails() {
  const details = document.querySelectorAll("details");
  details.forEach((detail) => {
    detail.open = false; // Lukk alle detail elementer
  });
}
function toggleDetails(element) {
  const section = element.closest("section");
  const detailsList = section.querySelectorAll("details");
  const detailsArray = [];
  //Fyld op arrayen
  for (let i = 0; i < detailsList.length; i++) {
    detailsArray.push(detailsList[i]);
  }
  // Toggle detail open/lukket i hele arrayen
  detailsArray.forEach((details) => {
    details.open = !details.open;
  });
  // Lukk di andre details
  const allDetails = document.querySelectorAll("details");
  allDetails.forEach((detail) => {
    if (!detailsArray.includes(detail)) {
      detail.open = false;
    }
  });
}

//Dette var det nemmeste.... Min semantik er noget bøvlet!
function toggle(detailsId) {
  //Tilføjer #navn og sender med i funktionen, dette blir gemt i en variable som specifikt peger på ID't
  var detailsElement = document.getElementById(detailsId);
  //Åbner hvis ikke åbnet
  detailsElement.open = !detailsElement.open;
}
function openFullScreen(img) {
  var fullscreenDiv = document.getElementById("fullscreen-preview");
  var imgElement = document.getElementById("preview-image");
  imgElement.src = img.src;
  fullscreenDiv.style.display = "block";
}
function closeFullScreen() {
  var fullscreenDiv = document.getElementById("fullscreen-preview");
  fullscreenDiv.style.display = "none";
}

//Den sjove progressbaren man rammer når man scroller ned lidt.
window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollbar").style.width = scrolled + "%";
};

// Variabel på knappen
const modeSwitch = document.querySelector("#modeSwitch");
// Lytt efter klip på knap
modeSwitch.addEventListener("click", function () {
  // Toggle på light-mode til body.
  document.body.classList.toggle("light-mode");
});
