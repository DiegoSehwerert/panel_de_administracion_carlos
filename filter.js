export default (() => {
    const Button = document.querySelector(".filter-button");
    const modal = document.querySelector(".filter-modal");
    const declineButton = document.querySelector(".filter-modal-decline-button");
    const modalBottom = document.querySelector(".filter-modal")
    // const acceptButton = document.querySelector("")

    Button?.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent('showModalFilter', {
        }));
    })
    // modalBottom?.addEventListener("click", () => {
    //     modal.classList.remove("filter-modal-active");
    // })
})();