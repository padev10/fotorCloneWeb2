////////////////////////////////////////////FAQS
//  variables
let div, icon, response;
// loop
for (let i = 1; i <= 7; i++) {
  // using a closure to execute code indivisually
  (function (index) {
    div = document.querySelector(`#f-${index}`);
    div.addEventListener("click", () => {
      // targeting icon & response
      icon = document.querySelector(`#i-${index}`);
      response = document.querySelector(`.resp-${index}`);
      action(response, icon);
    });
  })(i);
}
// condition showing and hiding
function action(rp, ic) {
  // condition
  if (ic.classList.contains("fa-chevron-down")) {
    // change icon
    ic.classList.remove("fa-chevron-down");
    ic.classList.add("fa-chevron-up");
    // hide response
    rp.style.display = "block";
  } else {
    // change icon
    ic.classList.remove("fa-chevron-up");
    ic.classList.add("fa-chevron-down");
    // show response
    rp.style.display = "none";
  }
}
////////////////////////////////////////////LANGUAGES
const lang = document.querySelector(".lang");
const box_list = document.querySelector(".lang-list");

const call = outer();

lang.addEventListener("click", call.inner);

// using a closure
function outer() {
  let isOpen = false;
  return {
    inner() {
      toggleBoxList();

      if (isOpen) {
        // If box_list is open, add a click event listener to handle clicks outside
        document.addEventListener("click", handleClickOutside);
      } else {
        // If box_list is closed, remove the click event listener
        document.removeEventListener("click", handleClickOutside);
      }
    },
  };

  function toggleBoxList() {
    if (!isOpen) {
      // Show box_list
      box_list.style.display = "block";
    } else {
      // Hide box_list
      box_list.style.display = "none";
    }

    isOpen = !isOpen;
  }

  function handleClickOutside(event) {
    if (!lang.contains(event.target) && !box_list.contains(event.target)) {
      // Clicked outside the lang and box_list, hide box_list
      box_list.style.display = "none";
      isOpen = false;
      document.removeEventListener("click", handleClickOutside);
    }
  }
}
