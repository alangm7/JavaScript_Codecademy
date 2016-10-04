function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() { //on('click') functions allow us to make HTML elements clickable.
    $(this).next().slideToggle(400); //slideToggle will make an element slide into and out of the page with an animation.
    $(this).toggleClass('active'); //toggleClass can toggle a class on and off.
    //$(this) will select the specific element that was clicked if placed inside a click function.
    $(this).text('Projects Viewed'); //text will replace a DOM element's text with text we specify.
	});
}

$(document).ready(main);
