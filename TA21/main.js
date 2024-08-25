document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('miInput');

  input.onfocus = () => input.style.border = '2px solid darkgray';
  input.onblur = () => input.style.border = '2px solid lightgray';
});