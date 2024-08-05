
function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const subject = `New request from ${name}`;

    const data = {
        to: 'Zakaz@subexpress.ru',
        subject: subject,
        from: email,
        cc: '',
        message: 'name: ' + name + '; email: ' + email + '; phone: ' + phone
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
            alert('Письмо отправлено!')
            console.log('Письмо отправлено!');
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}

const cardsBenefit = document.querySelectorAll('.card-benefit');

cardsBenefit[1].classList.add('active')
cardsBenefit.forEach(card => {
    card.addEventListener('mouseover', () => {
        cardsBenefit.forEach(c => c.classList.remove('active'));
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

    const autoPlay = () => {

        // Return if window is smaller than 800
        if (window.innerWidth < 800) return;

        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;

        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

        // If the carousel is at the end, stop autoplay
        if (carousel.scrollLeft >= maxScrollLeft) return;

        // Autoplay the carousel after every 2500ms
        timeoutId = setTimeout(() =>
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () =>
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ?
                -firstCardWidth : firstCardWidth;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const carouselProducts = document.querySelector(".carousel-products");
    const arrowBtnsProducts = document.querySelectorAll(".wrapper-products i");
    const wrapperProducts = document.querySelector(".wrapper-products");

    const firstCardProducts = carouselProducts.querySelector(".card-products");
    const firstCardWidthProducts = firstCardProducts.offsetWidth;

    let isDraggingProducts = false,
        startXProducts,
        startScrollLeftProducts,
        timeoutIdProducts;

    const dragStartProducts = (e) => {
        isDraggingProducts = true;
        carouselProducts.classList.add("dragging");
        startXProducts = e.pageX;
        startScrollLeftProducts = carouselProducts.scrollLeft;
    };

    const draggingProducts = (e) => {
        if (!isDraggingProducts) return;

        const newScrollLeftProducts = startScrollLeftProducts - (e.pageX - startXProducts);

        if (newScrollLeftProducts <= 0 || newScrollLeftProducts >=
            carouselProducts.scrollWidth - carouselProducts.offsetWidth) {

            // If so, prevent further dragging
            isDraggingProducts = false;
            return;
        }

        carouselProducts.scrollLeft = newScrollLeftProducts;
    };

    const dragStopProducts = () => {
        isDraggingProducts = false;
        carouselProducts.classList.remove("dragging");
    };

    const autoPlayProducts = () => {
        if (window.innerWidth < 800) return;

        const totalCardWidthProducts = carouselProducts.scrollWidth;

        const maxScrollLeftProducts = totalCardWidthProducts - carouselProducts.offsetWidth;

        // If the carousel is at the end, stop autoplay
        if (carouselProducts.scrollLeft >= maxScrollLeftProducts) return;

        timeoutIdProducts = setTimeout(() =>
            carouselProducts.scrollLeft += firstCardWidthProducts, 2500);
    };

    carouselProducts.addEventListener("mousedown", dragStartProducts);
    carouselProducts.addEventListener("mousemove", draggingProducts);
    document.addEventListener("mouseup", dragStopProducts);
    wrapperProducts.addEventListener("mouseenter", () =>
        clearTimeout(timeoutIdProducts));
    wrapperProducts.addEventListener("mouseleave", autoPlayProducts);

    // Add event listeners for the arrow buttons to
    // scroll the carousel left and right
    arrowBtnsProducts.forEach(btn => {
        btn.addEventListener("click", () => {
            carouselProducts.scrollLeft += btn.id === "left-products" ?
                -firstCardWidthProducts : firstCardWidthProducts;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselProductsRight = document.querySelector(".carousel-products-right");
    const arrowBtnsProductsRight = document.querySelectorAll(".wrapper-products-right i");
    const wrapperProductsRight = document.querySelector(".wrapper-products-right");

    const firstCardProductsRight = carouselProductsRight.querySelector(".card-products-right");
    const firstCardWidthProductsRight = firstCardProductsRight.offsetWidth;

    let isDraggingProductsRight = false,
        startXProductsRight,
        startScrollLeftProductsRight,
        timeoutIdProductsRight;

    const dragStartProductsRight = (e) => {
        isDraggingProductsRight = true;
        carouselProductsRight.classList.add("dragging");
        startXProductsRight = e.pageX;
        startScrollLeftProductsRight = carouselProductsRight.scrollLeft;
    };

    const draggingProductsRight = (e) => {
        if (!isDraggingProductsRight) return;

        const newScrollLeftProductsRight = startScrollLeftProductsRight - (e.pageX - startXProductsRight);

        if (newScrollLeftProductsRight <= 0 || newScrollLeftProductsRight >=
            carouselProductsRight.scrollWidth - carouselProductsRight.offsetWidth) {

            // If so, prevent further dragging
            isDraggingProductsRight = false;
            return;
        }

        carouselProductsRight.scrollLeft = newScrollLeftProductsRight;
    };

    const dragStopProductsRight = () => {
        isDraggingProductsRight = false;
        carouselProductsRight.classList.remove("dragging");
    };

    const autoPlayProductsRight = () => {
        if (window.innerWidth < 800) return;

        const totalCardWidthProductsRight = carouselProductsRight.scrollWidth;

        const maxScrollLeftProductsRight = totalCardWidthProductsRight - carouselProductsRight.offsetWidth;

        // If the carousel is at the end, stop autoplay
        if (carouselProductsRight.scrollLeft >= maxScrollLeftProductsRight) return;

        timeoutIdProductsRight = setTimeout(() =>
            carouselProductsRight.scrollLeft += firstCardWidthProductsRight, 2500);
    };

    carouselProductsRight.addEventListener("mousedown", dragStartProductsRight);
    carouselProductsRight.addEventListener("mousemove", draggingProductsRight);
    document.addEventListener("mouseup", dragStopProductsRight);
    wrapperProductsRight.addEventListener("mouseenter", () =>
        clearTimeout(timeoutIdProductsRight));
    wrapperProductsRight.addEventListener("mouseleave", autoPlayProductsRight);

    // Add event listeners for the arrow buttons to
    // scroll the carousel left and right
    arrowBtnsProductsRight.forEach(btn => {
        btn.addEventListener("click", () => {
            carouselProductsRight.scrollLeft += btn.id === "left-products-right" ?
                -firstCardWidthProductsRight : firstCardWidthProductsRight;
        });
    });
});