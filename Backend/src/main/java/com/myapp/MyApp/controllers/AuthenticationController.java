package com.myapp.MyApp.controllers;
import com.myapp.MyApp.config.JwtUtil;
import com.myapp.MyApp.models.JwtRequest;
import com.myapp.MyApp.models.JwtResponse;
import com.myapp.MyApp.models.MyUser;
import com.myapp.MyApp.repository.MyUserRepository;
import com.myapp.MyApp.services.Impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {
    @Autowired
    private MyUserRepository myUserRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {
            MyUser local = myUserRepository.findByEmail(jwtRequest.getEmail());
            System.out.println("Local : " + local);
            this.authentication(jwtRequest.getEmail(), jwtRequest.getPassword());
        } catch (UsernameNotFoundException e) {
            e.printStackTrace();
            System.out.println("User not Found");
        } catch (Exception e) {
            System.out.println("Error");
            throw new RuntimeException(e);
        }
        // user is validated
        UserDetails userDetails = this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getEmail());
        String token = this.jwtUtil.generateToken(userDetails);
        System.out.println("Token " + token);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authentication(String email, String password) throws Exception {
        try {
            System.out.println("Email : " + email);
            System.out.println("Password : " + password);

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("USER DISABLED !! " + e.getMessage());
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid Credentials" + e.getMessage());
        } catch (Exception e) {
            throw new Exception("Error " + e.getMessage());
        }
    }

    @GetMapping("/current-user")
    public  MyUser getCurrentUser(Principal principal){
        System.out.println("Get User Called");
        MyUser local= (MyUser) this.userDetailsServiceImpl.loadUserByUsername(principal.getName());
        return local;
    }






}
