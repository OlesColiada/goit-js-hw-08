import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[type="email"]');
const userMessage = document.querySelector('textarea');


feedbackForm.addEventListener('input', throttle(function(){
    const userInput = {email: userEmail.value, massage: userMessage.value}
    let userInputJSON = JSON.stringify(userInput)
    localStorage.setItem("feedback-form-state", userInputJSON)
}, 500));


feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if(userEmail.value !== '' && userMessage.value !== ''){
    const emailValue = userEmail.value;
    const messageValue = userMessage.value;
    const formData = {
        email: emailValue,
        message: messageValue
    };
    console.log(formData);

    localStorage.clear();
    userEmail.value = '';
    userMessage.value = '';} else {alert('Fill in all fields of form please!')}
});


window.addEventListener('load', function(){
    const savedValue = localStorage.getItem("feedback-form-state");
    if(savedValue){
        let dataFromStorage = JSON.parse(savedValue);
        userEmail.value = dataFromStorage.email;
        userMessage.value = dataFromStorage.massage;
    } else {userEmail.value = ''; userMessage.value = '';}
});
