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
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const nav = document.querySelector(".nav");
  const infoDesk = document.querySelector(".info-desk");
  const warning = document.querySelector(".warning");
  const popupDark = document.querySelector(".popup");
  const orderForm = document.querySelector("#order_form");
  const formDark = document.querySelector(".form");
  const wheelCursor = document.querySelector(".wheel__cursor-text");
  const bgColor = document.querySelectorAll(".bg-dark");
  const colorDark = document.querySelectorAll(".color-dark");
  const links = document.querySelectorAll(".links");

  // Check the user's preference from localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    nav.classList.add("dark-mode");
    menuBtn.classList.add("dark-mode");
    navList.classList.add("dark-mode");
    wheelCursor.classList.add("dark-mode");
    infoDesk.classList.add("dark-mode");
    popupDark.classList.add("dark-mode");
    orderForm.classList.add("dark-mode");
    formDark.classList.add("dark-mode");
    warning.classList.add("dark-mode");
    navLink.forEach((e) => {
      e.classList.add("dark-mode");
    });
    colorDark.forEach((e) => {
      e.classList.add("dark-mode");
    });
    bgColor.forEach((e) => {
      e.classList.add("dark-mode");
    });
    links.forEach((e) => {
      e.classList.add("dark-mode");
    });
    darkModeToggle.checked = true;
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      body.classList.add("dark-mode");
      nav.classList.add("dark-mode");
      menuBtn.classList.add("dark-mode");
      navList.classList.add("dark-mode");
      wheelCursor.classList.add("dark-mode");
      warning.classList.add("dark-mode");
      popupDark.classList.add("dark-mode");
      orderForm.classList.add("dark-mode");
      formDark.classList.add("dark-mode");
      infoDesk.classList.add("dark-mode");
      navLink.forEach((e) => {
        e.classList.add("dark-mode");
      });
      colorDark.forEach((e) => {
        e.classList.add("dark-mode");
      });
      bgColor.forEach((e) => {
        e.classList.add("dark-mode");
      });
      links.forEach((e) => {
        e.classList.add("dark-mode");
      });
      localStorage.setItem("dark-mode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      nav.classList.remove("dark-mode");
      menuBtn.classList.remove("dark-mode");
      wheelCursor.classList.remove("dark-mode");
      infoDesk.classList.remove("dark-mode");
      navList.classList.remove("dark-mode");
      orderForm.classList.remove("dark-mode");
      warning.classList.remove("dark-mode");
      formDark.classList.remove("dark-mode");
      popupDark.classList.remove("dark-mode");
      navLink.forEach((e) => {
        e.classList.remove("dark-mode");
      });
      colorDark.forEach((e) => {
        e.classList.remove("dark-mode");
      });
      bgColor.forEach((e) => {
        e.classList.remove("dark-mode");
      });
      links.forEach((e) => {
        e.classList.remove("dark-mode");
      });
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
