package com.souvik.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/Challenges")
public class ChallengeController {
    @Autowired
    private ChallengeService challengeService;

    @PostMapping
    public ResponseEntity<Challenge> challengeResponseEntity(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Challenge>(challengeService.createChallenge(payload.get("title"),payload.get("completedDate"),payload.get("durations"), payload.get("email")), HttpStatus.CREATED);
    }
}
