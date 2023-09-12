const email = document.querySelector('#email');
const button = document.querySelector('#submit');
const form = document.getElementById('form');


form.addEventListener('submit', e => {
  e.preventDefault();

  let emailValue = email.value.trim();
  let emailVerify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email.Value === ''){
    errorFunction('Please Provide a valid email address');
  } else if (!emailValue.match(emailVerify)){
    errorFunction('Looks like this is not an email')
  } else {
    successFunction()
  }
});

function errorFunction(message){
  const emailBox = document.querySelector('#email');
  const span = document.querySelector('#span');
  emailBox.classList.add('error');
  emailBox.classList.remove('success');
  span.innerText = message;
  span.className += 'error-text ';
  span.style.display = 'block';
}

function successFunction(){
  const emailBox = document.querySelector('#email');
  const span = document.querySelector('#span');
  emailBox.classList.add('success');
  emailBox.classList.remove('error');
  span.style.display = 'none';
}