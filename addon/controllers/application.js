import Ember from 'ember';

export default Ember.Controller.extend({
  permissions: Ember.inject.service(),

  canEdit: function() {
    return this.get('permissions').can('edit');
  }.property('permissions.list'),

  canSync: function() {
    return this.get('permissions').can('edit');
  }.property('permissions.list')
});
