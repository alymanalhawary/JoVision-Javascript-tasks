const button=document.getElementById("btn");
button.addEventListener("click",function (){
    const nameValue=document.getElementById("name").value;
    const ageValue=document.getElementById("age").value;
    const person={
        name:nameValue,
        age:ageValue,
        timestamp:new Date().toLocaleString()
    };
    const {name,age,timestamp}=person;
    alert("Your name is: "+name+
        "\nYour age is:"+age+
        "\nTimestamp: "+timestamp
    );

}

)