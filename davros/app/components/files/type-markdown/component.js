import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Component.extend({
  rawContent: 'Loading...',

  didInsertElement: function() {
    fetch(this.get('model.rawPath')).then((response) => {
      return response.text();
    }).then((result) => {
      this.set('rawContent', result);
    });
  }
});
