function loadGtag() {
  let gTagScript = document.createElement('script');
  gTagScript.setAttribute('type', 'text/javascript');
  gTagScript.src = `https://www.googletagmanager.com/gtag/js?id=G-ZPDGYKBSC6&l=dataLayer`;

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

function gotoMainPage() {
  window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/main.html';
  // window.history.go(-1);
}

function trackViewMainPage() {
  if (window.gtag) {

    gtag('get', 'G-ZPDGYKBSC6', 'client_id', (clientID) => {
      console.log('client id = ', clientID);
    });
    window.gtag('event', 'view_main_page', {});
  }
}

function trackViewSecondPage() {
  if (window.gtag) {

    gtag('get', 'G-ZPDGYKBSC6', 'client_id', (clientID) => {
      console.log('client id = ', clientID);
    });
    window.gtag('event', 'view_second_page', {});
  }
}

function pushSelectMain() {
  if (window.dataLayer) {
    window.dataLayer.push({event: 'SelectMain'});
  }
}

function pushSelectSecond() {
  if (window.dataLayer) {
    window.dataLayer.push({event: 'SelectSecond'});
  }
}
