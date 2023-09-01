package com.souvik.users;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
public class UsersController {
    @Autowired
    private UsersService usersService;
    @GetMapping
    public ResponseEntity<List<Users>> getAllUsers() {
        return new ResponseEntity<List<Users>>(usersService.allUsers(), HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public ResponseEntity<Optional<Users>> getSingleUser(@PathVariable String email) {
        return new ResponseEntity<Optional<Users>>(usersService.SingleUser(email), HttpStatus.OK);
    }
}
