import { TestBed } from '@angular/core/testing';
import { TestunitaireService } from './testunitaire.service';

describe('TestunitaireService', () => {
  let service: TestunitaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TestunitaireService],});
    service = TestBed.inject(TestunitaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a greeting message', () => {
    const result = service.getValue();
    expect(result).toEqual('Hello, World!');
  });
});




// seconde
// describe('MyService', () => {
//   let service: MyService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MyService],
//     });
//     service = TestBed.inject(MyService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should return a greeting message', () => {
//     const result = service.getValue();
//     expect(result).toEqual('Hello, World!');
//   });
// });

