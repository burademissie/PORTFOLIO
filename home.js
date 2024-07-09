
$(".fa-lightbulb").on("click",changeback);

function changeback(){
    $("body").css("background-color","white");
    $("ul li").addClass("colorChange");
    $("i").addClass("colorChange");
    $(".statictxt").addClass("colorChange");
}

