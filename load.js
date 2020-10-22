const s3 = require('./aws').S3;

async function listing(res) {
    try {
        const objects = {};
        const data = await s3.listObjects({Bucket : BUCKET_NAME}).promise()
        data['Contents'].forEach((object) => {
        let [type, name] = object.Key.split('/');
        type = type[0].toUpperCase() + type.slice(1);
        if (objects.hasOwnProperty(type)){
            objects[type].push(name);
        }
        else {
            objects[type] = [name];
        }
        });
        return objects;
        }
    catch (err) {
        console.log('ERROR', err);
    }
};

module.exports.listing = listing;