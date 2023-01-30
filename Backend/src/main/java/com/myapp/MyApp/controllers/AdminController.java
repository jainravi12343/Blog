package com.myapp.MyApp.controllers;

import com.myapp.MyApp.config.JwtUtil;
import com.myapp.MyApp.models.Blog;
import com.myapp.MyApp.models.MyCandidate;
import com.myapp.MyApp.services.Impl.MyCandidateServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/")
public class AdminController {

    @Autowired
    private MyCandidateServiceImpl myCandidateService;
    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("list-candidates")
    public ResponseEntity<List<MyCandidate>> getAllCandidates() throws Exception {
        List<MyCandidate> list = this.myCandidateService.getAllCandidates();
        return ResponseEntity.ok(list);
    }

    @GetMapping("list-candidates-active")
    public ResponseEntity<List<MyCandidate>> getActiveCandidates(
            @RequestHeader("Authorization") String token) throws Exception {

        List<MyCandidate> list = new ArrayList<>();

        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            String owner = this.jwtUtil.extractUsername(jwtToken);
            if (owner == null || owner == "") {
                throw new Exception("Owner not Got from token");
            }
            list = this.myCandidateService.getAllActiveCandidates();
        }
        return ResponseEntity.ok(list);

    }

    @GetMapping("list-candidates-not-active")
    public ResponseEntity<List<MyCandidate>> getAllCandidatesCandidates(
            @RequestHeader("Authorization") String token) throws Exception {

        List<MyCandidate> list = new ArrayList<>();

        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            String owner = this.jwtUtil.extractUsername(jwtToken);
            if (owner == null || owner == "") {
                throw new Exception("Owner not Got from token");
            }
            list = this.myCandidateService.getAllActiveCandidates();
        }
        return ResponseEntity.ok(list);
    }
}