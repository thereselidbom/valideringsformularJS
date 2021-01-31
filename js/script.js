
//selectors

let users = []

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


//functions 


function checkInputs(){
    //get value from inputs
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const emailValue = email.value

    if(firstNameValue === '') {
      setErrorFor(firstName, 'firstname cannot be blank');
    } 
    else if (firstName.value.length < 2) {
      setErrorFor(firstName, 'firstname must be at least two letters');
    }       else {
      setSuccessFor(firstName);
    }

    

    if(lastNameValue === '') {
      setErrorFor(lastName, 'lastname cannot be blank');
    } 
    else if (firstName.value.length < 2) {
      setErrorFor(lastName, 'lastname must be at least two letters');
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

  //error error  message
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


//list-functions
function listUsers() {
  output.innerHTML = ''
  users.forEach(user => {
    output.innerHTML += `<div id="user">
    <p>${user.firstName} ${user.lastName}</p>
    <p id="small">${user.email}</p>
  </div>`
  })

}

function addUser() {
  let user = {
    id: Date.now().toString(),
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim()
  }
  users.push(user);
  listUsers();
}