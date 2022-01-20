window.addEventListener("DOMContentLoaded", () => {

    const box = document.querySelector(".box");


    // box.addEventListener("touchstart", (e) => {
    //     e.preventDefault();
    //     console.log("You touched on the screen of mobile");
    // });


    // box.addEventListener("touchmove", (e) => {
    //     e.preventDefault();
    //     console.log("You touched and moving on the screen of mobile");
    // });


    // box.addEventListener("touchend", (e) => {
    //     e.preventDefault();
    //     console.log("You ended touching on the screen of mobile");
    // });


    box.addEventListener("touchmove", (e) => {
        e.preventDefault();
        console.log("You ended touching on the screen of mobile");

        //         // События в объекте
        // console.log(e.touches); // список всех палцов на экране телефона
        console.log(e.targetTouches[0].pageX);
    });


});


