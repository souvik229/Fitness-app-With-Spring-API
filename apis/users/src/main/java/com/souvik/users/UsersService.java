package com.souvik.users;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;
    public List<Users> allUsers(){
        return usersRepository.findAll();
    }


    public Optional<Users> SingleUser(String email) {
        return usersRepository.findUsersByemail(email);
    }
}
