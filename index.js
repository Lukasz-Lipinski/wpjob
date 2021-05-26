$(function(){

  $('#wyslij').attr('disabled', true);
  const wojLista = $('#wojewodztwaLista');

  $('#powiadomienia').on('click', function(){
    alert('wlaczono powiadomienia');
  });

  $('a').not('powiadomienia').on('click', function(e){
    e.preventDefault();

    var url = $(this).attr('href');

    $('#content').empty()
                  .load(url + ' #content');
  });

  $('input').filter('.myForm').on('change', function(){

    let wyslijInfo = ($('#zgoda').is(':checked')) && ($('#email').val().search('@') != -1);

    if($('#email').val().search('@') === -1){
      $('#email').addClass('bg-danger');
    } else {
      $('#email').removeClass('bg-danger');
    }

    if(wyslijInfo){
      $('#wyslij').attr('disabled', false);
    } else {
      $('#wyslij').attr('disabled', true);
    }
  });


})
