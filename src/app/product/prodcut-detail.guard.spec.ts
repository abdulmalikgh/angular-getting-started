import { TestBed, async, inject } from '@angular/core/testing';

import { ProdcutDetailGuard } from './prodcut-detail.guard';

describe('ProdcutDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdcutDetailGuard]
    });
  });

  it('should ...', inject([ProdcutDetailGuard], (guard: ProdcutDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
