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
    private final ExerciseService exerciseService;

    public Idea createIdea(String name, Long exerciseId) throws NotFoundException {
        return ideaService.createIdea(name, exerciseId);
    }

    public Idea updateIdea(Long id, String name, Long exerciseId) throws NotFoundException {
        return ideaService.updateIdea(id, name, exerciseId);
    }

  @Transactional
    public Idea deleteIdea(Long id) {
        return ideaService.deleteIdea(id);
    }
}
