export default (() => {
    
    const tableSection = document.querySelector('.table');
    const deleteButtonModalDenny = document.querySelector(".denny-button");
    
    tableSection?.addEventListener('click', async (event) => {
        
        if (event.target.closest('.delete-button')) {

            const deleteModal = document.querySelector(".delete-modal");
            deleteModal.classList.add("delete-modal-active");
        }
    })


    deleteButtonModalDenny?.addEventListener("click", () => {
        const deleteModal = document.querySelector(".delete-modal");
        deleteModal.classList.remove("delete-modal-active");
    })
})();