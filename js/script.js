
let users = [

]

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const output = document.getElementById('users');
const button = document.getElementById('button');



button.addEventListener('click', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    //get value from inputs
    var firstNameValue = firstName.value
    var lastNameValue = lastName.value
    var emailValue = email.value

    if(firstNameValue === '') {
      setErrorFor(firstName, 'firstname cannot be blank');
    } else {
      setSuccessFor(firstName);
    }

    if(lastNameValue === '') {
      setErrorFor(lastName, 'lastname cannot be blank');
    } else {
      setSuccessFor(lastName);
    }
    
    if(emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
    } else {
      setSuccessFor(email);
    }

    //add user:
  let elementsArray = document.getElementsByClassName("success");

  if (elementsArray.length === 3) {
    addUser()
    firstName.value = ''
    lastName.value = ''
    email.value = ''
  }
  
}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  //error message
  small.innerText = message;
  //classchange
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//list
function listUsers() {
  output.innerHTML = ''
  users.forEach(user => {
    output.innerHTML += `<div class="user">
    <p>${user.firstName} ${user.lastName}</p>
    <p id="small">${user.email}</p>
  </div>`
  })

}

function addUser() {
  let user = {
    id: Date.now().toString(),
    namn: firstName.value.trim(),
    efternamn: lastName.value.trim(),
    email: email.value.trim()
  }
  users.push(user);
  listUsers();
}

