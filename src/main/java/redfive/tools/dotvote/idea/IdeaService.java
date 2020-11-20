package redfive.tools.dotvote.idea;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import redfive.tools.dotvote.exercise.Exercise;
import redfive.tools.dotvote.exercise.ExerciseNotFoundException;
import redfive.tools.dotvote.exercise.ExerciseRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class IdeaService {

    private final IdeaRepository ideaRepository;
    private final ExerciseRepository exerciseRepository;

    public Optional<Idea> getIdea(Long id) {
        return ideaRepository.findById(id);
    }

    public List<Idea> getIdeasByExerciseId(Long exerciseId) {
        Exercise exercise = exerciseRepository.findById(exerciseId).orElseThrow(ExerciseNotFoundException::new);

        return ideaRepository.findAllByExerciseId(exercise);
    }

    public Idea createIdea(String name, Long exerciseId) {
        Exercise exercise = exerciseRepository.findById(exerciseId).orElseThrow(ExerciseNotFoundException::new);

        if (name != null) {
            return ideaRepository.save(new Idea(name, exercise));
        }
        return null;
    }


    public Idea deleteIdea(Long id) {
        Idea idea = ideaRepository.findById(id).orElseThrow(IdeaNotFoundException::new);
        ideaRepository.deleteById(id);
        return idea;
    }
}
