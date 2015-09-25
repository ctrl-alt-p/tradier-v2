import Ember from 'ember';
export
default Ember.Controller.extend({
    navSections: new Ember.A([{
        route: 'index',
        name: 'Home'
    }])
});