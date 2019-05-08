(function($){
 $(function(){
  $('nav ul li > a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  });
 });
 $('html').click(function() {
  $('.nav-dropdown').hide();
 });
 document.querySelector('#nav-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
 });
 $('#nav-toggle').click(function() {
  $('nav ul').toggle();
 });
})(jQuery);

document.onkeyup = function(e) {
  if (e.which == 77) {
    alert("M key was pressed");
  } else if (e.ctrlKey && e.which == 66) {
location.replace("https://google.com");
  } else if (e.ctrlKey && e.altKey && e.which == 89) {
    alert("Ctrl + Alt + Y shortcut combination was pressed");
  } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
  }
};
