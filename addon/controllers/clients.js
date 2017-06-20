import Ember from 'ember';
import owncloudStatus from 'ember-engine-davros/lib/owncloud';

export default Ember.Controller.extend({
  unauthenticated: owncloudStatus
});
