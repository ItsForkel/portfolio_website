// validates contact form info
function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault(); // form doesnt work if empty
    } else {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
    }
}