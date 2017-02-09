import { ProjectMangaPage } from './app.po';

describe('project-manga App', function() {
  let page: ProjectMangaPage;

  beforeEach(() => {
    page = new ProjectMangaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
