import { TestBed } from '@angular/core/testing';

import { AjaxcallService } from './ajaxcall.service';

describe('AjaxcallService', () => {
  let service: AjaxcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjaxcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
