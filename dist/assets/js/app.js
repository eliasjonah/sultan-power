// Timer

document.addEventListener('DOMContentLoaded', function(){ 

	var deadline = new Date();
deadline.setHours(24, 0, 0, 0);

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  return {
   'total': t,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}

let hours1Span = document.querySelector('.hour1');
let hours2Span = document.querySelector('.hour2');
let minutes1Span = document.querySelector('.minute1');
let minutes2Span = document.querySelector('.minute2');
let seconds1Span = document.querySelector('.second1');
let seconds2Span = document.querySelector('.second2');

let hours3Span = document.querySelector('.hour3');
let hours4Span = document.querySelector('.hour4');
let minutes3Span = document.querySelector('.minute3');
let minutes4Span = document.querySelector('.minute4');
let seconds3Span = document.querySelector('.second3');
let seconds4Span = document.querySelector('.second4');

function initializeClock(endtime){
    let timeinterval = setInterval(function(){
     let t = getTimeRemaining(endtime);
     
    hours1Span.innerHTML = ('0' + t.hours).slice(-2, -1);
    hours2Span.innerHTML = ('0' + t.hours).slice(-1);
    minutes1Span.innerHTML = ('0' + t.minutes).slice(-2, -1);
    minutes2Span.innerHTML = ('0' + t.minutes).slice(-1);
    seconds1Span.innerHTML = ('0' + t.seconds).slice(-2, -1);
    seconds2Span.innerHTML = ('0' + t.seconds).slice(-1);

    hours3Span.innerHTML = ('0' + t.hours).slice(-2, -1);
    hours4Span.innerHTML = ('0' + t.hours).slice(-1);
    minutes3Span.innerHTML = ('0' + t.minutes).slice(-2, -1);
    minutes4Span.innerHTML = ('0' + t.minutes).slice(-1);
    seconds3Span.innerHTML = ('0' + t.seconds).slice(-2, -1);
    seconds4Span.innerHTML = ('0' + t.seconds).slice(-1);
  
     if(t.total<=0){
      clearInterval(timeinterval);
     }
    },1000);
  }
  
  initializeClock(deadline);
  
  });