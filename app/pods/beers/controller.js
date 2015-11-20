import Ember from 'ember';

const { Controller, computed, set, get } = Ember;

export default Controller.extend({
  beers: computed.alias('model'),

  addingNewBeer: false,

  newBeer: {},

  actions: {
    subtractBeer(beer) {
      beer.decrementProperty('count');
      beer.save();
    },

    addBeer(beer) {
      beer.incrementProperty('count');
      beer.save();
    },

    addNewBeer() {
      this.toggleProperty('addingNewBeer');
    },

    save() {
      let newBeer = this.store.createRecord('beer', get(this, 'newBeer'));

      newBeer.save();
    }
  }
});
