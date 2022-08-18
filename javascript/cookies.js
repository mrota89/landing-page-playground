const cookieDuration = 30; //Durata del cookie, poi il banner riappare
const cookieName = 'cookiePolicy';//Nome del cookie
const cookieValue = 'on';//valore del cookie
const cookieBanner = document.getElementById("cookie-banner");
const footer = document.getElementById("my-footer");

function createCookie(name,value,durationDays) {
    let expires = "";
    if (durationDays) {
        let date = new Date();
        let durationDaysInMilliseconds = durationDays*24*60*60*1000;
        //calcola data di scadenza
        date.setTime(date.getTime()+durationDaysInMilliseconds); 
        expires = `; expires="${date.toUTCString()}`; 
    } else {
        expires = "";
    }
    //scrive il cookie
    document.cookie = `${name}=${value}${expires}; path=/`; 
}
 
function getCookie(cookieName) {
    let name = `${cookieName}=`;
    let cookiesArray = document.cookie.split(';');
    let returnValue = "";
    if(cookiesArray.length > 0){
        cookiesArray.forEach(cookie => {
            //se il cookie è già presente, allora ritorno il valore del cookie
            if (cookie.indexOf(name) == 0) {
                returnValue = cookie.substring(name.length, cookie.length);
            } else {
                returnValue = "";
            }
        })
    } 
    return returnValue;
}
  
function acceptCookie() {
    cookieBanner.style.display = "none";
    footer.classList.remove("m-b-cookie");
    createCookie(cookieName, cookieValue, cookieDuration);
}
 
function showCookieBanner() {
    footer.classList.add("m-b-cookie");
    cookieBanner.style.display = "flex";
}

//se il cookie non è salvato nel browser, mostro il banner
function callbackCookie() {
    if(getCookie(cookieName) === "") {
        showCookieBanner(); 
    }
}

window.addEventListener("load", callbackCookie);

