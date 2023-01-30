package com.myapp.MyApp.controllers;

import com.myapp.MyApp.models.MyUser;
import com.myapp.MyApp.services.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/user")
    public MyUser createUser(@RequestBody MyUser user) throws Exception {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            user.setEnabled(true);
            user.setRole("NORMAL");
            return this.userService.createUser(user);
    }

    @PutMapping("/update-user")
    public MyUser updateUser(@RequestBody MyUser user) throws Exception {
//        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return this.userService.updateUser(user);
    }

}
