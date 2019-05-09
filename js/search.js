      $(document).ready(function() {
var options = [
  {
    "title": "Home",
    "def"  : "The Irom homepage",
    "link" : "irom.cf"
  },
  {
    "title": "Photos",
    "def"  : "Pictures and GIFs, coming soon!",
    "link" : "irom.cf/photos"
  },
  {
    "title": "Books",
    "def"  : "Collection of free books and advice, coming soon!",
    "link" : "irom.cf/books"
  },
  {
    "title": "Music",
    "def"  : "Spotify Embed of our playlist",
    "link" : "irom.cf/music"
  },
  {
    "title": "Weather",
    "def"  : "Irom's official weather page",
    "link" : "irom.cf/weather"
  },
    {
    "title": "Search",
    "def"  : "Irom Website Search",
    "link" : "irom.cf/search"
  },
  {
    "title": "Weather 1",
    "def"  : "Embedible weather widget 1",
    "link" : "irom.cf/weather/1"
  },
  {
    "title": "Weather 2",
    "def"  : "Embedible weather widget 2",
    "link" : "irom.cf/weather/2"
  },
  {
    "title": "Weather 3",
    "def"  : "Embedible weather widget 3",
    "link" : "irom.cf/weather/3"
  },
  {
    "title": "Link 1",
    "def"  : "School Ancient Civilizations Worksheet",
    "link" : "irom.cf/links/1"
  },
  {
    "title": "Link 2",
    "def"  : "Totobird Terminal - Login",
    "link" : "irom.cf/links/2"
  },
  {
    "title": "Link 3",
    "def"  : "School Ancient Civilizations Project Planner: Steps for Success",
    "link" : "irom.cf/links/3"
  },
  {
    "title": "Link 4",
    "def"  : "School Ancient Civilizations Supergod Presentation",
    "link" : "irom.cf/links/4",
  },
  {
    "title": "Link 5",
    "def"  : "Raspberry Pi screen links",
    "link" : "irom.cf/links/5"
  },
  {
    "title": "Link 6",
    "def"  : "School Ancient Civilizations Supergod Presentation Edit Forwarder",
    "link" : "irom.cf/links/6"
  },
    {
    "title": "Link 7",
    "def"  : "School Ancient Civilizations Supergod Presentation Edit",
    "link" : "irom.cf/links/7"
  },
    {
    "title": "Link 8",
    "def"  : "Weather Trial",
    "link" : "irom.cf/links/8"
  },
    {
    "title": "Link 9",
    "def"  : "Rumbletalk Chat",
    "link" : "irom.cf/links/9"
  },
  {
    "title": "Link 10",
    "def"  : "Shared Untitled Google Doc 1",
    "link" : "irom.cf/links/10"
  },
  {
    "title": "Link 11",
    "def"  : "Shared Untitled Google Doc 2",
    "link" : "irom.cf/links/11"
  },
  {
    "title": "Link 12",
    "def"  : "Presentation",
    "link" : "irom.cf/links/12"
  },
  {
    "title": "Link 13",
    "def"  : "Github redirect Just Dance Video Download",
    "link" : "irom.cf/links/13"
  },
    {
    "title": "Link 14",
    "def"  : "School ELA presentation on the world in 2050",
    "link" : "irom.cf/links/14"
  },
      {
    "title": "PGS",
    "def"  : "You can find links to Doodle Jump and other websites or type a url via PGS. If you want, you can also have those pages not go on your history.",
    "link" : "irom.cf/pgs"
  },
]
  
function getP(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0];
    var arr = queryString.split('&');
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=');
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
      if (paramName.match(/\[(\d+)?\]$/)) {
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];
        if (paramName.match(/\[\d+\]$/)) {
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          obj[key].push(paramValue);
        }
      } else {
        if (!obj[paramName]) {
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          obj[paramName].push(paramValue);
  }}}}
  return obj;
}

  var htmlList = document.getElementById("list");
  htmlList.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
    htmlList.innerHTML = htmlList.innerHTML + "<li class='in' oncontextmenu=\"location.href = 'https://" + options[i]["link"] + "'\" onclick=\"location.href = 'https://" + options[i]["link"] + "'\"><span class='left'><strong>" + options[i]["title"] + "</strong></span><span class='right'>" + options[i]["def"] + "</span></li>";
  }
  htmlList.innerHTML = htmlList.innerHTML + "<span class='empty-item'><strong>No Results Found</strong></span>";

  if (getP().q) {
    document.getElementById("search-text").value = getP().q;
    
    var searchTerm = $("#search-text").val();
    var listItem = $('#list').children('li');
  
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    
    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');
    
    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }
  }
  
  var jobCount = $('#list .in').length;
  $('.list-count').text("Result Count: " + jobCount);
    
  
  $("#search-text").keyup(function () {
     //$(this).addClass('hidden');
  
    var searchTerm = $("#search-text").val();
    var listItem = $('#list').children('li');
  
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    
    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');
    
    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }
    
  });
});



if (document.addEventListener) { // IE >= 9; other browsers
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
} else { // IE < 9
  document.attachEvent('oncontextmenu', function() {
     window.event.returnValue = false;
  });
}
  // Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  
  // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

// Set the cursor position of the "#test-input" element to the end when the page loads
var input = document.getElementById('search-text');
setCaretPosition(input, input.value.length);
