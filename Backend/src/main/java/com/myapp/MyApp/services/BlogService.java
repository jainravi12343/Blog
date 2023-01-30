package com.myapp.MyApp.services;
import com.myapp.MyApp.models.Blog;
import java.util.List;

public interface BlogService {
    //get all blogs
    List<Blog>getAllBlogs() throws Exception;

    List<Blog>getAllBlogsByCategory(String category)throws Exception;

    List<Blog> getAllBlogsByTagsIn(String tag)throws Exception;
    List<Blog>getAllBlogsBySearch(String search)throws Exception;
    List<Blog>getAllBlogsByOwner(String email)throws Exception;

    Blog createBlog(Blog blog) throws Exception;
    Blog getBlogById(Long id)throws Exception;

    void deleteBlog(Long id)throws Exception;
    List<Blog> getMostLikedBlogs(int n)throws Exception;
}
