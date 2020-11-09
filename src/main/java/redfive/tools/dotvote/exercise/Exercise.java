package redfive.tools.dotvote.exercise;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "exercise")
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    public Exercise(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Exercise(String name) { this.name = name; }

}
