import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarHomeComponent } from './components/sidebar-home/sidebar-home.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { HomeBlogViewComponent } from './pages/home-blog-view/home-blog-view.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorService } from './services/interceptor.service';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { CreateBlogComponent } from './user/create-blog/create-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule}from'@angular/material/slide-toggle'
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AboutAuthorComponent } from './components/about-author/about-author.component';
import { ProtoviewBlogComponent } from './components/protoview-blog/protoview-blog.component';
import { ListAuthorBlogsComponent } from './user/list-author-blogs/list-author-blogs.component';
import { SignupComponent } from './pages/sign-up/sign-up.component';
import { CommentsModule } from './comments/comments.module';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentsComponent } from './comments/comments/comments.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarHomeComponent,
    HomeComponent,
    BlogPageComponent,
    BlogViewComponent,
    HomeBlogViewComponent,
    LoginComponent,
    UserDashboardComponent,
    ProfileComponent,
    UserSidebarComponent,
    CreateBlogComponent,
    AboutAuthorComponent,
    ProtoviewBlogComponent,
    SignupComponent,
    ListAuthorBlogsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    CommentsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
