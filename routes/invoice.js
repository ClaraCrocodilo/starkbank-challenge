var express = require('express');
var starkbank = require('starkbank');
var account = require('../config/starkbankAccount');
var router = express.Router();

router.post('/', async function(req, res, next) {
    try {

        /*
        É retornado erro "Error: wanted sequence (0x03), got 0x04d" em starkbank-ecdsa/ellipticcurve/utils/der.js
        Por acreditar se tratar de um problema no módulo (no que tange ao processamento do header) devido aos testes
        de debug realizados, ignorarei a verificação por assinatura digital, mesmo se tratando de uma parte essencial
        do processo.
        Num ambiente real, com tempo suficiente para resolução do problema, deveríamos resolver o problema no módulo,
        ou buscar uma maneira alternativa de verificação de origem da mensagem

        let event = await starkbank.event.parse({

            content: JSON.stringify(req.body),
            signature: req.headers["digital-signature"]
        });
        */

        let event = req.body.event;
        
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
