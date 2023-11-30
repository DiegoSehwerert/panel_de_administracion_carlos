export default (() => {

    const form = document.querySelector('.form');
    
    form?.addEventListener('input', (event) => {

      if(event.target.closest('[data-minlength]')){
        let input = event.target.closest('[data-minlength]');

        if (input.value.length < input.dataset.minlength && input.value.length > 0) {
          input.classList.add("active");
        }else{
          input.classList.remove("active");
        }
      }

      if(event.target.closest('[data-onlyletters]')){
        let input = event.target.closest('[data-onlyletters');
        // console.log(input.value);
        if (/^[a-zA-Z]+$/.test(input.value)){
          input.classList.remove("active");
        }else{
          input.classList.add("active");
        }
      }
    
    });
  
  })();