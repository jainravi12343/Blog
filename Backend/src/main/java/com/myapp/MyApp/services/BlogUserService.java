package com.myapp.MyApp.services;

import com.myapp.MyApp.models.BlogUser;

public interface BlogUserService {

    BlogUser createBlogUser(BlogUser user)throws  Exception;
    BlogUser getBlogUserByEmail(String email) throws Exception;

}
