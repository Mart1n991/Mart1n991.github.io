const path = window.location.pathname;

const newUrl = `https://spirkomatus.com${path}`;
console.log(newUrl);

window.location.replace(newUrl);
