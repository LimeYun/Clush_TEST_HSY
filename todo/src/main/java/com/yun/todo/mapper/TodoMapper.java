package com.yun.todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.yun.todo.domain.Todos;

@Mapper
public interface TodoMapper {

    // 목록
    public List<Todos> list();

    // 등록
    public int insert(Todos todos);

    // 조회
    public Todos select(Long no);

    // id로 조회
    public Todos selectById(String id);

    // 수정
    public int update(Todos todos);

    // id로 수정
    public int updateById(Todos todos);

    // 삭제
    public int delete(Long no);

    // id로 삭제
    public int deleteById(String id);



    
}
