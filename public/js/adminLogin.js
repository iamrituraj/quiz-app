let correctotp;


function otp_set(otp) {
    correctotp = otp;
}

async function email_send(email) {
    const data = {
        email
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    input_change();
    document.getElementById('custId').value = 'otp';

    const response = await fetch('/otp', options);
    const json = await response.json();
    otp_set(json)

}

function input_change() {
    let otp_tag = document.getElementById('otp');
    let email_tag = document.getElementById('email');
    email_tag.style.display = '';
    otp_tag.style.display = 'block';
}

function otp_check(user_otp) {
    if (user_otp == correctotp.otp) {
        window.location.href = '/adminMainPage.html'
    }
    else{
        alert("Please Enter valid otp");
    }
}

function handleLoginSubmit(event) {
    let element = document.getElementById('admin_email');
    email = element.value;
    event.preventDefault();
    email_send(email);
}


function handleOtpSubmit(event) {
    let element = document.getElementById('admin_otp');
    otp = element.value;
    event.preventDefault();
    otp_check(otp);
}


(function () {
    const forms = document.querySelectorAll('.admin-signin');
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (e) {
                let value = document.getElementById('custId').value;
                if (value == "email") {
                    handleLoginSubmit(e)
                } else {
                    handleOtpSubmit(e)
                }
            });
        });
})()