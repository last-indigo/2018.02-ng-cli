import { browser, element, by } from 'protractor';

export class NgCli201802Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
