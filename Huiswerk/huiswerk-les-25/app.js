$('button').click(function (waarde) {
  $('#invoer-naam').html('');
  $('#invoer-adres').html('');
  $('#invoer-leeftijd').html('');
  $('#invoer-geslacht').html('');
  var voorNaam = $('#voornaam').val();
  var achterNaam = $('#achternaam').val();
  var straat = $('#straat').val();
  var woonplaats = $('#woonplaats').val();
  var leeftijd = $('#leeftijd').val();

  var geslacht = $('input:radio[name=geslacht]:checked').val();

  $('#invoer-naam').append(voorNaam + ' ' + achterNaam);
  $('#invoer-adres').append(straat + ' te ' + woonplaats);
  $('#invoer-leeftijd').append(leeftijd);
  $('#invoer-geslacht').append(geslacht);
});
