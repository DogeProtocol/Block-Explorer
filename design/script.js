function openNav() {
    document.getElementById("mySidenav").style.display = 'flex';
    document.getElementById("divSideMenuBurger").style.display = 'none';
    document.getElementById("divSideMenuBurgerClose").style.display = '';
    document.getElementById("divSideMenuBurgerClose").style.visibility = "visible";
    return false;
}

function closeNav() {
    document.getElementById("mySidenav").style.display = 'none';
    document.getElementById("divSideMenuBurger").style.display = '';
    document.getElementById("divSideMenuBurgerClose").style.display = 'none';
    document.getElementById("divSideMenuBurgerClose").style.visibility = "hidden";
    return false;
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

