"use strict";

function sendMessage(message) {
  var apiToken = "6397270725:AAFxRnvCz61lREhAHlmy1AWXqa9ax15SVNc";
  var chatId = "-1001522502501";
  var urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage?chat_id=").concat(chatId, "&text=").concat(message);
  var request = new XMLHttpRequest();
  request.open("GET", urlString);
  request.send();
  var response = request.response;
}

window.form_telegram.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = window.your_name.value;
  var mail = window.mail_for_form.value;

  if (name === '') {
    window.your_name.style.borderBottom = '1px solid red';
  }

  if (mail === '') {
    window.mail_for_form.style.borderBottom = '1px solid red';
  }

  sendMessage("Name: ".concat(name, " Mail: ").concat(mail));
});