var cpfCnpj = require('cpf-cnpj-validator');

module.exports = () => {
    return (Math.random() >= 0.5 ? cpfCnpj.cpf.generate() : cpfCnpj.cnpj.generate());
};
