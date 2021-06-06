var n=document.querySelectorAll(".drum").length;
for (var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
    var buttonInnerHTML = this.innerHTML;
    drumBeat(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(event){
  drumBeat(event.key);
  animation(event.key);
});




function drumBeat(key) {
  switch (key) {
    case "w":
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;
    case "a":
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      var a = new Audio("sounds/tom-3.mp3");
      a.play();
      break;
    case "d":
      var a = new Audio("sounds/tom-4.mp3");
      a.play();
      break;
    case "j":
      var a = new Audio("sounds/snare.mp3");
      a.play();
      break;
    case "k":
      var a = new Audio("sounds/crash.mp3");
      a.play();
      break;
    case "l":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    default:
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
  }
}
function animation(key){
  var activeKey="."+key;
  document.querySelector(activeKey).classList.add("pressed");
  setTimeout(function(){
  document.querySelector(activeKey).classList.remove("pressed");
  },100);
}
