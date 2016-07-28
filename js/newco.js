var _lang = 'en';
$('.toggle-translation').click(function(e) {
  e.preventDefault();
  if (_lang === 'en') {
    $('.lang-zh').removeClass('hidden');
    $('.lang-en').addClass('hidden');
    _lang = 'zh';
  } else {
    $('.lang-zh').addClass('hidden');
    $('.lang-en').removeClass('hidden');
    _lang = 'en';
  }
  $('html').attr('lang', _lang);
});
$('.close-modal').click(function(e) {
  $($(this).attr('data-target')).modal('hide');
});
$('#full-page').fullpage({
  menu: '#top-nav',
  autoScrolling: false,
  fitToSection: false,
  controlArrows: false,
  touchSensitivity: 30,
  afterLoad: function(anchorLink, index) {
    $('#top-nav .navbar-brand')[index === 1 ? 'removeClass' : 'addClass']('tiny');
    $('#top-nav .navbar-brand>.brand-date')[index === 1 ? 'removeClass' : 'addClass']('hidden');
    $('#top-nav #navbar-home')[index === 1 ? 'addClass' : 'removeClass']('hidden');
    $('#top-nav')[index > 1 ? 'addClass' : 'removeClass']('inverse');
    $('#top-nav .navbar-about-sub')[anchorLink.indexOf('about') > -1 ? 'removeClass' : 'addClass']('hidden');
  }
});
function deferImg() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  }
}
$(function() {
  setTimeout(deferImg, 0);
  var egg = new Egg('up,up,down,down,left,right,left,right,b,a', function() {
    $('#rock-lobster').modal('show');
    window.setTimeout(function() {
      $('#rock-lobster').modal('hide');
    }, 5000);
  }).listen();
});
