import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  image: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-component-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './component-blog.component.html',
  styleUrls: ['./component-blog.component.css']
})
export class ComponentBlogComponent {
  newBlogPost: BlogPost = {
    title: '',
    image: '',
    content: '',
    date: ''
  };

  blogPosts: BlogPost[] = [];

  constructor() {
    this.blogPosts = [
      {
        title: 'Primera Noticia',
        image: 'https://via.placeholder.com/600x400',
        content: 'Este es el contenido de la primera noticia.',
        date: '2023-01-01'
      },
      {
        title: 'Segunda Noticia',
        image: 'https://via.placeholder.com/600x400',
        content: 'Este es el contenido de la segunda noticia.',
        date: '2023-02-01'
      }
    ];
  }

  addBlogPost(form: any) {
    if (form.valid) {
      this.blogPosts.push({ ...this.newBlogPost });
      this.newBlogPost = { title: '', image: '', content: '', date: '' };
      form.resetForm();
    }
  }
}
