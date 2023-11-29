export default (() => {
    document.addEventListener("showModalDestroy", (event => {
        const deleteModal = document.querySelector(".delete-modal");
            deleteModal.classList.add("delete-modal-active");
    }));
    const deleteButtonModalDenny = document.querySelector(".denny-button");

    deleteButtonModalDenny?.addEventListener("click", () => {
        const deleteModal = document.querySelector(".delete-modal");
        deleteModal.classList.remove("delete-modal-active");
    })

})();