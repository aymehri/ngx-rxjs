import { NgxRxjsPage } from './app.po';

describe('ngx-rxjs App', () => {
  let page: NgxRxjsPage;

  beforeEach(() => {
    page = new NgxRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aymen works!');
  });
});
