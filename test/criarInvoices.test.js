require('dotenv').config();
require('../config/starkbank');
var criarInvoices = require('../utils/criarInvoices');
const numeroDeInvoices = 11;

test("Valida a criação de invoices", async () => {
    const invoicesGerados = await criarInvoices(numeroDeInvoices);
    expect(invoicesGerados.length).toBe(numeroDeInvoices);
    invoicesGerados.forEach(invoice => {
        expect(invoice).toHaveProperty('id');
        expect(typeof invoice.id === 'string');
    });
});
