$(document).ready(function() {
  $("#submit").click(function(){
    $('#result').hide();
    $('#loading').show();
    $.getJSON('/_get_player_data', {
      player: $('input[name="name"]').val()
      }, function(data) {
        $("#result").html(data.result);
        $('#loading').hide();
        $("#result").show();
        });
    });
  });
