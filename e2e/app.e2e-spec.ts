import { DMSPage } from './app.po';

describe('dms App', () => {
  let page: DMSPage;

  beforeEach(() => {
    page = new DMSPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
