$(document).ready(function() {
  $('.flip').quickFlip();
  var flip = function() {
    var random = Math.round(Math.random() * $('.flip').size());
    var target = $($('.flip')[random]);
    target.quickFlipper({
      refresh: true
    });
  };

  setInterval(flip, 3000);
});
