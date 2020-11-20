package redfive.tools.dotvote.idea;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import redfive.tools.dotvote.exercise.Exercise;

import java.util.List;
import java.util.Optional;

@Repository
public interface IdeaRepository extends JpaRepository<Idea, Long> {

    Optional<Idea> findByIdAndExerciseId(Long aLong, Long bLong);
    List<Idea> findAllByExerciseId(Exercise exerciseId);

    void deleteByIdAndExerciseId(Long aLong, Long bLong);

}
