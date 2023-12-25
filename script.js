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

// Timer in form
function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      // You can add a message or perform an action when the timer reaches zero
      display.textContent = "00:00";
      // Alternatively, you can restart the timer
      // timer = duration;
    }
  }, 1000);
}

btnSubmit.addEventListener("click", () => {
  showForm.style.display = "block";
  popup.style.display = "none";
  wheelWrapper.style.display = "none";

  function timer () {
    let initialTime = 9 * 60 + 50; // 9 minutes and 50 seconds
    let display = document.getElementById("countdown");
    startTimer(initialTime, display);
  };
  timer();
});

//Post date
// Function to get the current date and time in a formatted string
function getCurrentDateTime() {
  const currentDateTime = new Date();
  currentDateTime.setDate(currentDateTime.getDate() - 7);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return currentDateTime.toLocaleDateString(options).replace(/\//g, "-");
}

// Update the content of the date and time container with the current date and time
function updateDateTimeContainer() {
  const datetimeContainer = document.querySelector(".date");
  datetimeContainer.textContent = getCurrentDateTime();
}

// Call the function initially
updateDateTimeContainer();

//Post date

// Comments dates
function getDateMinusDays(days) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);

  const options = { year: "numeric", month: "long", day: "2-digit" };
  return currentDate.toLocaleDateString(options).replace(/\//g, "-");
}

function updateDateContainers() {
  for (let i = 1; i <= 7; i++) {
    const dateContainer = document.querySelectorAll(`.date${i}`);
    dateContainer.forEach((e) => {
      e.textContent = getDateMinusDays(i);
    });
  }
}

// Call the function initially
updateDateContainers();

// Comments dates

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
// Menu toggle

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
// Form phone

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
const removeClassForElement = (element) =>
  element.classList.remove("dark-mode");

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
    commentDiv.innerHTML = `<div class="comments-info__top">
        <H5>${name}</H5>
     </div>
    <div class="comments-info__comment">${text}</div>
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
    return currentDate.toLocaleDateString(options).replace(/\//g, "-");
  }
  function updateActualDateContainer() {
    const dateContainer3 = document.querySelectorAll(".date0");
    dateContainer3.forEach((e) => {
      e.textContent = getDate0Days();
    });
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

// Add like or dislike
function updateLikes(likeContainer, count) {
  const likeSpan = likeContainer.querySelector("span");
  let currentLikes = parseInt(likeSpan.textContent);
  currentLikes += count;
  likeSpan.textContent = currentLikes;
}

function handleLikeClick(event) {
  const clickedElement = event.target;

  // Check if the clicked element or its ancestor is a "like" container with the "green" class
  const greenContainer = clickedElement.closest(".like.green");
  const redContainer = clickedElement.closest(".like.red");
  const redContainerDisabled = document.querySelector(".red");
  const greenContainerDisabled = document.querySelector(".green");

  if (greenContainer && !greenContainer.classList.contains("clicked")) {
    updateLikes(greenContainer, 1);
    greenContainer.classList.add("clicked");
    redContainerDisabled.classList.add("disabled");
    document.removeEventListener("click", handleLikeClick);
  }
  if (redContainer && !redContainer.classList.contains("clicked")) {
    updateLikes(redContainer, 1);
    redContainer.classList.add("clicked");
    greenContainerDisabled.classList.add("disabled");
    document.removeEventListener("click", handleLikeClick);
  }
}

document.addEventListener("click", handleLikeClick);

// Actual dates in content
function getActualDate() {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());

  const options = { year: "numeric", month: "long", day: "2-digit" };
  return currentDate.toLocaleDateString(options).replace(/\//g, "-");
}
function updateActualDates() {
  const dateContainerToday = document.querySelectorAll(".dateToday");
  dateContainerToday.forEach((e) => {
    e.textContent = getActualDate();
  });
}

updateActualDates();
