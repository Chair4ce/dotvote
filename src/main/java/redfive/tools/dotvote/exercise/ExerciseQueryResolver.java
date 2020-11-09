package redfive.tools.dotvote.exercise;

import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class ExerciseQueryResolver implements GraphQLQueryResolver {

    private final ExerciseService exerciseService;

    public Exercise getExercise(Long id) { return exerciseService.getExercise(id); }

    public List<Exercise> exercises() { return exerciseService.getExercises(); }
 }
