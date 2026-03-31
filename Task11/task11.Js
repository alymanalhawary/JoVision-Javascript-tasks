const button=document.getElementById("btn");
button.addEventListener("click",function(){
    fetch("https://api.ipify.org/")
    .then(response=>{
        if(!response.ok){
            throw new Error ("Request failed");
        }
        return response.text();
    })
    .then(ip=>{
        button.textContent=ip;
    })
    .catch(error =>{
        alert (error.message);
    });
    
});