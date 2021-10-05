

document.getElementById("adminbutton").addEventListener("submit",function(e){
    handleadminbutton(e);
})

function handleadminbutton(event){
    console.log("hioa");
    event.preventDefault();
    window.location.href = "/adminLogin.html";
}
document.getElementById("start-test").addEventListener("submit",function(e){
    handlesubmitteststart(e);
})

function handlesubmitteststart(event){
    let testid=document.getElementById("testid").value;
    console.log("hioa");
    event.preventDefault();
    window.location.href = "/teststart.html?testid="+testid;
}


