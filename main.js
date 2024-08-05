const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const clickSound = new Audio('click.mp3'); // Add your click sound file

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    this.style.backgroundColor = '#f3f3f3'; // Highlight background color
    clickSound.play(); // Play click sound
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
    tabContentItem.style.opacity = 0; // Start with 0 opacity
    setTimeout(() => {
        tabContentItem.style.opacity = 1; // Fade in effect
        tabContentItem.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
        item.style.backgroundColor = ''; // Reset background color
    });
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
