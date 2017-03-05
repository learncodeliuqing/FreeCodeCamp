function collapse(elemenetId) {
    var x = document.getElementById(elemenetId);
    if (x.className.indexOf('w3-hide') == -1) {
        x.className += " w3-hide";
    } else {
        x.className = x.className.replace('w3-hide', '');
    }
}