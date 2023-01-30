package com.myapp.MyApp.controllers;

import com.myapp.MyApp.models.MyCandidate;
import com.myapp.MyApp.services.Impl.MyCandidateServiceImpl;
import org.aspectj.apache.bcel.ExceptionConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/ncs/")
@CrossOrigin("*")
public class RegisterController{

    @Autowired
    private MyCandidateServiceImpl myCandidateService;

    @PostMapping("")
    public ResponseEntity<MyCandidate> createMyCandidate(@RequestBody MyCandidate myCandidate)throws Exception{

        myCandidate.setActive(Boolean.TRUE);
        myCandidate.setRole("NORMAL");
        MyCandidate result=this.myCandidateService.createMyCandidate(myCandidate);
        return ResponseEntity.ok().body(result);
    }
}