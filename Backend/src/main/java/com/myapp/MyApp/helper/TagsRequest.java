package com.myapp.MyApp.helper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.sql.rowset.serial.SerialArray;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class TagsRequest  implements Serializable {
    List<String> tagsRequest;
}
