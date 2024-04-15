    // Client-side script to handle form submission
    document.getElementById('contactForm').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        const formData = new FormData(event.target);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        };
        
        // Send form data to server using fetch API
        try {
          const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          
          if (response.ok) {
            const responseData = await response.text();
            alert(responseData); // Show success message
          } else {
            throw new Error('Failed to submit form');
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred while submitting the form. Please try again later.');
        }
      });