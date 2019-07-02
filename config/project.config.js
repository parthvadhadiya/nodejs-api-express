'use strict';

const servicePort = 5252,
    domain = `localhost`,
    apiRoot = `http://${domain}:${servicePort}`;

const config = {
    "servicePort": servicePort
};
module.exports = config;