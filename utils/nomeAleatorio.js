var nomes = [
    "Carlos Eduardo Monteiro",
    "Isis Costa",
    "Raul Cardoso",
    "Nicolas Melo",
    "Maria Clara Cardoso",
    "Luiz Felipe Costa",
    "Catarina Monteiro",
    "Sofia Oliveira",
    "Eloah Jesus",
    "Lucas Vieira",
    "Lavínia Rodrigues",
    "Stephany Dias",
    "Clarice Campos",
    "Esther Cunha",
    "Luigi Nascimento",
    "Yuri Freitas",
    "Bruna Costa",
    "Emilly Cavalcanti",
    "Maria Sophia da Rocha",
    "Eduarda Peixoto",
    "Pedro Pereira",
    "Srta. Maria Vitória da Rosa",
    "Diego Costa",
    "Fernando Lopes",
    "Isis Oliveira",
    "João Pedro Duarte",
    "Alexia da Costa",
    "Enzo Oliveira",
    "Ana Beatriz da Cunha",
    "Sarah da Cruz",
    "Srta. Ana Julia Pinto",
    "Luana Viana",
    "Camila Farias",
    "Nicolas Cunha",
    "Heloísa Gonçalves",
    "Yago Dias",
    "Juan Novaes",
    "Juliana Ramos",
    "Carolina da Mota",
    "Clara Nascimento",
    "Srta. Pietra Duarte",
    "Lavínia Lima",
    "Vitor da Conceição",
    "Luigi Fogaça",
    "Lucas Gabriel Santos",
    "Elisa Costa",
    "Gabrielly Farias",
    "Breno Porto",
    "Camila Novaes",
    "Davi Lucca das Neves",
    "Lucca Moreira",
    "Luiz Fernando da Rosa",
    "Gabrielly Castro",
    "Davi Lucas Azevedo",
    "Heitor Gonçalves",
    "Sarah das Neves",
    "Otávio Aragão",
    "João Miguel Ramos",
    "Juan Nogueira",
    "Lucas Gabriel Costa",
    "Leonardo Cardoso",
    "Mirella Castro",
    "Catarina Farias",
    "Gustavo Pires",
    "Luiz Miguel Aragão",
    "Benjamin Rezende",
    "Vitor Gabriel Carvalho",
    "Ryan Monteiro",
    "Ana Luiza Sales",
    "Ana Sophia da Rocha",
    "Luiz Fernando Fogaça",
    "Maitê Souza",
    "Letícia Fogaça",
    "Lara Duarte",
    "Cauã da Cruz",
    "Luiz Otávio da Costa",
    "Lucas Melo",
    "Ana Luiza Lima",
    "Bernardo Aragão",
    "Isis Gomes",
    "Ana Beatriz Pinto",
    "Luiz Gustavo Nascimento",
    "Rebeca Ribeiro",
    "Srta. Gabriela Peixoto",
    "Bárbara Ramos",
    "Anthony da Rocha",
    "Kevin Dias",
    "Gustavo Fernandes",
    "Vitória Viana",
    "Ana Clara Nogueira",
    "Benjamin Pires",
    "Emanuel Cardoso",
    "Miguel Rodrigues",
    "Letícia Cavalcanti",
    "Maitê Pinto",
    "Carlos Eduardo da Rosa",
    "Vitor Pires",
    "Luiz Felipe das Neves",
    "Lara Silveira",
    "Ana Sophia Moura"
]

module.exports = () => {
    return nomes[Math.floor(Math.random()*nomes.length)];
};