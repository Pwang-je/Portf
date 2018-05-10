$(document).ready(function) {

    // name 속성이 'email'인 input 이 focus를 잃었을때 처리한다.
    $("input[name='email']").blur(function(){

        var email = $(this).val();

        // 값을 입력안한경우는 아예 체크를 하지 않는다.
        if( email == '' || email == 'undefined') return;

        // 이메일 유효성 검사
        if(! email_check(email) ) {
            alert('잘못된 형식의 이메일 주소입니다.');
            $(this).focus();
            return false;
        }
    });
};
