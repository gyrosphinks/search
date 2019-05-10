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

function bye() {
location.replace("https://google.com");
}


      $(window).keydown(function(event) {
  if(event.ctrlKey && event.keyCode == 84) { 
    console.log("Hey! Ctrl+T event captured!");
        bye()
    event.preventDefault(); 
  }
  if(event.ctrlKey && event.keyCode == 83) { 
    console.log("Hey! Ctrl+S event captured!");
        bye()
    event.preventDefault(); 
  }
            if(event.ctrlKey && event.keyCode == 2) { 
    console.log("Hey! Ctrl+W event captured!");
        bye()
    event.preventDefault(); 
  }
});
