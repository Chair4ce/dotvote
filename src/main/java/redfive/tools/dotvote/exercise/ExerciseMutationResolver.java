package redfive.tools.dotvote.exercise;

import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ExerciseMutationResolver implements GraphQLMutationResolver {
    private final ExerciseService exerciseService;

    public Exercise createExercise(String name) throws javassist.NotFoundException {
        return exerciseService.createExercise(name);
    }
}
