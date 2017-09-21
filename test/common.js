global.chai = require('chai');
global.chaiHttp = require('chai-http');
global.expect = require("chai").expect;
global.server = require('../bin/www');

global.chai.use(chaiHttp);