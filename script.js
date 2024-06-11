function gotoSecondPage() {
  // window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/second.html';
  window.history.pushState({}, '', '/ga4-gtm-test/second.html');
}

function goback() {
  // window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/index.html';
  window.history.go(-1);
}

function trackViewStoreList() {
  if (window.gtag) {

    gtag('get', 'G-ZPDGYKBSC6', 'client_id', (clientID) => {
      console.log('client id = ', clientID);
    });
    window.gtag('event', 'view_store_list', {});
  }
}

function pushSelectStore() {
  if (window.dataLayer) {
    window.dataLayer.push({event: 'SelectStore'});
  }
}
