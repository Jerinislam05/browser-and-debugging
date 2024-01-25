// normal alert
const alertUser = () => {
    alert('Please enter')
}

// confirm alert(ok click korle true return korbe r cancel e click korle false return korbe)
const student = () => {
    const serious = confirm('are you study');

    if(serious === true) {
        alert('well done!!!')
    } else {
        console.log('very bad!!!');
    }
}

// prompt alert
const getName = () => {
   const name = prompt('what is your name?');
   console.log(name);
}