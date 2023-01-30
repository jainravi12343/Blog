package com.myapp.MyApp.repository;

import com.myapp.MyApp.models.BlogUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogUserRepository extends JpaRepository<BlogUser,Long> {
    BlogUser findByEmail(String email) throws Exception;
}
