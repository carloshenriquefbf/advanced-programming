import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Conclusão");
    }

    async getHtml() {
        return `
            <div id="principal">
				<div class="efeito">
					<div class="container">
			            <h1>Obrigado por usar o Curriculum Generator Project!</h1>
			            <br><br>
			            <p>Todos os currículos aqui apresentados foram devidamente creditados e utilizados sob a licença Creative Commons — Atribuição 4.0 Internacional — CC BY 4.0.</p>
			            <table style="width:100%">
			            <br><br>
			            <tr>
			            <td>

			            <form action="/inicio">
			                <input type="submit" value="Voltar para o início" />
			            </form><br>
			            <form action="/cadastro">
			            <input type="submit" value="Voltar para a página de criação de currículo" />
			            </form>
			            </tr></td></table>
			            <footer>
			                <p style="text-align:left">Desenvolvedores: Alexandre Leite, Carlos Henrique Ferreira, Christopher Brandão, Giovanni Paes, Lucas Chagas, Paulo Victor</p><br>
			                <p style="text-align:left">Disciplina: EEL418-Programação Avançada</p><br>
			            </footer>
		            </div>
				</div>
			</div>
         `;
    }
}
