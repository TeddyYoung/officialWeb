/**
 * Created by ���� on 2016/6/22.
 */
$(function() {

    //ƽ��������
    $(".index-header").click(function(){
        $('html,body').animate({scrollTop:0}, 'slow');
    })

    //ͷ������
    $(function(){
        $("#headerMenu a").click(function(){
            $(this).addClass("head");
            $("#headerMenu a").not(this).removeClass("head");
//            alert(11111);
        })
    });
});
$(window).scroll(function(){
    var a=$(window).scrollTop();
    if(a > 50){
        $(".index-header").css("display","block");
    }else{
        $(".index-header").css("display","none");
    }
});

$(function(){
    $("#tab li").click(function(){
        $(this).addClass("cur");
        $("#tab li").not(this).removeClass("cur");
    });
    alert(11111)
});

