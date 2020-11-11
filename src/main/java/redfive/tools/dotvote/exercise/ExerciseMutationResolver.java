package redfive.tools.dotvote.exercise;

import graphql.kickstart.tools.GraphQLMutationResolver;
import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ExerciseMutationResolver implements GraphQLMutationResolver {
    private final ExerciseService exerciseService;

    public Exercise createExercise(String name) throws NotFoundException {
        return exerciseService.createExercise(name);
    }

    public Exercise updateExercise(Long id, String name) throws NotFoundException {
        return exerciseService.updateExercise(id, name);
    }

    public Exercise deleteExercise(Long id) {
        return exerciseService.deleteExercise(id);
    }
}
