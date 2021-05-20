$(function(){

  $('#powiadomienia').on('click', function(){
    alert('wlaczono powiadomienia');
  });

  $('a').not('powiadomienia').on('click', function(e){
    e.preventDefault();

    var url = $(this).attr('href');

    $('#content').empty();

    $('#content').load(url + ' #content');
  });

})