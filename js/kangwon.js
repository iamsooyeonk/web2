(function($){ //순서가 중요하다.
  
  //① 네비게이션
  //네비게이션 : SlideDown() SlideUp()
  //$('.main-btn').stop().mouseenter(function(){
  // $('.sub').stop().slideUp(0);
  // $(this).next().slideDown(300);
    
    /*$('.main-btn').removeClass('on');
    $(this).addClass('on');
  });
  $('#nav').mouseleave(function(){
     $('.sub').stop().slideUp(300)
     $('.main-btn').delay(600).removeClass('on');

     //$('.sub').stop().slideUp(300, function(){
     //$('.main-btn').delay(600).removeClass('on'); //<-delay 후에 removeClass되도록 한다.
     //});
    */

     //부드럽게 보이고 (fadeIn(300))
     //부드럽게 사라지고 (fadOut(300))
/*      $('.main-btn').stop().mouseenter(function(){
      $('.sub').stop().fadeOut(0);
      $(this).next().fadeIn(300);

     $('.main-btn').removeClass('on');
     $(this).addClass('on');
   });
   $('#nav').mouseleave(function(){
      $('.sub').stop().fadeOut(300)
      $('.main-btn').delay(600).removeClass('on');
   }); */

   //객체(object) 형식의 이벤트  부드럽게보이고 사라지고 
    $('.main-btn').on({
      mouseenter:function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().fadeIn(300);
  
       $('.main-btn').removeClass('on');
       $(this).addClass('on');
      }, focusIn:function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().fadeIn(300);
  
       $('.main-btn').removeClass('on');
       $(this).addClass('on');
      }
    });
    //내비
    $('#nav').on({
      mouseleave:function(){
        $('.sub').stop().fadeOut(300)
      $('.main-btn').delay(600).removeClass('on');
      }
    })
    //객체타입은 {}가 들어간 것 ES5
    //$('.main-btn').on({
    //  mouseenter:function(){

    //  },focusin:function(){

    //  }
    //});
    //ES6
    //$('.main-btn').on({
    //  mouseenter(){

    //  },
    //  focusin(){

    //  }
    //});



   //접근성:포커스 -> 탭키 눌렀을 때 메뉴가 나와야한다
   $('.main-btn').focusin(function(){
    $('.sub').stop().fadeOut(0);
    $(this).next().fadeIn(300);

   $('.main-btn').removeClass('on');
   $(this).addClass('on');
 });


  // ② 메인슬라이드

  //페이드인 페이드 아웃은 nextCount에서 조절해줘야함 
  let cnt = 0;

  //1.메인슬라이드 함수
  function mainSlide(){
    //초기화 : 밑장으로 들어가는 것 
    $('.slide').css({zIndex:1}).animate({opacity:1},0);   
    //보이는 이미지
    //$('.slide').eq(1).css({zIndex:2}).animate({opacity:1},0) 
    $('.slide').eq(cnt).css({zIndex:2}).animate({opacity:1},0);  
    //사라지는 이미지 
    //$('.slide').eq(0).css({zIndex:3}).animate({opacity:1},0),animate({opacity:0},2000);
    $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},2000);
  }
  //2. 다음카운트 함수
  function nextCount(){
    cnt++;
    cnt>2?cnt=0:cnt;
    mainSlide();  //<- cnt++;를 누구한테 넘기니? 호출!
  }
  //3. 자동타이머 함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  } 
  autoTimer();


     // 공지사항 & 갤러리 탭 메뉴 이벤트
     //갤러리 버튼 클릭
     // $('.gallery-btn').click(function(){
     //  $('.notice-btn').addClass('on');
     //  $('.gallery-btn').addClass('on');
     //  $('.gallery-box').addClass('on');
     //  $('.notice-box').addClass('on');
     // })

      $('.gallery-btn').on({
        click:function(){
          $('.notice-btn').addClass('on');
          $('.gallery-btn').addClass('on');
          $('.gallery-box').addClass('on');
          $('.notice-box').addClass('on'); 
        }
      });

    //공지사항 버튼 클릭
    //  $('.notice-btn').click(function(){
    //    $('.notice-btn').removeClass('on');
    //    $('.gallery-btn').removeClass('on');
    //    $('.gallery-box').removeClass('on');
    //    $('.notice-box').removeClass('on');
    //  })

      $('.notice-btn').on({
        click:function(){
          $('.notice-btn').removeClass('on');
          $('.gallery-btn').removeClass('on');
          $('.gallery-box').removeClass('on');
          $('.notice-box').removeClass('on');
        }
      })

    //팝업창(모달창) 레이어 팝업 열기
    //$('.link-btn').click(function(){
    //  $('#modal').stop().fadeIn(300);
    //})

    $('.link-btn').on({
      click:function(){
        $('#modal').stop().fadeIn(300);
      }
    })
    
    //팝업창(모달창) 레이어 팝업 닫기
    //$('.close-btn').click(function(){
    //  $('#modal').stop().fadeOut(600);
    //})

    $('.close-btn').on({
      click:function(){
      $('#modal').stop().fadeOut(600);
     }
    })



})(jQuery);