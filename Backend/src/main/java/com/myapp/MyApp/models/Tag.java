package com.myapp.MyApp.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import javax.persistence.*;
import java.io.Serializable;
@Embeddable
@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tag implements Serializable,Cloneable {

    String tag;
}
