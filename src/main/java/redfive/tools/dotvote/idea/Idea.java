package redfive.tools.dotvote.idea;

import lombok.Data;
import lombok.NoArgsConstructor;
import redfive.tools.dotvote.exercise.Exercise;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "idea")
public class Idea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "exercise_id", nullable = false, updatable = false)
    private Exercise exerciseId;


    public Idea(Long id, String name, Exercise exercise) {
        this.id = id;
        this.name = name;
        this.exerciseId = exercise;
    }

    public Idea(String name, Exercise exercise) {
        this.name = name;
        this.exerciseId = exercise;
    }

    @Override
    public String toString() {
        return "Idea {" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", exercise=" + exerciseId +
                '}';
    }
}
