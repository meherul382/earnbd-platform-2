/* EarnBD Adsterra loader. Keep the publisher script unchanged and load it once per page. */
(function () {
  if (document.querySelector('script[data-earn-bd-adsterra]')) return;
  var s = document.createElement('script');
  s.src = 'https://movementssubscriptionobjection.com/bd/69/05/bd6905d20fbe6ac804838a3fa363f603.js';
  s.setAttribute('data-earn-bd-adsterra', 'true');
  document.body.appendChild(s);
})();
