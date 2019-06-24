var writeLink = document.querySelector(".write-button");

var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".write-close");

var form = popup.querySelector(".write-form");
var userName = popup.querySelector("[name=name]");
var userEmail = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".contacts-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

writeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        userEmail.value = storage;
        userName.focus();
    } else {
        userEmail.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", userEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});