document.getElementById('signupBtn').addEventListener('click', function (e) {
    e.preventDefault();
    validateInputs();
  });
  
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');
  
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  };
  
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');
  
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };
  
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validateInputs = () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (name === '') {
      setError(document.getElementById('name'), 'Name is required');
    } else {
      setSuccess(document.getElementById('name'));
    }
  
    if (email === '') {
      setError(document.getElementById('email'), 'Email is required');
    } else if (!isValidEmail(email)) {
      setError(document.getElementById('email'), 'Provide a valid email address');
    } else {
      setSuccess(document.getElementById('email'));
    }
  
    if (password === '') {
      setError(document.getElementById('password'), 'Password is required');
    } else if (password.length < 8) {
      setError(document.getElementById('password'), 'Password must be at least 8 characters');
    } else {
      setSuccess(document.getElementById('password'));
    }
  };
  