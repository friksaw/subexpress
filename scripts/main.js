function shiftCards() {
    const container = document.getElementById('container-cr');
    const cards = Array.from(container.children); // Преобразуем HTMLCollection в массив

    // "Сдвигаем" элементы массива
    cards.push(cards.shift());

    // Очищаем контейнер и добавляем карточки в новом порядке
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
}

function openBenefitCard() {
    document.getElementById("MyElement").classList.add('MyClass');

    document.getElementById("MyElement").classList.remove('MyClass');

    if ( document.getElementById("MyElement").classList.contains('MyClass') )

        document.getElementById("MyElement").classList.toggle('MyClass');
}

const cards = document.querySelectorAll('.card-benefit');

cards[1].classList.add('active')
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active')
    });
});