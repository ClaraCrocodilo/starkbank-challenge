var cpfCnpj = require('cpf-cnpj-validator');

module.exports = () => {
    if (Math.random() >= 0.5) {
        return cpfCnpj.cpf.generate();
    } else {
        return cpfCnpj.cnpj.generate();
    };

};
