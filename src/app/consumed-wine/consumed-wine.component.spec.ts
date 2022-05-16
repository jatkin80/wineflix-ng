import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumedWineComponent } from './consumed-wine.component';

describe('ConsumedWineComponent', () => {
  let component: ConsumedWineComponent;
  let fixture: ComponentFixture<ConsumedWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumedWineComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumedWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
