<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);

  if (isset($data['to'], $data['subject'], $data['from'], $data['message'])) {

    $to = $data['to'];
    $subject = $data['subject'];
    $from = $data['from'];
    $cc = $data['cc'] ?? null;
    $message = $data['message'];

    $headers = "From: " . strip_tags($from) . "\r\n";
    $headers .= "Reply-To: " . strip_tags($from) . "\r\n";

    if ($cc) {
      $headers .= "CC: " . strip_tags($cc) . "\r\n";
    }

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
      http_response_code(200);
      echo 'Письмо успешно отправлено!';
    } else {
      http_response_code(500);
      echo 'Ошибка при отправке письма!';
    }
  } else {
    http_response_code(400);
    echo 'Не все необходимые данные были отправлены!';
  }
} else {
  http_response_code(405);
  echo 'Метод не поддерживает';
}
?>