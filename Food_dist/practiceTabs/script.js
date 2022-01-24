window.addEventListener("DOMContentLoaded", () => {

    const   tabs = document.querySelectorAll(".tabs_pult-btn"),
            tabsContent= document.querySelectorAll(".tabs_item"),
            tabsParent = document.querySelector(".tabs_pult");



    function hideContent () {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
        tabs.forEach(item => {
            item.classList.remove("btn_active");
        });
    }
    hideContent();

    function showContent (i) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("btn_active");
    }
    showContent(0);

    tabsParent.addEventListener("click", (e) => {
        const target = e.target;

        if(target && target.classList.contains("tabs_pult-btn")) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }

    });



});