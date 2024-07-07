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

  addBlogPost() {
    if (this.newBlogPost.title && this.newBlogPost.image && this.newBlogPost.content && this.newBlogPost.date) {
      this.blogPosts.push({ ...this.newBlogPost });
      this.newBlogPost = { title: '', image: '', content: '', date: '' };
    }
  }
}
