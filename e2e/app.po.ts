import { browser, by, element } from 'protractor';

export class NgxRxjsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aymen-root h1')).getText();
  }
}
