import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Obrigado por usar o Curriculum Generator Project!</h1>
            <p>Todos os currículos aqui apresentados foram devidamente creditados e utilizados sob a licença Creative Commons — Atribuição 4.0 Internacional — CC BY 4.0 .</p>

            <footer>
                <p>Desenvolvedores: Alexandre Leite, Carlos Henrique Ferreira, Christopher Brandão, Giovanni Paes, Lucas Chagas, Paulo Victor</p>
                <p>Disciplina: EEL418-Programação Avançada</p>
            </footer> 
        `;
    }
}
