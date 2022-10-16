import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';
import { Counter } from './components/Counter';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}