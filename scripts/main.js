function shiftCards() {
    const container = document.getElementById('container-cr');
    const cards = Array.from(container.children); // Преобразуем HTMLCollection в массив

    // "Сдвигаем" элементы массива
    cards.push(cards.shift());

    // Очищаем контейнер и добавляем карточки в новом порядке
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
}