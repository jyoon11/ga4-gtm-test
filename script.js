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
    }});

    // const consentObject = ['functionality','advertising','performance'];
    const consentObject = [];

    const consentModeStates = {
        ad_storage: consentObject.indexOf("advertising") > -1 ? 'denied' : 'granted',
        ad_user_data: consentObject.indexOf("advertising") > -1 ? 'denied' : 'granted',
        ad_personalization: consentObject.indexOf("advertising") > -1 ? 'denied' : 'granted',
        analytics_storage: consentObject.indexOf('performance') > -1 ? 'denied' : 'granted',
        functionality_storage: consentObject.indexOf('functionality') > -1 ? 'denied' : 'granted',
        personalization_storage: consentObject.indexOf('functionality') > -1 ? 'denied' : 'granted',
        security_storage: 'granted'
    };
    if (gtag) {
      console.log('consentModeStates', consentModeStates);
      gtag('consent', 'update', consentModeStates)
    } else {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments)
      }
      gtag('consent', 'update', consentModeStates)
    }
  `;

  document.head.appendChild(gTagScript);
  document.head.appendChild(gTagInitScript);
}

function gotoSecondPage() {
  window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/second.html';
}

function gotoHomePage() {
  window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/home.html';
  // window.history.go(-1);
}

function trackViewHomePage() {
  if (window.gtag) {

    gtag('get', 'G-ZPDGYKBSC6', 'client_id', (clientID) => {
      console.log('client id = ', clientID);
    });
    window.gtag('event', 'view_home_page', {});
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

function pushSelectHome() {
  if (window.dataLayer) {
    window.dataLayer.push({event: 'SelectHome'});
  }
}

function pushSelectSecond() {
  if (window.dataLayer) {
    window.dataLayer.push({event: 'SelectSecond'});
  }
}
