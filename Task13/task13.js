const nameInput=document.getElementById('nameInput');
const submitButton=document.getElementById('submitButton');
submitButton.addEventListener('click',()=>{
    const name=nameInput.value.trim();
    if (!name){
        alert('Please enter a name.');
        return;
    }
    fetch(`ttps://api.agify.io/?name=${encodeURIComponent(name)}`)
    .then((response) => response.json())
    .then(({name,age})=>{
        alert(`Your name is: ${name}\nYour age is: ${age}`);
    })
    .catch((error)=>{
        console.error('Error fetching age:',error);
        alert('Something went wrong while frtching the age.');
    }
    );
});