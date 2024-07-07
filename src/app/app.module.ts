import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentBlogComponent } from './component-blog/component-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
