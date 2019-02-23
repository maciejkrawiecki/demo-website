jQuery (function($)
{
  $('#link1').click(function() { $.scrollTo($('#about_us'), 500); });
  $('#link2').click(function() { $.scrollTo($('#produkty'), 500); });
  $('#link3').click(function() { $.scrollTo($('#contact'), 500); });
  $('#link0').click(function() { $.scrollTo($('body'), 500); });
  $('.scrollup').click(function() { $.scrollTo($('body'), 500); });
}
);

//pokaz button przewijania
$(window).scroll(function()
{
  if ($(this).scrollTop()>300) $('.scrollup').fadeIn();
  else $('.scrollup').fadeOut();
}


);

  var numer = Math.floor(Math.random()*3)+1;

  var timer1 = 0;
  var timer2 = 0;

  function ustawslajd(nrslajdu)
  {
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;

    schowaj();
    setTimeout("zmienslajd()", 800);

  }

  function schowaj()
  {
    $("#slider").fadeOut(100);
  }

  function zmienslajd()
  {
    numer++; if (numer>3) numer=1;

    var plik = "<img style='width: 100%; height: 100vh; display:block; object-fit:cover; object-position: center center;' src=\"images/slajd" + numer + ".jpg\" />";

    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);

    timer1 = setTimeout("zmienslajd()", 3000);
    timer2 = setTimeout("schowaj()", 2900);

  }
