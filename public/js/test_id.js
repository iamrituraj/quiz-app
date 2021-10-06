let queryString = decodeURIComponent(window.location.search); //parsing 
queryString = queryString.substring(1);

document.getElementById("heading").innerHTML=`<p style="font-size:2rem;margin:2rem;font-weight:600;">Share this Link</p>`;

let base = window.location.href.split('/')[2] == "localhost:3000" ? "http://localhost:3000/" : "http://walkoverquizapp-env.eba-naqqkjp9.us-east-2.elasticbeanstalk.com//"
document.getElementById("link").innerHTML=`<a style="font-size:1.7rem;margin-top:2rem;text-decoration: none;" href="${base}index.html?testid=${queryString}">Start the Test</a>`;
document.getElementById("score-text1").textContent=`${base}index.html?testid=${queryString}`;
