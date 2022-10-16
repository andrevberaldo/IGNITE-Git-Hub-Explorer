import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repos, setRepos] = useState<Repository[]>([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/andrevberaldo/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])


    return (
        <section className="repository-list">
            <h1>Repositories List</h1>
            <ul>
                {
                    repos.map(repo => <RepositoryItem repository={repo} key={repo.name} />)
                }                
            </ul>
        </section>
    );
}