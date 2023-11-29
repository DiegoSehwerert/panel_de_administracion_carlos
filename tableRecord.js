export default (() => {

    const tableSection = document.querySelector('.table');
    
    tableSection?.addEventListener('click', async (event) => {
        
        if (event.target.closest('.delete-button')) {
            document.dispatchEvent(new CustomEvent('showModalDestroy', {
            }));
            
        }

    })

})();