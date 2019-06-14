window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#mere1").addEventListener("click", function () {
        readMore("#tema1");
    });
    document.querySelector("#mere2").addEventListener("click", function () {
        readMore("#tema2");
    });
    document.querySelector("#mere3").addEventListener("click", function () {
        readMore("#tema3");
    });
    document.querySelector("#mere4").addEventListener("click", function () {
        readMore("#tema4");
    });
    document.querySelector("#mere5").addEventListener("click", function () {
        readMore("#tema5");
    });
    document.querySelector("#mere6").addEventListener("click", function () {
        readMore("#tema6");
    });

}

function readMore(id) {
    console.log('readMore:');
    document.querySelector(id).classList.toggle("stor");
    document.querySelector(id).classList.toggle("lille");

}
