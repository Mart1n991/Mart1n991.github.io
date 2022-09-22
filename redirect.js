// const path = window.location.pathname;

// window.location.replace(`https://spirkomatus.com${path}`);

// if it's on index.html
if (window.sessionStorage.path) {
  let path = window.sessionStorage.path; // gets the path saved on sessionStorage
  window.history.pushState(null, null, path); // push it on url
  window.sessionStorage.removeItem("path"); // removes from session
} else {
  // if it's on 404.html (path doens't exist)
  let path = window.location.pathname; // get the path url
  window.sessionStorage.path = path; // saves on sessionStorage
  window.location.href = "/"; // go to index
}
