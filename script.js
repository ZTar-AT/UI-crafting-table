// var numscreen=window.screen.width*0.0008


// $(function () {
//     $('.crafting_circle').css('transform','translate(-50%, -50%) scale('+numscreen+')')
// })




// window.addEventListener("resize", function() {
//     var numscreen=window.screen.width*0.0008
 

//     $('.crafting_circle').css('transform','translate(-50%, -50%) scale('+numscreen+')')

   
//   });

// console.log(document.querySelector('.progress-bar').getTotalLength());

// var strokeDasharray = $('.progress1 circle').attr('stroke-dasharray');
// var strokeDashoffset = strokeDasharray.substring(0,3);
// var rotate = 0;

var timer = setInterval(function(){
  $('.progress-bar').attr('stroke-dashoffset', strokeDashoffset);
  strokeDashoffset = strokeDashoffset - 100.76;
  $('.pointer').attr({
    'style': 'transform: rotate(' + rotate + 'deg) translate(13px);'
  });
  rotate = rotate + 4;
}, 500);

// setTimeout(function(){
//   clearInterval(timer);
// },30000);


//progress-bar
(879 * x ) / 100 
// กำหนด ให้ x = เปอร์เซ็น

//pointer
(365 * x ) / 100 
// กำหนด ให้ x = เปอร์เซ็นหมุน 