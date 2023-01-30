package com.myapp.MyApp.models;
import lombok.Data;
import lombok.ToString;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
@Entity
@Table(name="blog")
@ToString
@Data
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String title;
    private String description;
    private String category;
    private String date;
    private String owner;
    private String footer;
    @ElementCollection(fetch = FetchType.EAGER)
    @Embedded
    @JoinColumn(name="tag",referencedColumnName = "tag")
    private List<Tag>tags=new ArrayList<Tag>();
    @Column(name = "content", columnDefinition = "TEXT", nullable = false)
    private String content;
    private Boolean active;
//    @OneToMany(mappedBy = "blog", cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
//    private Collection<Comment> comments;
    private  Long likes;
    private Long dislikes;
}