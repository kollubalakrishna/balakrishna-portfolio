document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.bala-nav');
    const toggleButton = document.querySelector('.bala-menu-toggle');
    const icon = document.querySelector('.bala-menu-toggle i');

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Change to 'X' icon
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Change back to hamburger
        }
    });

    // Optional: Close menu when a link is clicked (useful for single-page sites)
    document.querySelectorAll('.bala-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});



function openPopup() {
    document.getElementById("projectPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("projectPopup").style.display = "none";
}


let index = 0;
const items = document.querySelectorAll(".testimonial-item");

function autoSlide() {
    items.forEach(item => item.classList.remove("active"));
    index = (index + 1) % items.length;
    items[index].classList.add("active");
}

setInterval(autoSlide, 4000);