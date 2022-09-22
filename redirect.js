const path = window.location.href;

let domain = new URL(path);
domain.hostname.replace("coachofpeople", "spirkomatus");
