'use strict'
/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/

/** Cookie toast policy */
window.addEventListener("load", function() {
    if (localStorage.getItem("cookieToastShown") !== "true") {
      var cookieToast = document.getElementById("cookieToast");
      var cookieToastEl = new bootstrap.Toast(cookieToast);
      cookieToastEl.show();
      localStorage.setItem("cookieToastShown", "true");
    }
});