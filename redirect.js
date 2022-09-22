// let url = window.location.toString();

// console.log(window.location);
// window.location = url.replace("localhost:5500/", "spirkomatus.com/");

window.location.replace(`https://spirkomatus.com${window.location.pathname}`);
