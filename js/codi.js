//LLETRES MOVIMENT
$('#slogan').typeIt({
        speed: 140,
        autoStart: false,
        loop: true
    })
    .tiType('<strong>H</strong>uman ')
    .tiPause(100)
    .tiType('<strong>I</strong>nterfaces')
    .tiPause(1000)
    .tiDelete(9)
    .tiPause(100)
    .tiType('ntelligence')
    .tiPause(1000)
    .tiDelete(11)
    .tiType('nteractions')

//RELLOTGE COMPTE ENRRERA 

$('#clock').countdown('2020/10/10', function (event) {
    $(this).html(event.strftime('%D days %H:%M:%S'));
});