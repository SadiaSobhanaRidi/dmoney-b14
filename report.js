const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/44303613-8b34d746-2629-492f-83cd-7a8b12df9433?access_key=${process.env.access_token}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/ in the current working directory.
        } 
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
    