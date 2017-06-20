import Ember from 'ember';
import owncloudStatus from 'davros-engine/lib/owncloud';

export default Ember.Controller.extend({
  unauthenticated: owncloudStatus
});
