package redfive.tools.dotvote.vote;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import redfive.tools.dotvote.idea.Idea;
import redfive.tools.dotvote.idea.IdeaNotFoundException;
import redfive.tools.dotvote.idea.IdeaRepository;
import redfive.tools.dotvote.player.Player;
import redfive.tools.dotvote.player.PlayerNotFoundException;
import redfive.tools.dotvote.player.PlayerRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class VoteService {

    private final VoteRepository voteRepository;
    private final IdeaRepository ideaRepository;
    private final PlayerRepository playerRepository;


    public List<Vote> getVotesByIdeaId(Long id) {
        Idea idea = ideaRepository.findById(id).orElseThrow(IdeaNotFoundException::new);
        return voteRepository.findAllByIdeaId(idea);
    }

    public List<Vote> addVote(String name, Long ideaId, Long playerId) throws javassist.NotFoundException {
        Idea idea = ideaRepository.findById(ideaId).orElseThrow(IdeaNotFoundException::new);
        Player player = playerRepository.findById(playerId).orElseThrow(PlayerNotFoundException::new);
        if (name != null) {
             voteRepository.save(new Vote(name, idea, player));
            return voteRepository.findAllByIdeaId(idea);
        }
        throw new javassist.NotFoundException("Vote could not be added!");
    }

    public Vote deleteVote(Long id) {
        Vote vote = voteRepository.findById(id).orElseThrow(VoteNotFoundException::new);
        voteRepository.delete(vote);
        return vote;
    }}
