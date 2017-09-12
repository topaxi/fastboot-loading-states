import Ember from 'ember'

export default Ember.Route.extend({
  thing: Ember.inject.service(),

  beforeModel() {
    this.set('thing.value', 'thing on index')
  },

  model() {
    return new Ember.RSVP.Promise(resolve => {
      setTimeout(resolve.bind(null, 'It works!'), 500)
    })
  }
})
