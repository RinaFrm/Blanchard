$('#selectCustom').change(function() {
  value = $(this).find('option:selected').val();
    
  $('div[id^="test_hide-"]').hide();
  $('#test_hide-'+value).show();
 });

