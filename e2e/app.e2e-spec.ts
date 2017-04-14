import { M2prayerNg2Page } from './app.po';

describe('m2prayer-ng2 App', () => {
  let page: M2prayerNg2Page;

  beforeEach(() => {
    page = new M2prayerNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
