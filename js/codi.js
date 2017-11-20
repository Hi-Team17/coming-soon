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

//RELLOTGE COMPTE ENRRERA 

$('#clock').countdown('2017/11/22', function (event) {
    $(this).html(event.strftime('%D d %H h %M m %S s'));
});

//ICONES TEAM APAREIXEN
$( "#main_team" ).click(function() {
    
    $(".team_fabs").fadeToggle("250ms");
    $(".team_fabs").css('display', 'flex');
  });