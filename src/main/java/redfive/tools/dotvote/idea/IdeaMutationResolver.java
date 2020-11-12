package redfive.tools.dotvote.idea;

import graphql.kickstart.tools.GraphQLMutationResolver;
import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class IdeaMutationResolver implements GraphQLMutationResolver {
    private final IdeaService ideaService;

    public Idea createIdea(String name, Long exerciseId) throws NotFoundException {
        return ideaService.createIdea(name, exerciseId);
    }

    public Idea updateIdea(Long id, String name, Long exerciseId) throws NotFoundException {
        return ideaService.updateIdea(id, name, exerciseId);
    }

    public Idea deleteIdea(Long id, Long exerciseId) {
        return ideaService.deleteIdea(id, exerciseId);
    }
}
