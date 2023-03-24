'use strict'

/** Cookie toast policy */
window.addEventListener("load", function() {
    if (localStorage.getItem("cookieToastShown") !== "true") {
      var cookieToast = document.getElementById("cookieToast");
      var cookieToastEl = new bootstrap.Toast(cookieToast);
      cookieToastEl.show();
      localStorage.setItem("cookieToastShown", "true");
    }
});