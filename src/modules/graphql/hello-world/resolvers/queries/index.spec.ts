import { createApolloTestClient } from '@container/apollo/test-hooks';
import { gql } from 'apollo-server';

const TEST = gql`
    query Test {
        test
    }
`;

describe('Hello World Queries', () => {
    it('runs test query successfully', async () => {
        expect.assertions(1);

        const { query } = createApolloTestClient();
        const { data } = await query({ query: TEST });

        expect(data).toEqual({ test: 'Hello World!' });
    });
});
