export default (() => {
    const Button = document.querySelector(".filter-button");
    const modal = document.querySelector(".filter-modal");
    const declineButton = document.querySelector(".filter-modal-decline-button");
    const modalBottom = document.querySelector(".filter-modal")
    // const acceptButton = document.querySelector("")

    Button?.addEventListener("click", () => {
        modal.classList.add("filter-modal-active");
    })
    declineButton?.addEventListener("click", () => {
        modal.classList.remove("filter-modal-active");
    })
    // modalBottom?.addEventListener("click", () => {
    //     modal.classList.remove("filter-modal-active");
    // })
})();