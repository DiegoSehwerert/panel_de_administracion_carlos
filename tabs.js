export default (() => {
    
    const tabs = document.querySelector('.tabs');

    tabs?.addEventListener("click", (event) => {

        if (event.target.closest('.tab')) {
            const tab = event.target.closest('.tab');

            tab.parentElement.querySelector('.active').classList.remove("active");
            tab.classList.add("active");
        }
    })

})();


