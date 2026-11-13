// 公開可能なサイト設定のみを読み込む。個人情報・秘密情報は絶対に入れない。
(async () => {
  try {
    const response = await fetch('site-config.json', {cache: 'no-store'});
    if (!response.ok) throw new Error('設定ファイルを読み込めません');
    const c = await response.json();
    const set = (id, value) => {
      if (typeof value === 'string') {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      }
    };
    set('hero-title', c.heroTitle);
    set('hero-subtitle', c.heroSubtitle);
    set('event-date', c.eventDateText);
    set('event-venue', c.venue);
    set('venue-note', c.venueNote);
    set('event-registration', c.registration);
    set('registration-note', c.registrationNote);
    set('notice-date', c.noticeDate);
    set('notice-text', c.noticeText);
    document.body.dataset.theme = ['navy','forest','wine'].includes(c.theme) ? c.theme : 'navy';
    if (c.eventDate) {
      const d = new Date(c.eventDate);
      if (!Number.isNaN(d.getTime())) {
        const el = document.getElementById('event-date');
        if (el && !c.eventDateText) el.textContent = d.toLocaleString('ja-JP');
      }
    }
  } catch (e) { console.warn('公開設定の読み込みに失敗しました。既定の表示を使います。', e); }
})();
