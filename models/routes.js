const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./data/routes.json');
const routes = low(adapter);

module.exports = routes;
