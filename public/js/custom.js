$(document).ready(function () {
  // confirm delete
  $(document.body).on('submit', '.js-confirm', function () {
    var $el = $(this)
    var text = $el.data('confirm') ? $el.data('confirm') : 'Beneran nih ?'
    var c = confirm(text);
    return c;
  });
});