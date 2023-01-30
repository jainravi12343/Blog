package com.myapp.MyApp.repository;

import com.myapp.MyApp.models.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyUserRepository extends JpaRepository<MyUser,Long>{

    MyUser findByEmail(String email);
}
