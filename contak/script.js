document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
});
// document.getElementById('menu-toggle').addEventListener('click', function() {

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    const userConfirmation = confirm("Apakah Anda akan beralih ke halaman selanjutnya?");
    if (userConfirmation) {
        alert("Anda memilih untuk melanjutkan.");
        // Redirect to another page or handle further actions here
        // window.location.href = 'next_page.html';
    } else {
        alert("Anda membatalkan tindakan.");
    }
}

function confirmNavigation(event) {
    const userConfirmation = confirm("Apakah Anda ingin pindah ke halaman ini?");
    if (!userConfirmation) {
        event.preventDefault(); // Prevent the link from navigating
    }
}