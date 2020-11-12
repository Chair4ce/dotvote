package redfive.tools.dotvote.idea;

import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@AllArgsConstructor
public class IdeaQueryResolver implements GraphQLQueryResolver {

    private final IdeaService ideaService;

    public Optional<Idea> idea(Long id, Long exerciseId) { return ideaService.getIdea(id, exerciseId); }

    public List<Idea> ideas(Long exerciseId) { return ideaService.getIdeasByExerciseId(exerciseId); }
}
