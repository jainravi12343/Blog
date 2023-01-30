package com.myapp.MyApp.services;

import com.myapp.MyApp.models.MyCandidate;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface MyCandidateService {
    MyCandidate createMyCandidate (MyCandidate candidate) throws Exception;
    List<MyCandidate> getAllCandidates () throws Exception;
    List<MyCandidate>getAllActiveCandidates() throws Exception;
    List<MyCandidate>getAllNotActiveCandidates() throws Exception;
}
