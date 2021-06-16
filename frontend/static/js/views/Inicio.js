import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Início");
    }

    async getHtml() {
        return `
            <div id="principal">
				<div class="efeito">
					<div class="container">
						<h1>Seja bem vindo ao Curriculum Generator Project!</h1>
						<p>
	                		Criar o seu currículo nunca foi tão fácil. Você só precisa preencher o formulário com os seus dados, escolher um dos nossos templates e terá o seu novo currículo em mãos.
	            		</p>
	           			<br><br>
	           			<h1>Como funciona?</h1>
	           			<h2>Para candidatos:<h2>
	           			<p>
	                		Você pode escolher entre criar seu currículo anonimamente ou se registrar como usuário e ter seu currículo visto por recrutadores da sua área! Após o registro (ou se você decidiu não se registrar) os seus dados servirão de entrada no template escolhido como um documento LaTeX. Eles são enviados em conjunto para a API do servidor TexLive.net que irá gerar o seu currículo personalizado no formato pdf.
			            </p>
						<h2>Para recrutadores:<h2>
						<p>
							Se você é um recrutador, é necessário se registrar como usuário. Durante o cadastro você nos informará a área de recrutamento e, quando um candidato da área se cadastrar, você será avisado.
			            </p>
						<br>
				        <h1>E quanto custa?</h1>
						<h2>Para candidatos:<h2>
			            <p>
			                Nada! Todos os nossos templates são grátis. Porém, o envio do seu currículo aos recrutadores terá limites de acordo com o plano escolhido.
			            </p>
			            <br>
						<h2>Para recrutadores:<h2>
						<p>
							Nada também! Todos os nossos serviços são grátis. Porém, a quantidade de currículos recebidos será de acordo com o plano escolhido.
			            </p>

			            <table style="width:100%">
			            <tr>
			            <td>

		            <form action="/register">
		                <input type="submit" value="Registrar" />
		            </form>
					<form action="/cadastro">
					<input type="submit" value="Criar currículo" />
					</form>
		            </tr></td></table>

					</div>
				</div>
			</div>
        `;
    }
}