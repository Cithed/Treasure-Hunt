$(".img2").hide();
$(".text1").hide();
$(".img1").hide();
$(".text2").hide();
$(".img3").hide();
$(".text4").hide();
$(".img4").hide();
$(".img5").hide();
$(".text5").hide();
$(".text6").hide();
$(".img6").hide();

$(".button").click(function(){
    $(".img1").slideToggle();
    $(".img2").hide();
    $(".text1").show();
});

$(".img1").click(function(){
    $("img").hide();
    $(".button").hide();
    $(".text1").hide();
    $(".img2").show();
    $(".text2").show();
});

$(".img2").mouseleave(function(){
    $(".img2").hide();
    $(".text2").hide();
    $("body").css("background-image","url(http://rocvox.com/wp-content/uploads/2018/08/Rabbit-Hole.jpg)" );
    $(".heading").css("color","white" );
    $(".img4").show();
    $(".text4").show();
    $(".text4").css("color","white" );
});

$(".img4").dblclick(function(){
        $(".text4").hide();
        $(".img4").hide();
        $(".img5").fadeIn();
        $(".text5").fadeIn();
        $(".text5").css("color","white" );
        $("body").css("background-image","url(https://www.israelstudies.umd.edu/files/2017/09/dark-1a9lh34.jpg)");
});

$(".img5").mouseleave(function(){
        $(".text5").hide();
        $(".img5").hide();
        $(".heading").hide();
        $(".img6").fadeIn();
        $(".text6").fadeIn();
        $("body").css("background-color","white");
        $(".text6").css("color","white" );
});