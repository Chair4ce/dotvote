package redfive.tools.dotvote.vote;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import redfive.tools.dotvote.idea.Idea;

import java.util.List;


@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findAllByIdeaId(Idea id);
}
