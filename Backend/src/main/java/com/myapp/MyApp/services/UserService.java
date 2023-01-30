package com.myapp.MyApp.services;

import com.myapp.MyApp.models.MyUser;

public interface UserService {
    public MyUser createUser(MyUser user) throws Exception;
    public MyUser getUser(MyUser user) throws Exception;
    public MyUser deleteUser(MyUser user) throws Exception;
    public MyUser updateUser(MyUser user) throws Exception;

    MyUser getUserDetails(String email) throws  Exception;
}
