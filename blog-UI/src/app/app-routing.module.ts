import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { HomeBlogViewComponent } from './pages/home-blog-view/home-blog-view.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from './services/auth.guard';
import { CreateBlogComponent } from './user/create-blog/create-blog.component';
import { ListAuthorBlogsComponent } from './user/list-author-blogs/list-author-blogs.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:'home-blog-view',
        component:HomeBlogViewComponent
      }
    ]
  },
  {
    canActivate:[AuthGuard],
    path:'blog-page',
    component:BlogPageComponent
  },
  {
    canActivate:[AuthGuard],
    path:'read-blog',
    component:BlogViewComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:SignupComponent
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        component:ProfileComponent,
        pathMatch:'full'
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'create-blog',
        component:CreateBlogComponent,
      },
      {
        path:'user-all-blogs',
        component:ListAuthorBlogsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
