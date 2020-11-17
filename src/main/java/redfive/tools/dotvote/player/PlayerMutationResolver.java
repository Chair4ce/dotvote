package redfive.tools.dotvote.player;

import graphql.kickstart.tools.GraphQLMutationResolver;
import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PlayerMutationResolver implements GraphQLMutationResolver {
    private final PlayerService playerService;

    public Player playerLogin(String name) throws NotFoundException {
        return playerService.createPlayer(name);
    }
}
