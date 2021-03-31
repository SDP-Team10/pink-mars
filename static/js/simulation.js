function init() {
    var view = new webots.View(document.getElementById("view3d"));
    view.open("/sim/youbot.x3d");
    view.setAnimation("/sim/youbot.json", "play", true);
  }
  window.addEventListener("load", init, false);
  if (
    location.protocol == "file:" &&
    !!window.chrome &&
    !!window.chrome.webstore
  )
    alert(
      "Webots HTML5 Models and Animations cannot be loaded locally on Google Chrome, as Chrome does not support cross-origin requests using the file:// protocol."
    );