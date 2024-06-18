
document.addEventListener('DOMContentLoaded', function() {
    const messageBoxes = document.querySelectorAll('.box');
    const emptyMessage = document.querySelector('.empty');

    if (messageBoxes.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }

    // Connect the mess-btn to the admin_contacts.html
    const messBtn = document.getElementById('mess-btn');
    messBtn.addEventListener('click', function() {
        window.location.href = 'admin_contacts.html';
    });

    // Toggle the account-box visibility
    const userBtn = document.getElementById('user-btn');
    const accountBox = document.getElementById('account-box');

    userBtn.addEventListener('click', function() {
        if (accountBox.style.display === 'block') {
            accountBox.style.display = 'none';
        } else {
            accountBox.style.display = 'block';
        }
    });

    // Optional: Close account-box when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!accountBox.contains(event.target) && !userBtn.contains(event.target)) {
            accountBox.style.display = 'none';
        }
    });
});