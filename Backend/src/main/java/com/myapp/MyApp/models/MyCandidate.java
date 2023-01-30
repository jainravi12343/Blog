package com.myapp.MyApp.models;

import jdk.jfr.DataAmount;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="MyCandidate")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class MyCandidate implements Cloneable, Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String linkedinUrl;
    private String dob;
    private String gender;
    private String aboutMe;
    private String role;
    private Boolean active;
}
