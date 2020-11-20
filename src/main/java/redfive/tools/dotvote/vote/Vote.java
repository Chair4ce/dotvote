package redfive.tools.dotvote.vote;

import lombok.Data;
import lombok.NoArgsConstructor;
import redfive.tools.dotvote.idea.Idea;
import redfive.tools.dotvote.player.Player;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(
        name = "vote",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"idea_id", "player_id"})}
)
public class Vote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "vote_type", nullable = false)
    private String voteType;

    @ManyToOne
    @JoinColumn(name = "idea_id", nullable = false)
    private Idea ideaId;

    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    private Player playerId;

    public Vote(String voteType, Idea idea, Player player) {
        this.voteType = voteType;
        this.ideaId = idea;
        this.playerId = player;
    }

    public Vote(Long id, String voteType, Idea idea, Player player) {
        this.id = id;
        this.voteType = voteType;
        this.ideaId = idea;
        this.playerId = player;
    }

    @Override
    public String toString() {
        return "Vote {" +
                "id=" + id +
                ", voteType='" + voteType + '\'' +
                ", ideaId=" + ideaId +
                ", playerId=" + playerId +
                '}';
    }
}
