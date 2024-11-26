// JavaScript to handle showing more items
document.getElementById('moreItemsBtn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.hidden');
    
    hiddenItems.forEach(item => {
        item.style.display = 'block'; // Reveal hidden items
    });

    // Hide the 'More Items' button after showing the additional items
    this.style.display = 'none';
});
