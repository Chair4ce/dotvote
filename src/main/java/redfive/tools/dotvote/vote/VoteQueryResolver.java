package redfive.tools.dotvote.vote;

import graphql.kickstart.tools.GraphQLResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class VoteQueryResolver implements GraphQLResolver<Vote> {

    private final VoteService voteService;

    public List<Vote> votes(Long IdeaId) { return voteService.getVotesByIdeaId(IdeaId); }

}
