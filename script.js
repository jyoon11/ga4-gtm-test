function gotoSecondPage() {
  window.location.href = 'https://jyoon11.github.io/ga4-gtm-test/second.html';
}

function trackOne() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZPDGYKBSC6');
}
