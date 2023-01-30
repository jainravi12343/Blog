package com.myapp.MyApp.controllers;
import com.myapp.MyApp.config.JwtUtil;
import com.myapp.MyApp.helper.TagsRequest;
import com.myapp.MyApp.models.*;
import com.myapp.MyApp.services.Impl.BlogServiceImpl;
import com.myapp.MyApp.services.Impl.BlogUserServiceImpl;
import com.myapp.MyApp.services.Impl.UserDetailsServiceImpl;
import com.myapp.MyApp.services.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/blog")
@CrossOrigin("*")
public class BlogController {

    @Autowired
    private BlogServiceImpl blogService;
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BlogUserServiceImpl blogUserService;

    // get all blogs
    @GetMapping("")
    public ResponseEntity<List<Blog>> getAllBlogs()throws Exception{
        List<Blog> result= this.blogService.getAllBlogs();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable("id") Long id )throws Exception{
        Blog result= this.blogService.getBlogById(id);
        return ResponseEntity.ok(result);
    }
    // get blogs by like
    @GetMapping("/likes")
    public ResponseEntity<List<Blog>> getMostLikedBLogs()throws Exception{
        int topBlogs=10;
        List<Blog> result= this.blogService.getMostLikedBlogs(topBlogs);
        return ResponseEntity.ok(result);
    }

    // get blogs bny language
    @GetMapping("/getByTags/{tag}")
    public ResponseEntity<List<Blog>> getByTags(@PathVariable String tag)throws Exception{
//        List<Blog>result=this.blogService.getAllBlogs();
            List<Blog>result=this.blogService.getAllBlogsByTagsIn(tag);
            return ResponseEntity.ok(result);
    }

    // get blogs by search
    @GetMapping("/getBySearch/{search}")
    public ResponseEntity<List<Blog>> getAllBlogsBySearch(@PathVariable("search")  String search)throws Exception{
        List<Blog> result= this.blogService.getAllBlogsBySearch(search);
        return ResponseEntity.ok(result);
    }
    // serach bby category
    @GetMapping("/getByCategory/{category}")
    public ResponseEntity<List<Blog>> getAllBlogsByCategory(@PathVariable("category")  String category)throws Exception{
        List<Blog> result= this.blogService.getAllBlogsByCategory(category);
        return ResponseEntity.ok(result);
    }

    //get all blogs of owner
    @GetMapping("/getByOwner/{owner}")
    public ResponseEntity<List<Blog>> getAllBlogsByOwner(@PathVariable("owner")  String owner)throws Exception{
        List<Blog> result= this.blogService.getAllBlogsByCategory(owner);
        return ResponseEntity.ok(result);
    }

    // create a blog
    @PostMapping("")
    public ResponseEntity<Blog> createBlog(
            @RequestHeader("Authorization") String token,
            @RequestBody Blog blog )throws Exception{
        System.out.println(blog);
        blog.setActive(true);
        Date date=new Date();
        blog.setDate(date.toString());
        blog.setLikes(0L);
        blog.setDislikes(0L);

        if(token!=null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            String owner = this.jwtUtil.extractUsername(jwtToken);
            if (owner == null || owner == "") {
                throw new Exception("Owner not Got from token");
            }
            blog.setOwner(owner);
        }
        Blog result= this.blogService.createBlog(blog);
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/{id}")
    public  void deleteBlog(@PathVariable("id")Long id)throws Exception{
        this.blogService.deleteBlog(id);
    }

    @GetMapping("/getOwnerDetails/{owner}")
    public MyUser getAuthorDetailsByEmail(@PathVariable("owner") String owner)throws Exception{
        MyUser author=this.userService.getUserDetails(owner);
        return author;
    }

    @GetMapping("/getAllAuthorBlogs")
    public ResponseEntity<List<Blog>> getAllBlogsOfAuthor(
            @RequestHeader("Authorization") String token)throws Exception{
        List<Blog>blogs=new ArrayList<>();
        if(token!=null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            String owner = this.jwtUtil.extractUsername(jwtToken);
            if (owner == null || owner == "") {
                throw new Exception("Owner not Got from token");
            }
            blogs=this.blogService.getAllBlogsByOwner(owner);
        }
        return ResponseEntity.ok(blogs);
    }

//create Blog user
//    @PostMapping("/create-user")
//    public ResponseEntity<BlogUser> createBlogUser(@RequestBody BlogUser user) throws Exception{
//        user.setEnabled(true);
//        user.setRole("NORMAL");
//        BlogUser result=this.blogUserService.createBlogUser(user);
//        return ResponseEntity.ok(result);
//    }



}
