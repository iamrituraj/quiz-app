
document.getElementById("submit-button").onclick = function (event) {
    let value2 = document.getElementById('number_of_que_user').value;
    let value4 = document.getElementById('time_limit').value;
    let value3='id' + (new Date()).getTime();

    event.preventDefault();
   
    var queryString = "?id=" + value3 + "&u" + value2 + "&t" + value4;
    location.href = "/test_id.html"+queryString;
};