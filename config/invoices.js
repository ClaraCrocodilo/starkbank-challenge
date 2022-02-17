var starkbank = require('starkbank');
var nomeAleatorio = require('./nomeAleatorio');
var taxIdAleatorio = require('./taxIdAleatorio');

let project = new starkbank.Project({
    environment: process.env.STARKBANK_ENV,
    id: process.env.STARKBANK_ID,
    privateKey: process.env.PK_CONTENT.replace(/\\n/g, '\n')
});

starkbank.user = project;
starkbank.language = process.env.STARKBANK_LANG;

async function criarInvoices(n) {
    invoiceList = []
    for (let i = 1; i <= n; i++) {
        invoiceList.push(
            {
                amount: Math.floor(Math.random() * (20, 1000) + 10),
                taxId: taxIdAleatorio(),
                name: nomeAleatorio()
            }
        );
    };
    let invoices = await starkbank.invoice.create(invoiceList);
    console.log("INVOICES GERADAS:");
    console.log(invoices);
};

// O intervalo de geração das invoices deve ser de 3 horas, com a última geração ocorrendo em 3*8 = 24h
timeout = 1000*60*60*3;
for (let i = 0; i <= 8; i++) {
    setTimeout(criarInvoices, i*timeout, Math.floor(Math.random() * (13 - 8) + 8));
}
