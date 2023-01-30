package com.myapp.MyApp.services.Impl;

import com.myapp.MyApp.models.MyUser;
import com.myapp.MyApp.repository.MyUserRepository;
import com.myapp.MyApp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private MyUserRepository myUserRepository;

    @Override
    public MyUser createUser(MyUser user) throws Exception {
//        user.setRole("NORMAL");
        MyUser local=myUserRepository.findByEmail(user.getEmail());
        if(local!=null){
            System.out.println("User Already there");
            throw  new Exception("Alerdy Found User ");
        }else{
            local=myUserRepository.save(user);
        }
        return local;

    }

    // GetUser
    @Override
    public MyUser getUser(MyUser user) throws Exception {
        return null;
    }

    // DeleteUser
    @Override
    public MyUser deleteUser(MyUser user) throws Exception {
        return null;
    }

    //UpdateUser
    @Override
    public MyUser updateUser(MyUser user) throws Exception {
        MyUser local=myUserRepository.findByEmail(user.getEmail());
        if(local==null){
            System.out.println("user not there");
            throw new Exception("USER NOT PRESENT!!");
        }else{
            try {
                local.setFirstName(user.getFirstName());
                local.setLastName(user.getLastName());
                local.setLinkedinUrl(user.getLinkedinUrl());
//                local.setResumeUrl(user.getResumeUrl());
                local.setPhone(user.getPhone());
                local = myUserRepository.save(local);
                return local;
            }catch (Exception e){
                System.out.println("Something @ent Wrong ");
                throw new Exception("Some Error");
            }
        }
    }

    @Override
    public MyUser getUserDetails(String email) throws Exception {
        return this.myUserRepository.findByEmail(email);
    }
}
