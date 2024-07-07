import { Component } from '@angular/core';
import { ComponentBlogComponent } from './component-blog/component-blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentBlogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Aquí va la lógica del componente
}
