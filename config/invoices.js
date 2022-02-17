var starkbank = require('starkbank');

let project = new starkbank.Project({
    environment: process.env.STARKBANK_ENV,
    id: process.env.STARKBANK_ID,
    privateKey: process.env.PK_CONTENT.replace(/\\n/g, '\n')
});

starkbank.user = project;
starkbank.language = process.env.STARKBANK_LANG;
