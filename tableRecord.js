export default (() => {
    
    const tableSection = document.querySelector('.table-record');
    
    tableSection?.addEventListener('click', async (event) => {
        
        if (event.target.closest('.delete-button')) {

            const deleteButtonModal = document.querySelector(".delete-button-modal");
            const deleteButtonModalDenny = document.querySelector(".denny-button")

            deleteButtonModal.classList.add("delete-button-modal-active");

            deleteButtonModalDenny?.addEventListener("click", () => {
                deleteButtonModal.classList.remove("delete-button-modal-active");
            })

        }
    })
})();