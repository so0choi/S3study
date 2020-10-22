const AWS = require('aws-sdk');
AWS.config.loadFromPath('./.config.json');
S3 = new AWS.S3(); 

module.exports.S3 = S3;