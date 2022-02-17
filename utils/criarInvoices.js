var starkbank = require('starkbank');
var nomeAleatorio = require('./nomeAleatorio');
var taxIdAleatorio = require('./taxIdAleatorio');
var randomInt = require('./randomInt');

async function criarInvoices(n) {
    let invoiceList = []
    for (let i = 1; i <= n; i++) {
        invoiceList.push(
            {
                amount: randomInt(10, 1000),
                taxId: taxIdAleatorio(),
                name: nomeAleatorio()
            }
        );
    };
    let invoices = await starkbank.invoice.create(invoiceList);
    return invoices;
};

module.exports = criarInvoices;
