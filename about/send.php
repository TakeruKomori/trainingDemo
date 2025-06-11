<?php
session_start();

// 入力値を取得
$fullname = $_SESSION['fullname'] ?? '';
$email    = $_SESSION['email'] ?? '';
$message  = $_SESSION['message'] ?? '';

// 管理者宛てメール
$to = "admin@test.ac";
$subject = "【お問い合わせ】$fullname 様より";
$body = <<<EOM
以下の内容でお問い合わせを受け付けました。

お名前：$fullname
メール：$email

お問い合わせ内容：
$message
EOM;

$headers = "From: $email";

// 送信実行
mb_language("Japanese");
mb_internal_encoding("UTF-8");
$success = mb_send_mail($to, $subject, $body, $headers);

if ($success) {
    $_SESSION = []; // セッション初期化
    header("Location: thankyou.php");
    exit;
} else {
    echo "メール送信に失敗しました。";
}
