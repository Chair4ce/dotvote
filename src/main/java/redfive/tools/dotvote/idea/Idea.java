package redfive.tools.dotvote.idea;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "idea")
public class Idea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "exercise_id", nullable = false)
    private Long exerciseId;

    public Idea(Long id, String name, Long exerciseId) {
        this.id = id;
        this.name = name;
        this.exerciseId = exerciseId;
    }

    public Idea(String name, Long exerciseId) {
        this.name = name;
        this.exerciseId = exerciseId;
    }
}
