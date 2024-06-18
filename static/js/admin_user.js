document.addEventListener('DOMContentLoaded', function() {
    // Find the mess-btn element
    var messBtn = document.getElementById('mess-btn');
    
    // Add a click event listener to it
    messBtn.addEventListener('click', function() {
        // Navigate to admin_contacts.html
        window.location.href = 'admin_contacts.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.getElementById('user-btn');
    const accountBox = document.getElementById('account-box');

    // Toggle account box visibility on user button click
    userBtn.addEventListener('click', function() {
        accountBox.classList.toggle('show');
    });

    // Close account box if user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!accountBox.contains(event.target) && event.target !== userBtn) {
            accountBox.classList.remove('show');
        }
    });
});



