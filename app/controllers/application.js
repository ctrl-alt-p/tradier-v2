import Ember from 'ember';
export
default Ember.Controller.extend({
    navSections: new Ember.A([{
        route: 'index',
        name: 'Home'
    }, {
        route: 'stocks',
        name: 'Stocks'
    }, {
        route: 'options',
        name: 'Options'
    }, {
        route: 'my-portfolio',
        name: 'My Portfolio'
    }])
});