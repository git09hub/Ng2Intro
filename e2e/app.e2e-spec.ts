import { Ng2IntroductionPage } from './app.po';

describe('ng2-introduction App', () => {
  let page: Ng2IntroductionPage;

  beforeEach(() => {
    page = new Ng2IntroductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
