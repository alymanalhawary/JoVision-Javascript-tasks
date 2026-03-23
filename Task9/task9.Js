function GetIP(){
    fetch("https://api.ipify.org/")
    .then(Response=>Response.text())
    .then(data=>console.log(data));
}