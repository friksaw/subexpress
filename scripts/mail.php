<?php
$name = $_POST['name'];
$email = $_POST['email'];

// Обработка и очистка данных
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);

// Подготовка заголовков для письма
$headers = "From: Zakaz@subexpress.ru\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

// Формирование текста письма
$message = "ФИО: $name<br>";
$message .= "E-mail: $email<br>";
$message .= "Телефон: {ваш телефон}<br>";

// Отправка письма
if (mail('Zakaz@subexpress.ru', 'Заявка с сайта', $message, $headers)) {
    echo "Сообщение успешно отправлено";
} else {
    echo "При отправке сообщения возникли ошибки";
}
?>