export default (() => {
    
    const modal = document.querySelector(".filter-modal");
    const declineButton = document.querySelector(".filter-modal-decline-button");
    
    document.addEventListener("showModalFilter", (event => {
        modal.classList.add("filter-modal-active");    
    }));

    declineButton?.addEventListener("click", () => {
        modal.classList.remove("filter-modal-active");
    })
})();