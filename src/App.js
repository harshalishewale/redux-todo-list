import { Provider } from 'react-redux';
import './App.css';
import Todo from './components/Todo';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Todo/>
     </Provider>
    </div>
  );
}

export default App;
