    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("vishnu")

        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(username, email, password)

        fetch('http://dev.devsofrinventix.com:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name:username, email, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.message == "Registration successful") {
                alert('Registration successful!');                                
                window.location.href = 'login.html'
            } else {
                alert('Registration failed: ' + data.message);
            }
            console.log("success", data)
        })
        .catch(error => console.error('Error:', error));
    });
