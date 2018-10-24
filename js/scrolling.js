$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('#o-mnie').offset().top-200)
  {

    $('#naglowek > .container-fluid').addClass('nawigacja-on').removeClass('nawigacja-off');

  }
  else
  {

    $('#naglowek > .container-fluid').addClass('nawigacja-off').removeClass('nawigacja-on');

  }

  if(wScroll > $('#o-mnie').offset().top - ($(window).height() / 1.2))
  {
    $('#o-mnie').addClass('aktywny');
  }

  if(wScroll > $('#techniki').offset().top - ($(window).height() / 1.2))
  {
    $('#umiejetnosci #tech').each(function(i,e){
      setTimeout(function(){
        $(e).addClass('aktywny');
      }, 300 * (i+1));
    });
  }

  if(wScroll > $('#prace').offset().top - ($(window).height() / 1.2))
  {
    $('#prace #praca').each(function(i,e){
      setTimeout(function(){
        $(e).addClass('aktywny');
      }, 300 * (i+1));
    });
  }

  

});
