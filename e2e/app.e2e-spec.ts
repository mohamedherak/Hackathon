import { LlPage } from './app.po';

describe('ll App', function() {
  let page: LlPage;

  beforeEach(() => {
    page = new LlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
