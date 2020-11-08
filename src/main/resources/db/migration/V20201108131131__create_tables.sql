CREATE TABLE app_visits
(
    id           INT(11)     NOT NULL AUTO_INCREMENT,
    time_visited VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE exercise
(
    id   INT(11)     NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY unique_exercise_name (name)
);

CREATE TABLE idea
(
    id   INT(11)     NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    exercise_id INT(11) DEFAULT NULL,
    PRIMARY KEY (id),
    KEY exercise_id (exercise_id),
    CONSTRAINT exercise_ibfk_1 FOREIGN KEY (exercise_id) REFERENCES exercise (id),
    UNIQUE KEY unique_idea_name (name)
);

CREATE TABLE player
(
    id   INT(11)     NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY unique_player_name (name)
);

CREATE TABLE vote
(
    id      INT(11)     NOT NULL AUTO_INCREMENT,
    vote_type    VARCHAR(64) NOT NULL,
    idea_id INT(11) DEFAULT NULL,
    player_id INT(11) DEFAULT NULL,
    PRIMARY KEY (id),
    KEY player_id (player_id),
    KEY idea_id (idea_id),
    CONSTRAINT idea_ibfk_1 FOREIGN KEY (idea_id) REFERENCES idea (id),
    CONSTRAINT vote_ibfk_1 FOREIGN KEY (player_id) REFERENCES player (id)
);
