// HOME SECTION SLIDER................................................................
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    // Wrap around the slide index
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100; // Calculate offset for the slides
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    // Add active class to the current slide
    slides[currentSlide].classList.add('active');
}

// Function to automatically change slides
function autoSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Start automatic sliding
setInterval(autoSlide, 5000); // Change slide every 5 seconds






// ################################################################
// GALLERY FILTER BUTTONS..........................................
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-button');

    // Show or hide gallery items based on the selected category
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.classList.contains(category) ? 'block' : 'none';
        }
    });

    // Remove 'active' class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === category);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

