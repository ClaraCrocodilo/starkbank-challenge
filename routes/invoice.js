var express = require('express');
var starkbank = require('starkbank');
var account = require('../config/starkbankAccount');
var router = express.Router();

router.post('/', async function(req, res, next) {
    try {

        let event = await starkbank.event.parse({
            content: req.body,
            signature: req.headers["digital-signature"]
        });

        if (event.subscription === "invoice" && event.log.type === "credited") {
            let amount = event.log.invoice.amount;
            let fee = event.log.invoice.fee;
            let transfer = await starkbank.transfer.create([
                {
                    amount: amount - fee,
                    bankCode: account.bankCode,
                    branchCode: account.branch,
                    accountNumber: account.account,
                    accountType: account.accountType,
                    taxId: account.taxId,
                    name: account.name
                }
            ]);
        };
            res.sendStatus(200);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    };
});

module.exports = router;
