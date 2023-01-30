package com.myapp.MyApp.services.Impl;

import com.myapp.MyApp.models.MyUser;
import com.myapp.MyApp.repository.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private MyUserRepository myUserRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        MyUser local=myUserRepository.findByEmail(email);
        if(local==null){
            System.out.println("User Not Found with Email :: "+email);
            throw new UsernameNotFoundException("UserName not Found");
        }
        System.out.println(local);
        return local;
    }
}
