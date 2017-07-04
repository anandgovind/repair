import { RepairClientPage } from './app.po';

describe('repair-client App', () => {
  let page: RepairClientPage;

  beforeEach(() => {
    page = new RepairClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
