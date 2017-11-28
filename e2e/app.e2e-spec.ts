import { StackSlothNgPage } from './app.po';

describe('stack-sloth-ng App', function() {
  let page: StackSlothNgPage;

  beforeEach(() => {
    page = new StackSlothNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
