package redfive.tools.dotvote.player;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PlayerService {

    private final PlayerRepository playerRepository;

    public Player getPlayer(Long id) {
        return playerRepository.getOne(id);
    }

    public Player createPlayer(String name) throws javassist.NotFoundException {
        if (name != null) {
            return playerRepository.save(new Player(name));
        }
        throw new javassist.NotFoundException("player could not be created!");
    }

}
