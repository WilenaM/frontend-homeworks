

function sendMessage(message) {


const apiToken = "6397270725:AAFxRnvCz61lREhAHlmy1AWXqa9ax15SVNc";
const chatId = "-1001522502501";

let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${message}`;

let request = new XMLHttpRequest();
request.open("GET", urlString);
request.send();

let response = request.response;
}

window.form_telegram.addEventListener('submit', function(event) {
    event.preventDefault();

    const  name = window.your_name.value;
    const  mail = window.mail_for_form.value;

    if (name === '') {
        window.your_name.style.borderBottom = '1px solid red';
    }

    if (mail === '') {window.mail_for_form.style.borderBottom = '1px solid red';
    }

sendMessage(`Name: ${name} Mail: ${mail}`); 

})



