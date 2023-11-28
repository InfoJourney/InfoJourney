function toggleMenu() {
      var navbar = document.getElementById("myNavbar");
      if (navbar.className.indexOf("responsive") === -1) {
        navbar.className += " responsive"; 
        var item = document.getElementById("close-icon");
      item.innerHTML = "&#10006"; // Altere aqui o novo texto que deseja exibir
      } else {
        navbar.className = navbar.className.replace(" responsive", "");
        var item = document.getElementById("close-icon");
        item.innerHTML = "&#9776;"; // Altere aqui o novo texto que deseja exibir
      }
    }
    //   função para navbar
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('.navbar').classList.remove('hidden');
      } else {
        document.querySelector('.navbar').classList.add('hidden');
      }
      prevScrollpos = currentScrollPos;
    }
    
    let count = 1
    document.getElementById('radio1').checked = true
  
    setInterval( function(){
     nextImage()
    }, 5000)
  
    function nextImage() {
      count++
      if (count>5){
        count = 1
      }
  
      document.getElementById('radio'+count).checked = true
    }