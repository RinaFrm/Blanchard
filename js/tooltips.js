tippy('#tip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  arrow: true,
  arrowType: 'narrow',
  trigger: 'click',
});

tippy('#tip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  arrow: true,
  arrowType: 'narrow',
  trigger: 'click',
});

tippy('#tip-3', {
  content: 'В стремлении повысить качество',
  arrow: true,
  arrowType: 'narrow',
  trigger: 'click',
});


$('.tip').click(function(){
  $(this).toggleClass('active');
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".tip").length) {
  $('.tip').removeClass('active');
  }
});