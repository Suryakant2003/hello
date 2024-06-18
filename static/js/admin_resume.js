
function setStatus(status, button) {
    var parent = button.parentNode;
    var selectedSpan = parent.querySelector('.selected');
    var rejectedSpan = parent.querySelector('.rejected');
    var buttons = parent.querySelectorAll('button');
    
    if (status === 'selected') {
       selectedSpan.style.display = 'inline';
       rejectedSpan.style.display = 'none';
    } else if (status === 'rejected') {
       selectedSpan.style.display = 'none';
       rejectedSpan.style.display = 'inline';
    }
    
    buttons.forEach(function(btn) {
       btn.style.display = 'none';
    });
 }

 function toggleTable() {
    var condition = document.getElementById('conditions').value;
    var mainTable = document.getElementById('main-table');
    var selectedTable = document.getElementById('selected-table');

    if (condition === 'selected') {
       mainTable.style.display = 'none';
       selectedTable.style.display = 'table';
    } else {
       mainTable.style.display = 'table';
       selectedTable.style.display = 'none';
    }
 }

 document.addEventListener('DOMContentLoaded', function() {
   var userBtn = document.getElementById('user-btn');
   var accountBox = document.getElementById('account-box');

   // Toggle account-box visibility on user-btn click
   userBtn.addEventListener('click', function() {
       accountBox.classList.toggle('active');
   });

   // Close account-box if clicked outside
   document.addEventListener('click', function(e) {
       if (!userBtn.contains(e.target) && !accountBox.contains(e.target)) {
           accountBox.classList.remove('active');
       }
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
