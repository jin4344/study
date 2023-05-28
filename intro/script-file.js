// script-file.html에서 사용

function imgChange(event, object) {
  object.src = 'imgs/' + (event == 'over' ? 'icon2.png' : 'icon1.png');
}
