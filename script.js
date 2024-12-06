let dateOfBirth = document.querySelector("#dateOfBirth");
let dateOfAge = document.querySelector("#dateOfAge");
let calculateAgeBtn = document.querySelector(".calculateAge");
let age = document.querySelector(".full-age");
let nanBar = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", function () {
  var dateInputs = document.querySelectorAll("#dateOfBirth, #dateOfAge");

  var today = new Date();
  var year = today.getFullYear();
  var month = (today.getMonth() + 1).toString().padStart(2, "0");
  var day = today.getDate().toString().padStart(2, "0");

  var formattedDate = `${year}-${month}-${day}`;

  dateInputs.forEach(function (dateInput) {
    dateInput.value = formattedDate;
  });
});

let dob;
let ageDate;

dateOfBirth.addEventListener("change", function () {
  ageDate = new Date(dateOfBirth.value);
});

dateOfAge.addEventListener("change", function () {
  dob = new Date(dateOfAge.value);
});

calculateAgeBtn.addEventListener("click", function () {
  calculateAge();
});

function calculateAge() {
  let dob = new Date(dateOfBirth.value);
  let ageDate = new Date(dateOfAge.value);

  if (isNaN(dob.getTime()) || isNaN(ageDate.getTime())) {
    console.log("Invalid date");
    return;
  }

  let ageYears = ageDate.getFullYear() - dob.getFullYear();
  let ageMonths = ageDate.getMonth() - dob.getMonth();
  let ageDays = ageDate.getDate() - dob.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(ageDate.getFullYear(), ageDate.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  let ageInMonths = ageYears * 12 + ageMonths;
  if (ageDays > 0) {
    ageInMonths = `${ageInMonths} Months and ${ageDays} Days`;
  } else {
    ageInMonths = `${ageInMonths} Months`;
  }

  let ageInWeeks = Math.floor((ageDate - dob) / (1000 * 60 * 60 * 24 * 7));
  let ageInDays = Math.floor((ageDate - dob) / (1000 * 60 * 60 * 24));
  let ageInHours = Math.floor((ageDate - dob) / (1000 * 60 * 60));
  let ageInMinutes = Math.floor((ageDate - dob) / (1000 * 60));
  let ageInSeconds = Math.floor((ageDate - dob) / 1000);
  let ageInMilliseconds = ageDate - dob;

  age.innerHTML = `
    <p class="result">Result</p>
    <p class="age">Age:</p>
    <p>${ageYears} Years ${ageMonths} Months and ${ageDays} Days</p>
    <p>or ${ageInMonths}</p>
    <p>or ${ageInWeeks} weeks</p>
    <p>or ${ageInDays} days</p>
    <p>or ${ageInHours} hours</p>
    <p>or ${ageInMinutes} minutes</p>
    <p>or ${ageInSeconds} seconds</p>
    <p>or ${ageInMilliseconds} milliseconds</p>
  `;
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const isLightMode = document.body.classList.toggle("light-mode");
  document.querySelector(".main").classList.toggle("light-mode");
  document.querySelector(".calandor-container").classList.toggle("light-mode");
  document.querySelector(".footer").classList.toggle("light-mode");
  document.querySelector("nav").classList.toggle("light-mode");

  themeToggle.src = isLightMode ? "moon.png" : "download.png";

  const currentTheme = isLightMode ? "light-mode" : "dark-mode";
  localStorage.setItem("theme", currentTheme);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light-mode") {
    document.body.classList.add("light-mode");
    document.querySelector(".main").classList.add("light-mode");
    document.querySelector(".calandor-container").classList.add("light-mode");
    document.querySelector(".footer").classList.add("light-mode");
    document.querySelector("nav").classList.add("light-mode");

    themeToggle.src = "moon.png";
  } else {
    document.querySelector("nav").classList.add("darkMode");
    themeToggle.src = "download.png";
  }
});
