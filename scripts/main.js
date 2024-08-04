const cards = document.querySelectorAll('.card-benefit');

cards[1].classList.add('active')
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active')
    });
});

function sendEmail()  {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    Email.send("Zakaz@subexpress.ru",
        "Zakaz@subexpress.ru",
        "This is a subject",
        name + email + phone,
        {token: "63cb3a19-2684-44fa-b76f-debf422d8b00"});
}

function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const subject = 'Website Change Request';

    const data = {
        to: 'Zakaz@subexpress.ru',
        subject: subject,
        from: email,
        cc: 'susan@example.com',
        message: name + email + phone
    };

    fetch('../scripts/mail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка отправки письма');
            }
            return response.text();
        })
        .then(data => {
            // Успешная отправка
            alert('Письмо отправлено!');
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}

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

})

