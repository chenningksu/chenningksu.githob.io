document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            isValid = false;
            setErrorFor(nameInput, 'Name cannot be blank');
        } else {
            setSuccessFor(nameInput);
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            isValid = false;
            setErrorFor(emailInput, 'Email cannot be blank');
        } else if (!isEmailValid(emailInput.value.trim())) {
            isValid = false;
            setErrorFor(emailInput, 'Invalid email format');
        } else {
            setSuccessFor(emailInput);
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            isValid = false;
            setErrorFor(messageInput, 'Message cannot be blank');
        } else {
            setSuccessFor(messageInput);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector('small');

        // Add error message and class
        errorMsg.innerText = message;
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;

        // Remove error message and class
        formControl.className = 'form-control success';
    }

    function isEmailValid(email) {
        // Regular expression for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //Typical Regex used for email
        return emailRegex.test(email);
    }
});
