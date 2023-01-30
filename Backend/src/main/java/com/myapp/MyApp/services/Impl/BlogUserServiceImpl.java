package com.myapp.MyApp.services.Impl;

import com.myapp.MyApp.models.BlogUser;
import com.myapp.MyApp.repository.BlogUserRepository;
import com.myapp.MyApp.services.BlogUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

@Service
public class BlogUserServiceImpl implements BlogUserService {
    @Autowired
    private BlogUserRepository blogUserRepository;
    @Override
    public BlogUser createBlogUser(BlogUser user) throws Exception {
        return this.blogUserRepository.saveAndFlush(user);
    }

    @Override
    public BlogUser getBlogUserByEmail(String email) throws Exception {
        return this.blogUserRepository.findByEmail(email);
    }
}
