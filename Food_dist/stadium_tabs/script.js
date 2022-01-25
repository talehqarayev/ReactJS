window.addEventListener("DOMContentLoaded", () => {

    const tabContent = document.querySelectorAll(".tabs_item"),
          tabItem = document.querySelectorAll(".tabs_pult-btn"),
          tabsParent = document.querySelector(".tabs_pult");

    function hideContent () {
        tabContent.forEach(item => {
            item.style.display = "none";
        });
        tabItem.forEach(item => {
            item.classList.remove("btn_active");
        });
    }
    hideContent();

    function showContent (i) {
        tabContent[i].style.display = "block";
        tabItem[i].classList.add("btn_active");
    }
    showContent(0);


    tabsParent.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("tabs_pult-btn")) {
            tabItem.forEach ((item, i) => {
                if (target == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
});