async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#inputUsername').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
  
    console.log(username);
    console.log('===================');
    console.log(email);
    console.log('===================');
    console.log(password);
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}
  

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);