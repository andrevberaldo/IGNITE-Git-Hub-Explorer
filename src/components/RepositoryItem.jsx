export function RepositoryItem(props) {
    const {
        name,
        description,
        link
    } = props.repository;

    return (
        <li>
            <strong>{ name }</strong>
            <p>{ description }</p>
            <a href={ link }>Link to the Repo</a>
        </li>
    )
}