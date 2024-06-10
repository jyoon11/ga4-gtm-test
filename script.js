function gotoSecondPage() {
  window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/second.html';
}

function goback() {
  window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/index.html';
}

function trackViewStoreList() {
  if (window.gtag) {
    window.gtag('event', 'view_store_list', {});
  }
}
