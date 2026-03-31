const button=document.getElementById("btn");
button.addEventListener("click",function(){
    fetch("https://api.ipify.org/")
    .then(response=>response.text())
    .then(ip=>{
        button.textContent=ip;
    })
    
});