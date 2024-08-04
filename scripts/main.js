const cards = document.querySelectorAll('.card-benefit');

cards[1].classList.add('active')
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active')
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;

        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);

        // Check if the new scroll position exceeds
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >=
            carousel.scrollWidth - carousel.offsetWidth) {

            // If so, prevent further dragging
            isDragging = false;
            return;
        }

        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };



const sendEmail = () => {
    const name = $('#name').val();
    const email = $('#email').val();
    const phone = $('#phone').val();

    console.log(1)

    Email.send({
        Host: "Zakaz@subexpress.ru",
        Username: "<Mailtrap username>",
        Password: "<Mailtrap password>",
        To: ' Zakaz@subexpress.ru ',
        From: " name ",
        Subject: "Test email",
        Body: name,email,phone
    }).then(
        message => alert(message)
    );
}}
