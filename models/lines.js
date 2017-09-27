const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./data/lines.json');
const lines = low(adapter);

module.exports = lines;
