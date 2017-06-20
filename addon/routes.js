import buildRoutes from 'ember-engines/routes';

const Router = buildRoutes(function() {
  this.route('file', {path: '/files/*path'});
  this.route('files');
  this.route('home', {path: '/'});
  this.route('clients');
  this.route('publishing');
  this.route('about');
  this.route('not-found', {path: '*path'});
});

export default Router;
