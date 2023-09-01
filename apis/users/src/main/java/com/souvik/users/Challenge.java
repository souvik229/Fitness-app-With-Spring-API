package com.souvik.users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "challenges")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Challenge {
    @Id
    private String CId;
    private String title;
    private String completedDate;
    private String durations;

    public Challenge(String title, String completedDate, String durations) {
        this.title = title;
        this.completedDate = completedDate;
        this.durations = durations;
    }
}
