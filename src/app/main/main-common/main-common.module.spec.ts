import { MainCommonModule } from './main-common.module';

describe('MainCommonModule', () => {
  let mainCommonModule: MainCommonModule;

  beforeEach(() => {
    mainCommonModule = new MainCommonModule();
  });

  it('should create an instance', () => {
    expect(mainCommonModule).toBeTruthy();
  });
});
