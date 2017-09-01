import React, { Component } from 'react';

import EditHero from './EditHero';
import Hero from './Hero';

import api from '../api';

class Heroes extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      creatingHero: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.get().then(json => this.setState({ heroes: json }));
  }

  handleSelect(hero) {
    this.setState({ selectedHero: hero });
  }

  handleDelete(event, hero) {
    event.stopPropagation();

    api.destroy(hero).then(() => {
      let heroes = this.state.heroes;
      heroes = heroes.filter(h => h !== hero);
      this.setState({ heroes: heroes });

      if (this.selectedHero === hero) {
        this.setState({ selectedHero: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingHero: true,
      selectedHero: { id: '', name: '', saying: '' }
    });
  }

  handleCancel() {
    this.setState({ addingHero: false, selectedHero: null });
  }

  handleSave() {
    let heroes = this.state.heroes;

    if (this.state.addingHero) {
      api
        .create(this.state.selectedHero)
        .then(result => {
          console.log('Successfully created!');

          heroes.push(this.state.selectedHero);
          this.setState({
            heroes: heroes,
            selectedHero: null,
            addingHero: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedHero)
        .then(() => {
          this.setState({ selectedHero: null });
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedHero = this.state.selectedHero;
    selectedHero[event.target.name] = event.target.value;
    this.setState({ selectedHero: selectedHero });
  }

  render() {
    return (
      <div>
        <ul className="heroes">
          {this.state.heroes.map(hero => {
            return (
              <Hero
                key={hero.id}
                hero={hero}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                selectedHero={this.state.selectedHero}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New Hero</button>
          <EditHero
            addingHero={this.state.addingHero}
            onChange={this.handleOnChange}
            selectedHero={this.state.selectedHero}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default Heroes;
