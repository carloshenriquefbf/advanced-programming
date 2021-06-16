import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Criar currículo");
    }

    async getHtml() {
        return `
        	<div id="principal">
				<div class="efeito">
					<div class="container">
				        <div class="campo">
				            <h1 id="titulo">Modelador Auxiliar de Currículos</h1>
				        </div>

				        <form onload="update()">
				        <table style="width:100%">
				        <tr>
				            <td><figure>
				            <img src="images/firstTemplate.png"
				                width="300" height="400">
				            </figure>
				            <input type="radio" id="firstTemplate" name="template" value="firstTemplate" onclick="whichTemplate()" checked>
				            <label for="firstTemplate">Template no. 1</label><br></td>

				            <td><figure>
				            <img src="images/secondTemplate.png"
				                width="300" height="400">
				            </figure>
				            <input type="radio" id="secondTemplate" name="template" value="secondTemplate" onclick="whichTemplate()">
				            <label for="secondTemplate">Template no. 2</label></td>

				            <td><figure>
				            <img src="images/thirdTemplate.png"
				                width="300" height="400">
				            </figure>
				            <input type="radio" id="thirdTemplate" name="template" value="thirdTemplate" onclick="whichTemplate()">
				            <label for="thirdTemplate">Template no. 3</label>   </td>
				        </tr>
				        </table>
				        </form>
				        <input type="text" id="templateField" style="display:none" value="firstTemplate">
				        <br>
				        <form>
				            <div class="campo">
				                <u><h1 id="titulo">Dados pessoais</h1></u>
				            </div>

				            <fieldset class="grupo">

				                <div class="campo">
				                    <label for= "nomePessoa"><strong>Nome Completo</strong></label>
				                    <input type="text" name="nomePessoa" id="nomePessoa" required onkeyup="update()">
				                </div>

				                <div class="campo">
				                    <label for="email"><strong>Email</strong></label>
				                    <input type="email" name="email" id="email" required onkeyup="update()">
				                </div>

				                <div class="campo">
				                    <label for="phone"><strong>Telefone</strong></label>
				                    <input type="phone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onkeyup="update()">
				                </div>

				            </fieldset>

				            <div class="campo">
				                <u><h1 id="titulo">Formação Profissional</h1></u>
				            </div>

				            <fieldset class="grupo">
				                <div class="campo">
				                    <label for= "universidade"><strong>Universidade</strong></label>
				                    <input type="text" name="universidade" id="universidade" onkeyup="update()">
				                </div>

				                <div class="campo">
				                    <label for="curso"><strong>Curso</strong></label>
				                    <input type="text" name="curso" id="curso" onkeyup="update()">
				                </div>

				                <div class="campo">
				                    <label for="dataformatura"><strong>Previsão de Formatura</strong></label>
				                    <input id="dataformatura" type="date" onkeyup="update()" onchange="update()">
				                </div>
				            </fieldset>

				            <form>
					            <div class="campo" id="Skill">
				                    <u><h1>Habilidades Técnicas</h1></u>
				                </div>

						        <button class="llbutton" onclick="addChild('Skill');" id="lo-pre2">Adicionar habilidade</button>
								<button class="llbutton" onclick="rmChild('Skill');" id="lo-pre4">Remover habilidade</button>

						        <div class="campo" id="Experience">
						            <br>
						            <u><h1>Experiências Anteriores</h1></u>
						        </div>

						        <button class="llbutton" onclick="addChild('Experience');" id="lo-pre1">Adicionar experiência</button>
								<button class="llbutton" onclick="rmChild('Experience');" id="lo-pre3">Remover experiência</button>
					        </form>
				            <br>
				        </form>

				        <form style="display" id="form2-pre0" name="form2-pre0" enctype="multipart/form-data" action="https://texlive.net/cgi-bin/latexcgi" method="post" target="pre0ifr">
				        <textarea type="text" style="display:none" name="filecontents[]" vairable="yname"></textarea>
				            <input type="text" name="filename[]" value="document.tex" style="display:none">
				            <input type="text" name="engine" value="pdflatex" style="display:none">
				            <input type="text" name="return" value="pdfjs" style="display:none">
				            <br>
				        <button class="llbutton" onclick="redirect();" id="lo-pre0">Gerar currículo</button>
				        </form>
					</div>
				</div>
			</div>
                `;
    }
}