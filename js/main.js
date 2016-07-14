var submit = document.getElementById('contactform');

function submissionCheck(event) {
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');

    event.preventDefault();

    console.log('The first name is: ' + fname.value);
    console.log('The last name is: ' + lname.value);
    console.log('The email is: ' + email.value);
    console.log('The message is: ' + comments.value);
}

submit.addEventListener('submit', submissionCheck);
