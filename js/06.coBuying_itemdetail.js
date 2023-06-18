const minus = document.querySelector(".fa-minus");
const plus = document.querySelector(".fa-plus");
const price = document.querySelector(".price");
const num = document.querySelector(".num");
const total = document.querySelector(".total");
const comment = document.querySelectorAll(".comment");

const pricecal = price.innerText.split(",").join("");
let i = 1;
minus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    num.innerText = i;
    total.innerText = (parseInt(pricecal) * i).toLocaleString();
  } else {
    minus.setAttribute("disabled", "disabled");
  }
});
plus.addEventListener("click", () => {
  i++;
  num.innerText = i;
  total.innerText = (parseInt(pricecal) * i).toLocaleString();
});

comment.forEach(function (e) {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  let comment_content = e.currentTarget.classList;

  if (comment_content.contains("open")) {
    comment_content.remove("open");
  } else {
    comment.forEach(function (e) {
      e.classList.remove("open");
    });
    comment_content.add("open");
  }
}

const question_list = document.querySelectorAll(".question-list");
const qcount = document.querySelector(".qcount");
qcount.innerText = question_list.length;

const ccount = document.querySelectorAll(".ccount");

ccount.forEach((e) => {
  e.innerText = comment.length;
});

const lock = document.querySelectorAll(".lock");

lock.forEach((e) => {
  e.addEventListener("click", () => {
    alert("비밀글입니다.");
  });
});

// Get the comment elements
const commentElements = document.querySelectorAll(".comment");

// Loop through each comment element
commentElements.forEach((commentElement, index) => {
  // Get the comment_num element within the comment
  const commentNumElement = commentElement.querySelector(".comment_num");

  // Set the comment_num text to the index + 1
  commentNumElement.textContent = index + 1;
});
// Get the comment count elements
const commentCountElements = document.querySelectorAll(".commentcount span");

// Hide all comment elements initially
commentElements.forEach((commentElement) => {
  commentElement.style.display = "none";
});

// Show the first five comments initially
for (let i = 0; i < 5 && i < commentElements.length; i++) {
  commentElements[i].style.display = "block";
}

// Loop through each comment count element
commentCountElements.forEach((element, index) => {
  // Add click event listener to each comment count element
  element.addEventListener("click", () => {
    // Hide all comment elements
    commentElements.forEach((commentElement) => {
      commentElement.style.display = "none";
    });

    // Remove 'active' class from all comment count elements
    commentCountElements.forEach((countElement) => {
      countElement.classList.remove("active");
    });

    // Calculate the starting and ending index for comments to be displayed
    const start = index * 5;
    const end = start + 5;

    // Show the selected comments based on the calculated indexes
    for (let i = start; i < end && i < commentElements.length; i++) {
      commentElements[i].style.display = "block";
    }

    // Add 'active' class to the clicked comment count element
    element.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const unlockElements = document.querySelectorAll(
    ".showquestion .title.unlock"
  );
  const questionContentElements =
    document.querySelectorAll(".question_content");

  unlockElements.forEach((unlockElement) => {
    unlockElement.addEventListener("click", () => {
      const questionContentElement =
        unlockElement.parentNode.nextElementSibling;

      questionContentElements.forEach((contentElement) => {
        if (contentElement !== questionContentElement) {
          contentElement.style.display = "none";
        }
      });

      questionContentElement.style.display =
        questionContentElement.style.display === "none" ? "block" : "none";
    });
  });
});

const buybtn_box = document.querySelector(".buybtn_mobile");
const cobuybtn = document.querySelector(".cobuybtn");
const buyboxclose = document.querySelector(".closeline");
const cobuy_select_itemwrap = document.querySelector(".cobuy_select_itemwrap");

cobuybtn.addEventListener("click", () => {
  // select_itemwrap.style.display = "block";
  cobuy_select_itemwrap.classList.add("buybox_open");
  // buybtn_box.style.display = "none";
});
buyboxclose.addEventListener("click", () => {
  // select_itemwrap.style.display = "none";
  cobuy_select_itemwrap.classList.remove("buybox_open");
  buybtn_box.style.display = "block";
});
