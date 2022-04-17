const {ipcRenderer} = require('electron')
function getPath(node) {
    // phase 1: generation
    var path = [];
    while (node) {
      name = node.localName;
      if (!name) break;
      name = name.toLowerCase();

      if (node.id && node.id !== "") {
        path.unshift("#" + node.id);
        break;
      }

      var parent = node.parentElement;
      if (!parent) break;
      if (node.classList.length > 0) {
        for (var i = 0; i < node.classList.length; i++) {
          var className = node.classList[i];
          var sameClassSiblings = [].filter.call(
            parent.children,
            function (e) {
              return [].indexOf.call(e.classList, className) > 0;
            }
          );
          if (sameClassSiblings.length == 1) {
            name = "." + className;
            break;
          }
        }
      } else {
        var sameTagSiblings = [].filter.call(parent.children, function (e) {
          return e.localName.toLowerCase() == name;
        });
        if (sameTagSiblings.length > 1) {
          allSiblings = parent.children;
          var index = [].indexOf.call(allSiblings, node) + 1;
          if (index > 1) {
            name += ":nth-child(" + index + ")";
          }
        }
      }

      path.unshift(name);
      node = parent;
    }

    // phase 2: simplification
    var results = 0,
      tempPath,
      origPath = path.slice(0);
    for (var i = path.length - 1; i >= 0; i--) {
      // tempPath = path[i] + (tempPath ? '>' + tempPath : '');
      tempPath = path.slice(i).join(" ");
      var newResults = document.querySelectorAll(tempPath).length;
      if (newResults == results) {
        path.splice(i, 1);
      } else {
        results = newResults;
      }
    }
    // simplification failed
    if (results != 1) {
      path = origPath;
    }

    return path.join(" > ");
  }

ipcRenderer.on('ping', () => {
    document.addEventListener('click', event => {
        var element = getPath(event.target) 
        ipcRenderer.sendToHost(element)
      })
})