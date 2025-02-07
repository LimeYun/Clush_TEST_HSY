package com.yun.todo.domain;


import java.util.Date;

import lombok.Data;

@Data
public class Todos {

    private Long no;
    private String id;
    private String name;
    private Boolean status;
    private Date createdAt;
    private Date updatedAt;
    
}
