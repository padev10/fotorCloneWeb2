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
    ic.classList.remove("fa-chevron-down");
    ic.classList.add("fa-chevron-up");
    // hide response
    rp.style.display = "block";
  } else {
    ic.classList.remove("fa-chevron-up");
    ic.classList.add("fa-chevron-down");
    // show response
    rp.style.display = "none";
  }
}
