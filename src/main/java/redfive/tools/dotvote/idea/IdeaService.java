package redfive.tools.dotvote.idea;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import redfive.tools.dotvote.exercise.ExerciseRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class IdeaService {

    private final IdeaRepository ideaRepository;

    public Optional<Idea> getIdea(Long id, Long exerciseId) {
        return ideaRepository.findByIdAndExerciseId(id, exerciseId);
    }

    public List<Idea> getIdeasByExerciseId(Long exerciseId) {
        return ideaRepository.findAllByExerciseId(exerciseId);
    }

    public Idea createIdea(String name, Long exerciseId) throws javassist.NotFoundException {
        if (name != null) {
            return ideaRepository.save(new Idea(name, exerciseId));
        }
        throw new javassist.NotFoundException("idea could not be created!");
    }

    public Idea updateIdea(Long id, String name, Long exerciseId) throws javassist.NotFoundException {
        Optional<Idea> optIdea = ideaRepository.findByIdAndExerciseId(id, exerciseId);

        if (optIdea.isPresent()) {
            Idea idea = optIdea.get();
            if (name != null) {
                idea.setName(name);
                idea.setExerciseId(exerciseId);
                ideaRepository.save(idea);
            }
            return idea;
        }
        throw new javassist.NotFoundException("No idea to update!");
    }

    public Idea deleteIdea(Long id) {
        Idea idea = ideaRepository.findById(id).orElseThrow(IdeaNotFoundException::new);
        ideaRepository.deleteById(id);
        return idea;
    }
}
