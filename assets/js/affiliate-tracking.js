/* No SDK or network request is created here. GA4 must be configured separately. */
(function () {
  'use strict';
  function record(event) {
    if (event.type === 'auxclick' && event.button !== 1) return;
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var url;
    try { url = new URL(link.href, window.location.href); } catch (e) { return; }
    var providers = { 'px.a8.net': 'a8', 'www.rentracks.jp': 'rentracks', 'track.affiliate-b.com': 'afb', 't.afi-b.com': 'afb' };
    var provider = providers[url.hostname];
    if (!provider) return;
    var box = link.closest('[data-affiliate-service], .aff-cta, .aff-cta-mini');
    var name = box && box.querySelector('.aff-cta-name, .aff-cta-mini-name');
    var payload = {
      affiliate_network: provider,
      affiliate_service: box && box.getAttribute('data-affiliate-service') || (name ? name.textContent.trim().slice(0,80) : 'other'),
      affiliate_program: box && box.getAttribute('data-affiliate-program') || '',
      cta_placement: box && box.getAttribute('data-affiliate-placement') || (link.querySelector('img') ? 'banner' : 'text'),
      article_path: window.location.pathname,
      transport_type: 'beacon'
    };
    // URL queries, form inputs and diagnostic answers are deliberately excluded.
    if (typeof window.gtag === 'function') window.gtag('event', 'affiliate_click', payload);
  }
  document.addEventListener('click', record);
  document.addEventListener('auxclick', record);
})();
