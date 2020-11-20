package redfive.tools.dotvote.idea;

import graphql.kickstart.tools.GraphQLMutationResolver;
import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import redfive.tools.dotvote.exercise.ExerciseService;


@Component
@AllArgsConstructor
public class IdeaMutationResolver implements GraphQLMutationResolver {
    private final IdeaService ideaService;

    public Idea createIdea(String name, Long exerciseId) {
        return ideaService.createIdea(name, exerciseId);
    }

  @Transactional
    public Idea deleteIdea(Long id) {
        return ideaService.deleteIdea(id);
    }
}
