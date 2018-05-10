<?php
$tomail = "rewind1224@gmail.com";

function error($text) {
    echo "
    <script language=javascript>
    window.alert('$text')
    history.go(-1)
    </script>";
    exit;
}

function msg($text) {
    echo "
    <script language=javascript>
    window.alert('$text')
    top.location.href = 'index.html'
    </script>";
    exit;
}

if (!$name) {error('이름을 적어주세요');}
if (!$email) {error('메일 주소를 적어주세요');}
if (!$subject) {error('제목을 적어주세요');}

$mailheaders = "Return-Path: $email \r\n";
$mailheaders .= "From: $name <$email> \r\n";
$body = " 이름 : $name \r\n";
$body .= " 메일주소 : $email \r\n";
$body .= " 내용 : $content \r\n";

$result=mail($tomail, $subject, $body, $mailheaders);
if ($result) {msg ('메일이 성공적으로 발송되었습니다.');}
else {error ('메일 발송에 실패하였습니다.');}
?>
