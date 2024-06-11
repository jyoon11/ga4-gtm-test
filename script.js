function loadGtag() {
  // gTag Main script
  let gTagScript = document.createElement('script');
  gTagScript.setAttribute('type', 'text/javascript');
  gTagScript.src = `https://www.googletagmanager.com/gtag/js?id=G-ZPDGYKBSC6&l=dataLayer`;

  // gTag init
  let gTagInitScript = document.createElement('script');
  gTagInitScript.setAttribute('type', 'text/javascript');
  gTagInitScript.text = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZPDGYKBSC6');
    gtag('set', {
    'user_properties': {
    'lbs_on': 'no',
    'customer_type': 'Guest'
    }
  });`;

  document.head.appendChild(gTagScript);
  document.head.appendChild(gTagInitScript);
}

function gotoSecondPage() {
  window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/second.html';
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
