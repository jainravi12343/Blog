package com.myapp.MyApp.repository;

import com.myapp.MyApp.models.Blog;
import com.myapp.MyApp.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog,Long> {
    List<Blog> findByOwner(String owner) throws Exception;
    List<Blog>findByCategory(String category) throws Exception;

    List<Blog>findByTitleContainingIgnoreCase(String search) throws Exception;

//    List<Blog>findByTagsContainingIgnoreCase(List<Tag> tag)throws Exception;


    List<Blog> findByTags(String tag)throws Exception;

    @Query("select b from Blog b order by likes desc")
    List<Blog>findByLikes(int n)throws Exception;
}
