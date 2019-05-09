const openNewTab = true;
const defaultURL = "irom.cf/pgs/info";

$(".urlbox").keypress(function(e) {
  var keycode = (e.keyCode ? e.keyCode : e.which);
  if (keycode == '13') {
    var typed = document.getElementById("urlbox").value;
    openTab(typed);
  }
});

function openTab(url) {
  if (openNewTab) {
    window.open("https://" + url.toString());
  } else {
    window.append("https://" + url.toString());
  }
}

function preview(url) {
  if (url.length > 0) {
    document.getElementById("preview").innerHTML = "<iframe id='preview' src='https://" + url.toString() + "'></iframe>";
  } else {
    document.getElementById("preview").innerHTML = "<iframe id='preview' src='https://" + defaultURL + "'></iframe>";
  }
}

preview("");
