import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBlogComponent } from './component-blog.component';

describe('ComponentBlogComponent', () => {
  let component: ComponentBlogComponent;
  let fixture: ComponentFixture<ComponentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
