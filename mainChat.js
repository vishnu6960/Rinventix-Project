document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const message = document.getElementById('chatMessage').value;
    const imageFile = document.getElementById('chatImage').files[0];

    if (message || imageFile) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'my-message');

        if (message) {
            const messageText = document.createElement('p');
            messageText.textContent = message;
            messageElement.appendChild(messageText);
        }

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imagePreview = document.createElement('img');
                imagePreview.src = e.target.result;
                imagePreview.classList.add('img-fluid', 'chat-image');
                messageElement.appendChild(imagePreview);
                document.querySelector('.chat-box').appendChild(messageElement);
            };
            reader.readAsDataURL(imageFile);
        } else {
            document.querySelector('.chat-box').appendChild(messageElement);
        }

        // Clear form fields
        document.getElementById('chatMessage').value = '';
        document.getElementById('chatImage').value = '';
        document.getElementById('imagePreview').innerHTML = '';

        // Scroll to the latest message
        document.querySelector('.chat-box').scrollTop = document.querySelector('.chat-box').scrollHeight;

        // If you have an API, you'd send the message/image here
        // Example (pseudo-code):
        /*
        fetch('API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`, // If using JWT
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                image: imageFile // This needs proper handling, e.g., using FormData
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle response
        })
        .catch(error => console.error('Error:', error));
        */
    }
});

document.getElementById('chatImage').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('imagePreview').innerHTML = `
                <img src="${e.target.result}" class="img-fluid" alt="Preview" />
            `;
        };
        reader.readAsDataURL(file);
    }
});


