package redfive.tools.dotvote.exercise;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public Exercise getExercise(Long id) { return exerciseRepository.getOne(id); }

    public List<Exercise> getExercises() {
        return exerciseRepository.findAll();
    }

    public Exercise createExercise(String name) throws javassist.NotFoundException {
        if (name != null) {
            return exerciseRepository.save(new Exercise(name));
        }
        throw new javassist.NotFoundException("exercise could not be created!");
    }

    public Exercise updateExercise(Long id, String name) throws javassist.NotFoundException {
        Optional<Exercise> optExercise = exerciseRepository.findById(id);

        if (optExercise.isPresent()) {
            Exercise exercise = optExercise.get();
            if (name != null)
                exercise.setName(name);
            exerciseRepository.save(exercise);
            return exercise;
        }
        throw new javassist.NotFoundException("No exercise to update!");
    }

    public Exercise deleteExercise(Long id) {
        Exercise exercise = exerciseRepository.findById(id).orElseThrow(ExerciseNotFoundException::new);
        exerciseRepository.deleteById(id);
        return exercise;
    }
}
