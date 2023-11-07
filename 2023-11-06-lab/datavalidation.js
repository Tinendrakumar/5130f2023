// Reg Expression for Email Address
const emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Example:
const email = 'User@gmail.com';
if (email.match(emailformat)) {
    console.log('Valid email address: ', email);  // display the email address if it is valid');
} else {
    console.log('Invalid email address:', email);
}

// Reg Expression for Phone Number
const phoneformat = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

// Example:
const phoneNumber = '(617) 456 8700';
if (phoneNumber.match(phoneformat)) {
    console.log('Valid phone number:', phoneNumber);  // display the phone number if it is valid
} else {
    console.log('Invalid phone number:', phoneNumber);
}

// Reg Expression for Well-formed URL
const urlformat = /^(ftp|http|https):\/\/(www\.)[\w\-]+(\.[\w\-]+)+([\w\-,@?^=%&:/~#]*[\w\-?^=%&/~#])?/;

// usage:
const url = 'https://www.domain.com';
if (url.match(urlformat)) {
    console.log('Valid URL:', url);  // display the URL if it is valid
} else {
    console.log('Invalid URL:', url);
}
