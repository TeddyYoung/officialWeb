/**
 * Created by 本人 on 2016/6/22.
 */
$(function() {

    //平滑至顶部
    $(".index-header").click(function(){
        $('html,body').animate({scrollTop:0}, 'slow');
    })

    //头部导航
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

