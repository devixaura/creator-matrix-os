// WAITLIST FORM HANDLING WITH GOOGLE SHEETS
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page ko reload hone se rokna

    // Inputs ki values nikalna
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const channel = document.getElementById('channel').value;

    const formData = { name, email, channel };

    // ⚠️ APNA GOOGLE APPS SCRIPT WALA URL NEECHE PASTE KARO
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwg_1jODOuObnBODd1-U07w6_nl4jZGAqZ2bTVq-sOeFUV-QRIvJGbEBhF_7GupE3fI/exec';

    // Google Sheets par data bhejney ka fetch function
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // CORS issues se bachne ke liye
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        // Form ko chhupana aur Success Message dikhana
        document.getElementById('waitlistForm').style.display = 'none';
        document.getElementById('successMessage').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('Something went wrong. Please try again!');
    });
});