export default (() => {
    const formButtons = document.querySelector('.form-buttons');
    
    const imagesButton = document.querySelector('.form-images-button');
    const gitButton = document.querySelector('.form-git-button');
    const mainButton = document.querySelector('.form-main-button');

    imagesButton?.addEventListener("click", () => {
        toggleActive(imagesButton);
        deactivateButtons([mainButton, gitButton]);
    });

    gitButton?.addEventListener("click", () => {
        toggleActive(gitButton);
        deactivateButtons([mainButton, imagesButton]);
    });

    mainButton?.addEventListener("click", () => {
        toggleActive(mainButton);
        deactivateButtons([gitButton, imagesButton]);
    });

    function toggleActive(button) {
        button.classList.toggle("active");
    }

    function deactivateButtons(buttons) {
        buttons.forEach(button => button.classList.remove("active"));
    }
})();
