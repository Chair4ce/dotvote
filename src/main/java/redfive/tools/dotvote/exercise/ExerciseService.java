package redfive.tools.dotvote.exercise;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public Exercise getExercise(Long id)  { return exerciseRepository.getOne(id); }

    public List<Exercise> getExercises() {
        return exerciseRepository.findAll();
    }

    public Exercise createExercise(String name) throws javassist.NotFoundException {
        if(name != null) {
            return exerciseRepository.save(new Exercise(name));
        }
        throw new javassist.NotFoundException("exercise could not be created!");
    }
}
