import React from 'react';
import Header from './components/Header/Header';
import ContactList from './components/ContactList/ContactList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="ui main text container">
          <ContactList />
        </main>
      </div>
    );
  }
}

export default App;