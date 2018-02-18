import { NgCli201802Page } from './app.po';

describe('ng-cli201802 App', () => {
  let page: NgCli201802Page;

  beforeEach(() => {
    page = new NgCli201802Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
