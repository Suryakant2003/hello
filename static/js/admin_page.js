
document.addEventListener('DOMContentLoaded', function() {
    var userBtn = document.getElementById('user-btn');
    var accountBox = document.getElementById('account-box');

    // Toggle account box visibility
    userBtn.addEventListener('click', function() {
        accountBox.classList.toggle('active');
    });

    var messageElements = document.querySelectorAll('.message');

    messageElements.forEach(function(messageElement) {
        messageElement.querySelector('.fa-times').addEventListener('click', function() {
            messageElement.remove();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var messBtn = document.getElementById('mess-btn');

    if (messBtn) {
        messBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action (e.g., following the link)
            window.location.href = 'admin_contacts.html'; // Navigate to admin_contacts.html
        });
    }
});
