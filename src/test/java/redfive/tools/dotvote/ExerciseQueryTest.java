package redfive.tools.dotvote;

import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTest;
import com.graphql.spring.boot.test.GraphQLTestTemplate;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import redfive.tools.dotvote.exercise.Exercise;
import redfive.tools.dotvote.exercise.ExerciseService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@GraphQLTest
public class ExerciseQueryTest extends BaseIntegrationTest {

    @Autowired
    private GraphQLTestTemplate graphQLTestTemplate;

    @MockBean
    private ExerciseService exerciseServiceMock;

    @Test
    public void getExerciseById() throws Exception {
        Exercise site = new Exercise(1L, "Vision Statement");
        when(exerciseServiceMock.getExercise(any())).thenReturn(site);

        GraphQLResponse response = graphQLTestTemplate.postForResource("graphql/exercise/get-exercise-by-id.graphql");

        assertTrue(response.isOk());

        assertEquals("1", response.get("$.data.exercise.id"));
        assertEquals("Vision Statement", response.get("$.data.exercise.name"));
    }
}
