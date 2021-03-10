let select = document.querySelector('select');
  let para = document.querySelector('p');
  
  select.addEventListener('change', selecionaestados);
  
  
  function selecionaestados() {
    let choice = select.value;
  
    switch (choice) {
      case 'hormi':
        para.textContent = 'Encuentra la hoja, pasa al estado Hoja. ';
        break;
      case 'hoj':
        para.textContent = 'Vete a casa, pasa al estado Casa.';
        break;
      case 'cas':
        para.textContent = 'Encuentra la hoja, pasa al estado Hoja.';
        break;
      case 'Run':
        para.textContent = 'Huir del Mouse, pasa al estado Hoja.';
        break;
      default:
        para.textContent = 'Vete a casa, pasa al estado Casa.';
    }
  }