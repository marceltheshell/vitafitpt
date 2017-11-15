import { VitafitptPage } from './app.po';

describe('vitafitpt App', function() {
  let page: VitafitptPage;

  beforeEach(() => {
    page = new VitafitptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
