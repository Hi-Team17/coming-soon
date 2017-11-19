
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

$("#getting-started")
  .countdown("2019/01/01", function(event) {
    $('#getting-started').typeIt(
      event.strftime('%D days %H:%M:%S')
    );
  });