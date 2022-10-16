import { faker } from '@faker-js/faker';
import { RepositoryItem } from './RepositoryItem';

export function RepositoryList() {

    const repository = {
        name: faker.word.noun(),
        description: faker.word.noun(),
        link: faker.internet.url()       
    }

    return (
        <section className="repository-list">
            <h1>Repositories List</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}