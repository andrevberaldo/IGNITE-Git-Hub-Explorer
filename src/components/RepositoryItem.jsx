export function RepositoryItem(props) {
    const {
        name,
        description,
        html_url
    } = props.repository;

    console.log(props.repository)

    return (
        <li>
            <strong>{ name }</strong>
            <p>{ description || 'No Description' }</p>
            <a href={ html_url }>Link to the Repo</a>
        </li>
    )
}