package com.yun.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yun.todo.domain.Todos;
import com.yun.todo.service.TodoService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/todos")
@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;
    
    @GetMapping()
    public ResponseEntity<?> getAllTodo() {
        try {
            List<Todos> todoList = todoService.list();
            return new ResponseEntity<>(todoList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOneTodo(@PathVariable String id) {
        try {
            Todos todos = todoService.selectById(id);
            return new ResponseEntity<>(todos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> createTodo(@RequestBody Todos todos) {
        try {
            boolean result = todoService.insert(todos);
            if (result) {
                return new ResponseEntity<>("일정 등록 성공", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("일정 등록 실패", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> updateTodo(@RequestBody Todos todos) {
        try {
            boolean result = todoService.update(todos);
            if (result) {
                return new ResponseEntity<>("일정 수정 성공", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("일정 수정 실패", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroyTodo(@PathVariable String id) {
        try {
            boolean result = todoService.deleteById(id);
            if (result) {
                return new ResponseEntity<>("일정 삭제 성공", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("일정 삭제 실패", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
