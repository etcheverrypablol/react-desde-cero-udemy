import CommentContainer from './components/CommentContainer';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className='container mt-5'>
      <h1>PROPs project</h1>
      <Greeting name='Pablo' age='30' />
      <hr />
      <h3>Comments</h3>
      <CommentContainer
        urlImage='https://picsum.photos/100'
        name='Pablo Etcheverry'
        text='Comment'
      />
      <CommentContainer
        urlImage='https://picsum.photos/200'
        name='Gustavo Etcheverry'
        text='Comment'
      />
      <CommentContainer
        urlImage='https://picsum.photos/300'
        name='Carlos Etcheverry'
        text='Comment'
      />
    </div>
  );
}

export default App;
