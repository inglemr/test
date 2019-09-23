var request = new XMLHttpRequest()

  request.open('GET', 'https://ghibliapi.herokuapp.com/films', false)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        var theDiv = document.getElementById("root");
				var content = document.createTextNode(data);
				theDiv.appendChild(content);
    } else {
        var theDiv = document.getElementById("root");
				var content = document.createTextNode("error");
				theDiv.appendChild(content);
    }
  }
  request.send()
