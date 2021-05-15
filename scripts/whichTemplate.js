function whichTemplate() {
    
    var radios = document.getElementsByName('template');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.getElementById("field2").value = radios[i].value;         
            break;
        }
      }

    
  }