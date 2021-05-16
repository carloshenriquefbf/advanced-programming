import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Seja bem vindo, meu caro desempregado!</h1>
            <p>
                Versão atual sujeita a futuras alterações
            </p>
            <form action="/posts">
                <input type="submit" value="Começar" />
            </form>

        `;
    }
}