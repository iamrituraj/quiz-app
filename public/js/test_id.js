var queryString = decodeURIComponent(window.location.search); //parsing 
queryString = queryString.substring(1);

document.getElementById("score-text1").textContent="Test ID = "+queryString;
document.getElementById("heading").innerHTML=`<p style="font-size:2rem;margin:2rem;font-weight:600;">Test created Successfully</p>`;
console.log()
var base=window.location.href.split('/')[2]=="localhost:3000" ?"http://localhost:3000/" : "https://pouncing-abundant-buffet.glitch.me//"
document.getElementById("link").innerHTML=`<a style="font-size:1.7rem;margin-top:2rem;text-decoration: none;" href="${base}teststart.html?testid=${queryString}">Start the Test</a>`;