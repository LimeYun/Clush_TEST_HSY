package com.yun.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yun.todo.domain.Todos;
import com.yun.todo.mapper.TodoMapper;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public List<Todos> list() {
        return todoMapper.list();
    }

    @Override
    public boolean insert(Todos todos) {
        return todoMapper.insert(todos) > 0;
    }

    @Override
    public Todos select(Long no) {
        return todoMapper.select(no);
    }

    @Override
    public Todos selectById(String id) {
        return todoMapper.selectById(id);
    }

    @Override
    public boolean update(Todos todos) {
        return todoMapper.update(todos) > 0;
    }

    @Override
    public boolean updateById(Todos todos) {
        return todoMapper.updateById(todos) > 0;
    }

    @Override
    public boolean delete(Long no) {
        return todoMapper.delete(no) > 0;
    }

    @Override
    public boolean deleteById(String id) {
        return todoMapper.deleteById(id) > 0;
    }
    
}
