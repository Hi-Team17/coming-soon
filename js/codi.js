//RELLOTGE COMPTE ENRRERA 

$('#clock').countdown('2018/04/01', function (event) {
    $(this).html(event.strftime('%D d %H h %M m %S s'));
});

//LLETRES MOVIMENT
$('#slogan_int').typeIt({
        speed: 140,
        autoStart: false,
        loop: true
    })
    .tiPause(1200)
    .tiType('<strong>I</strong>nterfaces')
    .tiPause(1000)
    .tiDelete(9)
    .tiPause(100)
    .tiType('ntelligence')
    .tiPause(1000)
    .tiDelete(11)
    .tiType('nteractions')

//ICONES TEAM APAREIXEN
$("#main_team").click(function () {
    $(".team_fabs").fadeToggle("250ms");
    $(".team_fabs").css('display', 'flex');
});

// CTA Notify me
$(".cta").click(function () {
    console.log("Click a notificar");
    $(".cta:not(.sent)").removeClass("button");
    $(".cta:not(.sent)").addClass("active");
    $("input").focus();
});

var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$("input").on('input', function () {
    if (regex.test($(this).val())) {
        $("button").removeAttr("disabled");
        console.log("Email correcte ;)");
    } else {
        $("button").attr("disabled", "disabled");
        console.log("Comprova el mail...");
    }
});

$("form").submit(function (x) {
    x.preventDefault();
    if (regex.test($("input").val())) {
        $(".cta span").text("Thank you!");
        $(".cta").removeClass("active").addClass("sent");
    }
});