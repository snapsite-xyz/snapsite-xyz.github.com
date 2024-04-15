function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const setMobileOsCookie = (ios) => {
  document.querySelectorAll(`.chooser.mobile-os .chooser-header .option.${ios ? 'ios' : 'android'}`).forEach((e) => e.classList.add('active'))
  document.querySelectorAll(`.chooser.mobile-os .content.content-${ios ? 'android' : 'ios'}`).forEach((e) => e.classList.add('hide'))
  document.querySelectorAll(`.chooser.mobile-os .chooser-header .option.${ios ? 'android' : 'ios'}`).forEach((e) => e.classList.remove('active'))
  document.querySelectorAll(`.chooser.mobile-os .content.content-${ios ? 'ios' : 'android'}`).forEach((e) => e.classList.remove('hide'))
}

const MOBILE_OS_COOKIE_IOS = 'MOBILE_OS_COOKIE_IOS'
const loadCookie = () => {
  const mobileOsCookieIos = getCookie(MOBILE_OS_COOKIE_IOS)

  setMobileOsCookie(mobileOsCookieIos)
}
const clickIos = () => {
  const mobileOsCookieIos = getCookie(MOBILE_OS_COOKIE_IOS)

  setMobileOsCookie(true)

  setCookie(MOBILE_OS_COOKIE_IOS, true)
}
const clickAndroid = () => {
  const mobileOsCookieIos = getCookie(MOBILE_OS_COOKIE_IOS)

  setMobileOsCookie(false)

  setCookie(MOBILE_OS_COOKIE_IOS, false)
}
Document.prototype.ready = function (callback) {
  if (callback && typeof callback === 'function') {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.readyState === "interactive" || document.readyState === "complete") {
        return callback();
      }
    });
  }
};
document.ready(() => {
  loadCookie();
})
console.log('qui')