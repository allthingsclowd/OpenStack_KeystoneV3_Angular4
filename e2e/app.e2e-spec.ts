import { KeystoneAngular4Page } from './app.po';

describe('keystone-angular4 App', () => {
  let page: KeystoneAngular4Page;

  beforeEach(() => {
    page = new KeystoneAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
