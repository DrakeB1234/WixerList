import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileexploreComponent } from './fileexplore.component';

describe('FileexploreComponent', () => {
  let component: FileexploreComponent;
  let fixture: ComponentFixture<FileexploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileexploreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
