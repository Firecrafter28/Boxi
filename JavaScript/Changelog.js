/**
 * @author Firecrafter28
 * @license GPL-3.0
 */


const versions = document.querySelectorAll(".version");

versions.forEach((version) => {
    const versionNum = version.getAttribute("data-version");
    const isLatest = version.hasAttribute("data-latest");

    const versionNumber = document.createElement("h2");
    versionNumber.className = "version__number";
    versionNumber.innerHTML = `${isLatest ? `${versionNum} (Latest)` : versionNum}`;

    const versionContent = version.innerHTML;
    version.innerHTML = "";
    version.appendChild(versionNumber);
    version.innerHTML += versionContent;
});

const backContainer = document.getElementById("link-container");
const backLink = document.createElement("a");

const getUrlParameter = (sParam) => {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    var sParameterName;

    for (var i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }

    return false;
}

const backParams = getUrlParameter("redirect");

backLink.innerHTML = "<- Back";

if (backParams == "game") {
    backLink.href = "../Pages/Game.html" 
} else if (backParams == "home") {
    backLink.href = "../index.html"
} else if (backParams == false) {
    location.href = "../Pages/Errors/400.html";
} else {
    backLink.href = "../Pages/Errors/404.html";
}

backContainer.appendChild(backLink);