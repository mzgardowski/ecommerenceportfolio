import HomePage from './Pages/HomePage/HomePage';
import { useGetPokemonByNameQuery } from './api/request/fetchAll';

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  console.log('data', data, 'error', error, 'isLoading', isLoading);
  return (
    <div className='App'>
      <HomePage />
    </div>
  );
}

export default App;
