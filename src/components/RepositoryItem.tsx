interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{ props.repository.name }</strong>
            <p>{ props.repository.description || 'No Description' }</p>
            <a href={ props.repository.html_url }>Link to the Repo</a>
        </li>
    )
}