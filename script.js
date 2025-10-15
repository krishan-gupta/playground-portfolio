// Get the elements from the HTML
        const popup = document.getElementById('popup');
        const closeBtn = document.getElementById('close-popup');

        // Add a 'click' event listener to the close button
        closeBtn.addEventListener('click', function() {
            // When the button is clicked, hide the pop-up
            popup.style.display = 'none';
        });