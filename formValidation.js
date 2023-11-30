export default (() => {
    let input = document.querySelector(".validate");
    let minLenght = input.dataset.minlength;
    let c = console.log;
    c();
    
    input?.addEventListener('input', (event) => {
      let inputLength = event.target.value;
      console.log(inputLength); // Corregido: imprime el valor del input
      if (inputLength.length < minLenght && inputLength.length > 0) {
        
        input.classList.add("active");
      }else{
        input.classList.remove("active");
      }
    });
  
  })();