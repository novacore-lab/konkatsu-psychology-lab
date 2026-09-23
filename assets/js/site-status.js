(() => {
  'use strict';
  const format = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit'
  });
  function updateDate() {
    const parts = Object.fromEntries(format.formatToParts(new Date()).map(p => [p.type, p.value]));
    document.querySelectorAll('[data-today-jst]').forEach(el => {
      el.dateTime = parts.year + '-' + parts.month + '-' + parts.day;
      el.textContent = parts.year + '年' + parts.month + '月' + parts.day + '日';
    });
  }
  updateDate();
  setInterval(updateDate, 30000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateDate();
  });
})();
