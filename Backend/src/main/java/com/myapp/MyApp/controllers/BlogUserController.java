package com.myapp.MyApp.controllers;
import com.myapp.MyApp.models.BlogUser;
import com.myapp.MyApp.services.Impl.BlogUserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/blog-user")
public class BlogUserController {

    @Autowired
    private BlogUserServiceImpl blogUserService;

    @GetMapping("/")
    public ResponseEntity<BlogUser> getBlogUserByEmail(@RequestBody String email) throws Exception{
        BlogUser result=this.blogUserService.getBlogUserByEmail(email);
        return ResponseEntity.ok(result);
    }
}
