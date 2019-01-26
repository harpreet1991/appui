import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { DescriptionComponent } from './component/description/description.component';
import { JumbortonComponent } from './component/jumborton/jumborton.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { BlogComponent } from './component/blog/blog.component';
import { FormComponent } from './component/form/form.component';
import { FooterComponent } from './component/footer/footer.component';
import { BlogContentComponent } from './component/blog/blog-content/blog-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DescriptionComponent,
    JumbortonComponent,
    GalleryComponent,
    BlogComponent,
    FormComponent,
    FooterComponent,
    BlogContentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
