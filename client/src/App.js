import logo from './logo.svg';
import './App.css';
import {gql, useQuery} from '@apollo/client'

const query = gql`
query GetTodosWithUser {

getTodos{
  id
  title
  completed
  user {
  id
  name
  }
}
}
`;

function App() {
  const {data , loading} = useQuery(query)




if (loading) return <p>Loading...</p>

  return <div className='App'> 
  
<table>
  <tbody>
    {
      data.getTodos.map(todo => <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>{todo?.user?.name}</td>
        {/* <td>{todo.completed ? 'Completed' : 'Not Completed'}</td> */}
      </tr> )
    }
  </tbody>
</table>
  
  </div>
}

export default App;
