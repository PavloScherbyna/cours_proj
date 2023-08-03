function addSlash(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
  
    if (value.length >= 2) {
      value = value.replace(/(\d{2})(\d)/, '$1/$2');
    }

    const day = value.substring(0, 2);
    const month = value.substring(3, 5);

    if (day > 31 || month > 12){
        alert('wrong input');
    }
  
    input.value = value;
  }
  function validateKey(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }



  function toggleMenu() {
    const menuItems = document.querySelector('.menu_item.bottom2');
    menuItems.classList.toggle('show');
}

const menuLinks = document.querySelectorAll('.menu_item li');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menuItems = document.querySelector('.menu_item.bottom2');
        menuItems.classList.remove('show');
    });
});


// API GOOGLE MAP
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8756712, lng: 14.4423124},
    zoom: 20
  });
}


//menu food card update
function showMenuContent(){
  let menuContents = document.querySelectorAll('food_card');
  menuContents.forEach(function(content){
    content.style.display = "none";
  });

  let selectedMenuContent = document.getElementById("menu_" + menuType);
  selectedMenuContent.style.display = "block";
}
document.getElementById("menu_soupe").addEventListener("click", function() {
  showMenuContent("menu_soupe");
});

