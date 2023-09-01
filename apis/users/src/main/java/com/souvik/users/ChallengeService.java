package com.souvik.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ChallengeService {
    @Autowired
    private ChallengeRepository challengeRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
    public Challenge createChallenge(String title,String completedDate, String durations, String email)
    {
        Challenge challenge = challengeRepository.insert(new Challenge(title, completedDate, durations));
        mongoTemplate.update(Users.class)
                .matching(Criteria.where("email").is(email))
                .apply(new Update().push("completedChallenges").value(challenge))
                .first();
        return challenge;
    }
}
