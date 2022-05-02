(function($){

//     // 네이게이션 : slideDown / slideUp
    
//     $('.main-btn').mouseenter(function(){
//         $('.sub').stop().slideUp(0);
//         $(this).next().stop().slideDown(300);

//         $('.main-btn').removeClass('on');
//         $(this).addClass('on');
//     });

//     $('#nav').mouseleave(function(){
//         $('.sub').stop().slideUp(300,function(){
//             $('.main-btn').delay(1600).removeClass('on');
//         });
//     });
    
// }


    // 부드럽게 보이고 (fadeIn(300))
    // 부드럽게 사라지고 (fadeOut(0))
    
    // $('.main-btn').mouseenter(function(){
    //     $('.sub').stop().fadeOut(0);
    //     $(this).next().stop().fadeIn(300);

    //     $('.main-btn').removeClass('on');
    //     $(this).addClass('on');
    // });


    //객체(object) 형식의 이벤트
    $('.main-btn').on({
        mouseenter: function(){  //마우스접근성
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
    
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        },
        focusin: function(){ // 탭키접근성
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
    
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        }
    });
    

    //객체(object) 형식의 이벤트

    $('.main-btn').on({
        mouseenter: function(){
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);

            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        },
        focusin: function(){
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);

            $('.main-btn').removeClass('on');
            $(this).addClass('on');
        }
    });

    // //ES5
    // $('.main-btn').on({
    //     mouseenter: function(){

    //     },
    //     focusin: function(){

    //     }
    // });

    // //ES6
    // $('.main-btn').on({
    //     mouseenter(){

    //     },
    //     focusin(){

    //     }
    // });
            


    //접근성:포커스focusin

    $('.main-btn').focusin(function(){   
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });



    $('#nav').mouseleave(function(){
        $('.sub').stop().fadeOut(300)
            $('.main-btn').removeClass('on');

    });

    $('#nav').on({
        mouseleave:function(){
            $('.sub').stop().fadeOut(300)
            $('.main-btn').removeClass('on');

        }
    });


 //  메인슬라이드

   let cnt=0;
//    1.메인슬라이드 함수

    function mainSlide(){
        $('.slide-wrap').animate({top:-300*cnt}, 600, function(){
            cnt>2?cnt=0:cnt; //다음
            cnt<0?cnt=2:cnt; //이전
            $('.slide-wrap').animate({top:-300*cnt},0);
        });
        console.log(cnt);
    }

//    2.다음카운트 함수

    function nextCount(){
        cnt++;
        mainSlide();
    }

    function prevCount(){
        cnt--;
        mainSlide();
    }

//    3.자동타이머 함수

    function autoTimer(){
        setInterval(nextCount, 3000);
    }
    autoTimer();

    

    //갤러리버튼 클릭

    // $('.gallery-btn').click(function(){
    //     $('.notice-btn').addClass('on');
    //     $('.gallery-btn').addClass('on');
    //     $('.notice-box').addClass('on');
    //     $('.gallery-box').addClass('on');
    // });

    $('.gallery-btn').on({
        click: function(){ //마우스클릭 키보드는 엔터(Enter)
            $('.notice-btn').addClass('on');
            $('.gallery-btn').addClass('on');
            $('.notice-box').addClass('on');
            $('.gallery-box').addClass('on');
        }
    });


    //공지사항버튼 클릭

    // $('.notice-btn').click(function(){
    //     $('.notice-btn').removeClass('on');
    //     $('.gallery-btn').removeClass('on');
    //     $('.notice-box').removeClass('on');
    //     $('.gallery-box').removeClass('on');
    
    // });


    
    $('.notice-btn').on({
        click: function(){
            $('.notice-btn').removeClass('on');
            $('.gallery-btn').removeClass('on');
            $('.notice-box').removeClass('on');
            $('.gallery-box').removeClass('on');
        }
    });








//레이어 팝업창
    
    // $('.link-btn').click(function(){
    //     $('#modal').stop().fadeIn(600);
    // });

    $('.link-btn').on({
        click: function(){
            $('#modal').stop().fadeIn(600);
        }
    });




//닫기
    // $('.close-btn').click(function(){
    //     $('#modal').stop().fadeOut(600);
    // });

    $('.close-btn').on({
        click: function(){
        $('#modal').stop().fadeOut(600);
        }
    });

    
    })(jQuery);