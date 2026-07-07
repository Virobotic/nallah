 document.addEventListener('DOMContentLoaded', () => {

            // Mobile Navigation Logic
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll('.nav-links li');

            burger.addEventListener('click', () => {
                // Toggle Nav Drawer
                nav.classList.toggle('nav-active');

                // Animated Burger lines
                burger.classList.toggle('toggle');
            });

            // Handle Closing Nav bar when link is clicked (mobile view)
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (nav.classList.contains('nav-active')) {
                        nav.classList.remove('nav-active');
                        burger.classList.remove('toggle');
                    }
                });
            });


            // Portfolio Project Filtering Logic
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active status from all buttons and add to the clicked button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter');

                    projectCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                            // Optional subtle entry fade effect
                            setTimeout(() => { card.style.opacity = '1'; }, 50);
                        } else {
                            card.style.opacity = '0';
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Form Submission Handling 
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for reaching out! This mock form structure successfully captured your submit request.');
                contactForm.reset();
            });
        });