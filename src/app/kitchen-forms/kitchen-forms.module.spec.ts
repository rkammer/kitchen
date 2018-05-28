import { KitchenFormsModule } from './kitchen-forms.module';

describe('KitchenFormsModule', () => {
  let kitchenFormsModule: KitchenFormsModule;

  beforeEach(() => {
    kitchenFormsModule = new KitchenFormsModule();
  });

  it('should create an instance', () => {
    expect(kitchenFormsModule).toBeTruthy();
  });
});
