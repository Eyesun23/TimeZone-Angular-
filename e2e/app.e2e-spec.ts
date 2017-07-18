import { DemoAppExamplePage } from './app.po';

describe('demo-app-example App', () => {
  let page: DemoAppExamplePage;

  beforeEach(() => {
    page = new DemoAppExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
