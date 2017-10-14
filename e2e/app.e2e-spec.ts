import { SickNastyPage } from './app.po';

describe('sick-nasty App', function() {
  let page: SickNastyPage;

  beforeEach(() => {
    page = new SickNastyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
