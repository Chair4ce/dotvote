package redfive.tools.dotvote.vote;

import graphql.kickstart.tools.GraphQLMutationResolver;
import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class VoteMutationResolver implements GraphQLMutationResolver {
    private final VoteService voteService;

    public List<Vote> addVote(String voteType, Long ideaId, Long playerId) throws NotFoundException {
        return voteService.addVote(voteType, ideaId, playerId);
    }

    public Vote deleteVote(Long id) {
        return voteService.deleteVote(id);
    }
}
