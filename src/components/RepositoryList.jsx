import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

export function RepositoryList() {
    const [repos, setRepos] = useState([]);
    
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
                    repos.map(repo => <RepositoryItem key={repo.id} repository={repo}/>)
                }                
            </ul>
        </section>
    );
}