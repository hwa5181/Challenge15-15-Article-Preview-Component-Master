const shareButton = document.getElementById("share-button");
const bottomContainer = document.getElementById("bottom-container");

const shareContainer = document.getElementById("share-container");
const triangle_down = document.getElementById("triangle-down");

const icon_avatar = document.getElementById("icon-avatar");
const people_content = document.getElementById("people-content");

isShareButtonShown = false;

function showShareContainer() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 920) {
        console.log(`screenWidth: ${screenWidth} > 920px`);
        shareContainer.style.opacity = "1";
        shareContainer.style.backgroundColor = "var(--very-dark-grayish-blue)";
        triangle_down.style.opacity = "1";
        isShareButtonShown = true;
    }
    else {
        console.log(`screenWidth: ${screenWidth} < 920px`);
        icon_avatar.style.opacity = "0";
        people_content.style.opacity = "0";
        shareContainer.style.opacity = "1";
        bottomContainer.style.backgroundColor = "var(--very-dark-grayish-blue)";
        isShareButtonShown = true;
    }

}

function resetLayout() {
    icon_avatar.style.opacity = "1";
    people_content.style.opacity = "1";
    shareContainer.style.opacity = "0";
    shareContainer.style.backgroundColor = "transparent";
    triangle_down.style.opacity = "0";
    bottomContainer.style.backgroundColor = "white";
    isShareButtonShown = false;
}

shareButton.addEventListener("click", showShareContainer);

window.addEventListener("resize", function () {
        if (isShareButtonShown) {
            resetLayout();
            // showShareContainer();
        }
});


// Add click event listener to the document
document.addEventListener("click", function (event) {
    const isClickInsideShareButton = shareButton.contains(event.target);
    const isClickInsideShareContainer = shareContainer.contains(event.target);
    const isClickInsideTriangle = triangle_down.contains(event.target);
    const isClickInsidebottomContainer = bottomContainer.contains((event.target));


    if (window.innerWidth >= 920 && isShareButtonShown && !isClickInsideShareButton && !isClickInsideShareContainer && !isClickInsideTriangle) {
        resetLayout()
        // console.log(`Hide shareContainer, window.innerWidth: ${window.innerWidth}`);
    }
    else if (isShareButtonShown && !isClickInsidebottomContainer) {
        resetLayout();
    }
});