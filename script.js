// Spin circle
const spinButton = document.querySelector(".wheel__cursor");
const popup = document.querySelector(".overlay");
const wheelWrapper = document.querySelector(".wheel__wrapper");

spinButton.addEventListener("click", spinWheel);
function showPopup() {
  setTimeout(() => {
    popup.style.display = "block";
  }, 4000);
}

function spinWheel() {
  const wheel = document.querySelector(".prize-wheel");
  const degrees = Math.floor(320) + 360 * 4; // Spin at least 5 full circles

  wheel.style.transform = `rotate(${degrees}deg)`;

  // Disable the spin button during animation (optional)
  spinButton.style.pointerEvents = "none";

  // Reset the wheel after the animation completes (adjust the duration)
  setTimeout(() => {
    wheel.style.transform = "rotate(deg)";
    spinButton.style.pointerEvents = "auto";
  }, 2000); // Should match the transition duration
  showPopup();
}

const showForm = document.querySelector(".order");
const btnSubmit = document.querySelector(".btn--submit");

btnSubmit.addEventListener("click", () => {
  showForm.style.display = "block";
  popup.style.display = "none";
  wheelWrapper.style.display = "none";
});

//Actual date
document.addEventListener("DOMContentLoaded", function () {
  // Function to get the current date and time in a formatted string
  function getCurrentDateTime() {
    const currentDateTime = new Date();
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return currentDateTime
      .toLocaleDateString("en-US", options)
      .replace(/\//g, "-");
  }

  // Update the content of the date and time container with the current date and time
  function updateDateTimeContainer() {
    const datetimeContainer = document.querySelector(".date");
    datetimeContainer.textContent = getCurrentDateTime();
  }

  // Call the function initially
  updateDateTimeContainer();
});

// Comments date
document.addEventListener("DOMContentLoaded", function () {
  // Function to get the date three days ago in a formatted string
  function getDateMinus3Days() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 3);

    const options = { year: "numeric", month: "long", day: "2-digit" };
    return currentDate.toLocaleDateString("en-US", options).replace(/\//g, "-");
  }
  function getDateMinus2Days() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 2);

    const options = { year: "numeric", month: "long", day: "2-digit" };
    return currentDate.toLocaleDateString("en-US", options).replace(/\//g, "-");
  }
  function getDateMinus1Days() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    const options = { year: "numeric", month: "long", day: "2-digit" };
    return currentDate.toLocaleDateString("en-US", options).replace(/\//g, "-");
  }

  // Update the content of the date container with the date three days ago
  function updateDateContainer() {
    const dateContainer = document.querySelectorAll(".date3");
    dateContainer.forEach((e) => {
      e.textContent = getDateMinus3Days();
    });
    const dateContainer1 = document.querySelectorAll(".date2");
    dateContainer1.forEach((e) => {
      e.textContent = getDateMinus2Days();
    });
    const dateContainer2 = document.querySelectorAll(".date1");
    dateContainer2.forEach((e) => {
      e.textContent = getDateMinus1Days();
    });
  }

  // Call the function initially
  updateDateContainer();
});

// Menu toggle
const menuBtn = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navList.classList.toggle("active");
  header.classList.toggle("open");

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("active");
      header.classList.remove("open");
    });
  });
}

// Form phone
const phoneBtn = document.querySelector(".coccoc-alo-phone");
const formPopup = document.querySelector(".overlay-form");
const cancelBtn = document.querySelector(".cancel-btn");

phoneBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formPopup.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  formPopup.style.display = "none";
});

// Dark mode
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const nav = document.querySelector(".nav");
const infoDesk = document.querySelector(".info-desk");
const warning = document.querySelector(".warning");
const popupDark = document.querySelector(".popup");
const orderForm = document.querySelector("#order_form");
const commentsList = document.querySelector("#comments-list");
const formDark = document.querySelector(".form");
const wheelCursor = document.querySelector(".wheel__cursor-text");
const bgColor = document.querySelectorAll(".bg-dark");
const colorDark = document.querySelectorAll(".color-dark");
const links = document.querySelectorAll(".links");

const elements = [
  body,
  nav,
  menuBtn,
  commentsList,
  navList,
  wheelCursor,
  infoDesk,
  popupDark,
  orderForm,
  formDark,
  warning,
];
const arrays = [navLink, colorDark, bgColor, links];

const addClassForElement = (element) => element.classList.add("dark-mode");
const removeClassForElement = (element) => element.classList.remove("dark-mode");

const addClassForArray = (array) => array.forEach(addClassForElement);
const removeClassForArray = (array) => array.forEach(removeClassForElement);

const toggleDarkMode = () => {
  const toggleValue = darkModeToggle.checked;

  if (toggleValue) {
      elements.forEach((element) => addClassForElement(element));
      arrays.forEach((array) => addClassForArray(array));
      localStorage.setItem("dark-mode", "enabled");
  } else {
      elements.forEach((element) => removeClassForElement(element));
      arrays.forEach((array) => removeClassForArray(array));
      localStorage.setItem("dark-mode", "disabled");
  }
};

if (localStorage.getItem("dark-mode") === "enabled") {
  toggleDarkMode();
}

darkModeToggle.addEventListener("change", toggleDarkMode);

// Add comment
function addComment() {
  const nameInput = document.getElementById("comment-name");
  const textInput = document.getElementById("comment-text");
  const commentsList = document.getElementById("comments-list");
  const commentField = document.querySelector(".comment-field");
  var errorMessage = document.getElementById("error-message");

  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (name !== "" && text !== "") {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.innerHTML = `<div><strong>${name}</strong> <br /> ${text}</div>
      <div class="comments-info__bottom">
                  <a class="color-dark" id="add-like" href="#">Like</a>
                  <a class="color-dark" href="#">Valasz</a>
                  <a class="color-dark" href="#">Ossza</a>
                  <span class="date0"></span>
                </div>`;

    commentsList.appendChild(commentDiv);

    commentField.style.display = "none";
    commentsList.style.display = "flex";
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please enter values.";
  }

  const colorDark = document.querySelectorAll(".color-dark");

  if (localStorage.getItem("dark-mode") === "enabled") {
    colorDark.forEach((e) => {
      e.classList.add("dark-mode");
    });
  }

  function getDate0Days() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate());

    const options = { year: "numeric", month: "long", day: "2-digit" };
    return currentDate.toLocaleDateString("en-US", options).replace(/\//g, "-");
  }
  function updateActualDateContainer() {
    const dateContainer3 = document.querySelector(".date0");
    dateContainer3.textContent = getDate0Days();
  }

  updateActualDateContainer();

  const like = document.getElementById("add-like");

  like.addEventListener("click", (e) => {
    e.preventDefault();
    like.classList.toggle("bold");
  });
}

// Add like in comments
const like = document.querySelectorAll(".add-like");

like.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    e.classList.toggle("bold");
  });
});
