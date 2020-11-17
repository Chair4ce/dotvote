package redfive.tools.dotvote.player;

import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PlayerQueryResolver implements GraphQLQueryResolver {

    private final PlayerService playerService;

    public Player player(Long id) { return playerService.getPlayer(id); }

}
