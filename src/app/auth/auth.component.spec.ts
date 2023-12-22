import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { TestunitaireService } from '../services/testunitaire.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [TestunitaireService],
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use MyService to add numbers', () => {
    const myService = TestBed.inject(TestunitaireService);
    spyOn(myService, "add").and.returnValue('test');

    component.ngOnInit();
    expect(component.result).toEqual('Hello, World!2');
  });

});
// 
// my-component.component.spec.ts

// describe('MyComponent', () => {
 
  
//   it('should use MyService to add numbers', () => {
//     const myService = TestBed.inject(MyService);
//     spyOn(myService, 'add').and.returnValue(5);

//     component.ngOnInit();
//     expect(component.result).toEqual(5);
//   });
// });

