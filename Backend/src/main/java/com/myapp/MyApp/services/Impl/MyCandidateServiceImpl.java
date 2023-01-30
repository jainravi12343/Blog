package com.myapp.MyApp.services.Impl;

import com.myapp.MyApp.models.MyCandidate;
import com.myapp.MyApp.repository.MyCandidateRepository;
import com.myapp.MyApp.services.MyCandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyCandidateServiceImpl implements MyCandidateService {
    @Autowired
    private MyCandidateRepository myCandidateRepository;
    @Override
    public MyCandidate createMyCandidate(MyCandidate candidate) throws Exception {
        return this.myCandidateRepository.saveAndFlush(candidate);
    }

    @Override
    public List<MyCandidate> getAllCandidates() throws Exception {
        return this.myCandidateRepository.findAll();
    }

    @Override
    public List<MyCandidate> getAllActiveCandidates() throws Exception {
        return this.myCandidateRepository.findByActive(Boolean.TRUE);
    }

    @Override
    public List<MyCandidate> getAllNotActiveCandidates() throws Exception {
        return this.myCandidateRepository.findByActive(Boolean.FALSE);
    }
}
