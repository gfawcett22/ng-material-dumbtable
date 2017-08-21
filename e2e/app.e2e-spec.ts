import { NgMaterialDumbTablePage } from './app.po';

describe('ng-material-dumb-table App', () => {
  let page: NgMaterialDumbTablePage;

  beforeEach(() => {
    page = new NgMaterialDumbTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
