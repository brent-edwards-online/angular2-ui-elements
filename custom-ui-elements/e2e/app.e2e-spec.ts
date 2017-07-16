import { CustomUiElementsPage } from './app.po';

describe('custom-ui-elements App', () => {
  let page: CustomUiElementsPage;

  beforeEach(() => {
    page = new CustomUiElementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
