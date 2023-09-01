package com.souvik.users;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChallengeRepository extends MongoRepository<Challenge, ObjectId> {
}
