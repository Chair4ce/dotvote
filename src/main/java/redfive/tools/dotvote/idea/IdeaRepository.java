package redfive.tools.dotvote.idea;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IdeaRepository extends JpaRepository<Idea, Long> {

    Optional<Idea> findByIdAndExerciseId(Long aLong, Long bLong);
    List<Idea> findAllByExerciseId(Long aLong);

    void deleteByIdAndExerciseId(Long aLong, Long bLong);

}
