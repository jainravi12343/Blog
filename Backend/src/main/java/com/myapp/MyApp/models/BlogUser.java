package com.myapp.MyApp.models;

import lombok.*;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;

@Entity
@Table(name = "blogUser")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Transactional
@ToString
public class BlogUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String password;
    private String phone;
    private String firstName;
    private String lastName;
    private String linkedinUrl;
    private String aboutMe;
    private Boolean enabled=true;
    private String role;
}
