$(document).ready(function () {
    function isInViewport(element) {
    var boundingBox = element.getBoundingClientRect();
    return (
      boundingBox.top >= 0 &&
      boundingBox.left >= 0 &&
      boundingBox.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      boundingBox.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Example usage
  var selectedElement = $('.typing-text');

  // Check if the selected element is in the viewport
  if (isInViewport(selectedElement[0])) {
    console.log('The element is in the viewport.');
  } else {
    console.log('The element is not in the viewport.');
  }
  
  count = 0;
  $(window).on('resize scroll', function() {
      var i=0;
      if(isInViewport($('.typing-text')[0]) && count++ < 1){
          var text = 'I am a corporate employee 9-5, part-time freelancer and an avid programmer of Web and Arduino. I love to play football and have chat by tea ....'

          $('.typing-text').text('')
          var refreshIntervalId = setInterval(function() {
          
          if(i == text.length-1)
              clearInterval(refreshIntervalId);

          $('.typing-text').text($('.typing-text').text()+text[i++]);
      
      }, 30);
      return;
    }
})
});

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };
// $(document).ready(function () {
//     var  count = 0;
//     $(window).on('resize scroll', function() {
        
//         var i=0;
//         if(count++ < 1 && $('.typing-text').isInViewport()){
//             var text = $('.typing-text').text();

//             $('.typing-text').text('')
//             var refreshIntervalId = setInterval(function() {
            
//             if(i == text.length-1)
//                 clearInterval(refreshIntervalId);

//             $('.typing-text').text($('.typing-text').text()+text[i++]);
        
//         }, 30);}
// })});