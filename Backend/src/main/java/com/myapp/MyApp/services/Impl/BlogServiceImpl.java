package com.myapp.MyApp.services.Impl;

import com.myapp.MyApp.models.Blog;
import com.myapp.MyApp.models.MyUser;
import com.myapp.MyApp.models.Tag;
import com.myapp.MyApp.repository.BlogRepository;
import com.myapp.MyApp.repository.MyUserRepository;
import com.myapp.MyApp.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.metrics.StartupStep;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    private BlogRepository blogRepository;
    @Autowired
    private MyUserRepository myUserRepository;

    @Override
    public List<Blog> getAllBlogs() throws Exception {
        return this.blogRepository.findAll();
    }

    @Override
    public Blog getBlogById(Long id) throws Exception {
        return this.blogRepository.findById(id).get();
    }

    @Override
    public List<Blog> getAllBlogsByCategory(String category) throws Exception {
        return  this.blogRepository.findByCategory(category);
    }

    @Override
    public List<Blog> getAllBlogsByTagsIn(String tag) throws Exception {
            List<Blog>alldata=blogRepository.findAll();
            List<Blog>result=new ArrayList<>();
            for(Blog blog:alldata){
                List<Tag>allTags=blog.getTags();
                for(Tag x:allTags){
                    if(x.getTag().equals(tag)){
                        result.add(blog);
                        break;
                    }
                }
            }
            return result;
    }


    @Override
    // search present in title
    public List<Blog> getAllBlogsBySearch(String search) throws Exception {
        return this.blogRepository.findByTitleContainingIgnoreCase(search);
    }

    @Override
    public List<Blog> getAllBlogsByOwner(String email) throws Exception {
        return this.blogRepository.findByOwner(email);
    }

    @Override
    public Blog createBlog(Blog blog) throws Exception {
        return this.blogRepository.saveAndFlush(blog);
    }

    @Override
    public void deleteBlog(Long id) throws Exception {
        this.blogRepository.deleteById(id);
    }

    @Override
    public List<Blog> getMostLikedBlogs(int n) throws Exception {
        return this.blogRepository.findByLikes(n);
    }
}
