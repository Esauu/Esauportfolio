window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#mere").addEventListener("click", readMore);
}

function readMore() {
    console.log('readMore:');
    document.querySelector("#tema1").classList.toggle("stor");
    document.querySelector("#tema1").classList.toggle("lille");
}
