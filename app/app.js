import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

// The reason for this hack is that we don't know in advance (during asset compilation) where the redirect URI should go to.
// We could have simply hard-coded the expected website URI, but then it would make it harder to test, so we take this approach.
config.torii.providers['tradier-oauth2'].redirectUri = window.location.origin;

export
default App;