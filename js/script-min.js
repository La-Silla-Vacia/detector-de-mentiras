(function() {
  // 
  var buttons = document.querySelectorAll("#toggleNav button");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", toggle);
  }

  function toggle(event) {
    hideToggles();

    var button = event.target;
    button.classList.add("active");

    var targetId = button.dataset.toggle;

    var target = document.getElementById(targetId);
    target.classList.remove('hidden');
  }

  function hideToggles() {
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var target = button.dataset.toggle;

      button.classList.remove("active");

      target = document.getElementById(target);
      target.classList.add('hidden');
    }
  }
})()


