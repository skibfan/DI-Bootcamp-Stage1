// import './App.css';
import './component/Exercise.css'
import { UserFavoriteAnimals } from './component/UserFavoriteAnimals';
import { Exercise } from './component/Exercise.js';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
        <div>{myelement}</div>
        <h2>React is {sum} times better with JSX</h2>
        <h3>{user.firstName} {user.lastName}</h3>
        {user.favAnimals.map((elem, index) => {
          return <UserFavoriteAnimals key={index} favAnimals={elem}></UserFavoriteAnimals>
        })}
        <Exercise></Exercise>
    </div>
  );
}

export default App;
