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
    // Забороняємо вводити нецифрові символи, крім слеша ("/") та цифр
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }