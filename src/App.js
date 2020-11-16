import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

//function App() {
class App extends Component{
constructor() {
  super();

  this.state = {
    string: 'Hello world',
    searchField:'',
    monsters: [
      // {
      //   name: 'Dracula',
      //   id:'m1'
      // },
      // {
      //   name: 'Vador',
      //   id:'m2'
      // },
      // {
      //   name: 'Franckenstein',
      //   id:'m3'
      // },
      // {
      //   name: 'Stitch',
      //   id:'m4'
      // },
      // {
      //   name: 'Zombie',
      //   id:'m5'
      // }
    ]
  }
}

componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));
}

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
    // console.log(e.target.value);
  };

  render (){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <h1>Monsters rolodex</h1>
          {/* <SearchBox placeholder='Search' handleChange={e => this.onSearchChange(e) } /> */} 
          {/* permet de maintenir l'écriture classique de la methode */}
          <SearchBox placeholder='Search' handleChange={this.onSearchChange} />
          <CardList monsters={filteredMonsters} name="hello" />
      </div>
    );
  }
}

export default App;
