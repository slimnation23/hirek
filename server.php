<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $tel = $_POST["tel"];
    $sendName = $_POST["sendName"];
    $sendTel = $_POST["sendTel"];

    $to = "slimnation2@yandex.com";
    $subj = "New contact form submission";
    // $body = "Name: $name\nTelegram: $telegram\nWebsite: $website\nEmail: $email\nSubject: $subject\nBudget: $budget\nMessage: $message";
    $headers = [
      "From" => "slimnation.com.ua",
      "Content-type" => "text/html; charset=utf8"
    ];

    $body = "Name: $name<br>Telephone: $tel<br>Sender Name: $sendName<br>Sender Telephone: $sendTel";

    mail($to, $subj, $body, $headers);
}
?>