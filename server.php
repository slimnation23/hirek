<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $tel = $_POST["tel"];
    $sendName = $_POST["sendName"];
    $sendTel = $_POST["sendTel"];

    $to = "mail@gmail.com";
    $subj = "New contact form submission";
    // $body = "Name: $name\nTelegram: $telegram\nWebsite: $website\nEmail: $email\nSubject: $subject\nBudget: $budget\nMessage: $message";
    $headers = [
      "From" => "slimnation.com.ua",
      "Content-type" => "text/html; charset=utf8"
    ];

    $body = '
    <html>
    <body>
    <center>
    <table border="1" cellpadding="6" sellspacing="0" width="90%" bordercolor="#DBDBDB">
    <tr>
    <td colspan="2" align="center" bgcolor="#E4E4E4"><b>Information</b></td>
    </tr>';
    $body .= '
    <tr>
    <td><b>Name</b></td>
    <td>'. $name .'</td>
    </tr>
    <tr><td><b>Teleram</b></td>
    <td>'. $tel .'</td>
    </tr>
    <tr>
    <td><b>Name</b></td>
    <td>'. $sendName .'</td>
    </tr>
    <tr><td><b>Teleram</b></td>
    <td>'. $sendTel .'</td>
    </tr>
    ';

    mail($to, $subj, $body, $headers);
}
?>