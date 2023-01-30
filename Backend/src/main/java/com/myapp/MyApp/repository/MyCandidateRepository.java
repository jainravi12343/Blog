package com.myapp.MyApp.repository;

import com.myapp.MyApp.models.MyCandidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyCandidateRepository extends JpaRepository<MyCandidate,Long> {

    List<MyCandidate> findByActive(Boolean active) throws Exception;

}
