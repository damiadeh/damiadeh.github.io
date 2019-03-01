function getParameterByName(name, url) {
    if (!url)url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function() {
    var paramFromUrl =  getParameterByName("utm_campaign");
    var getTitleElement = document.getElementsByClassName('m-hero_title');
    var getDescriptionElement = document.getElementsByClassName('m-hero_description');

    switch (paramFromUrl) {
        case "t1-a1-c1":
            getTitleElement[0].innerText = 'Hero Title1';
            getDescriptionElement[0].innerText  = 'Hero Description1';
            break;
        case "t1-a1-c2":
            getTitleElement[0].innerText = 'Hero Title2';
            getDescriptionElement[0].innerText  = 'Hero Description2';
            break;
        case "t1-a1-c3":
            getTitleElement[0].innerText = 'Hero Title3';
            getDescriptionElement[0].innerText  = 'Hero Description3';
            break;
        default:
            break;
    }
 }, false);

