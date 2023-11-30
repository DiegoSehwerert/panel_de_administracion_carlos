export default (() => {
    
    const allTabs = document.querySelector('.tabs');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    allTabs?.addEventListener("click", (event) => {

        if (event.target.closest('.tab')) {
            const tabClick = event.target.closest('.tab');

            tabClick.parentElement.querySelector('.active').classList.remove("active");
            tabClick.classList.add("active");


            tabContents.forEach(tabContent => {
                // console.log("elemento1 "+tabClick.dataset.form);
                // console.log("elemento2 "+ tabContent.dataset.form);
                if (tabClick.dataset.form == tabContent.dataset.form){
                    tabContent.classList.add("active");
                    // console.log(tabContent);
                }else{
                    tabContent.classList.remove("active");
                }
            })

        }        
    })       
            
    

})();


