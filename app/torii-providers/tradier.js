import TradierOauth2Provider from 'torii/providers/tradier-oauth2';

export
default TradierOauth2Provider.extend({
    fetch(data) {
        return data;
    }
});