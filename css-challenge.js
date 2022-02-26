
function moveProgressBar(barName) {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(barName);
    var width = 50;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function moveBars(){
  moveProgressBar("greenBar");
  moveProgressBar("redBar");
  moveProgressBar("whiteBar");
  moveProgressBar("blueBar");
  moveProgressBar("yellowBar");
}