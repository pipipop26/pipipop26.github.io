
window.onload = function () {
    setTimeout(function () {
        document.getElementById("subscribePopup").style.display = "block";
        document.getElementById("popupOverlay").style.display = "block";
    }, 5000);
};

function closePopup() {
    document.getElementById("subscribePopup").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";
}
