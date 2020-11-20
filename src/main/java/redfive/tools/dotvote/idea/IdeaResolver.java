package redfive.tools.dotvote.idea;

import graphql.kickstart.tools.GraphQLResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import redfive.tools.dotvote.vote.Vote;
import redfive.tools.dotvote.vote.VoteRepository;


@Component
@AllArgsConstructor
public class IdeaResolver implements GraphQLResolver<Idea> {

    private final VoteRepository voteRepository;

    public Iterable<Vote> getVotes(Idea idea) {
        return voteRepository.findAllByIdeaId(idea);
    }
}
