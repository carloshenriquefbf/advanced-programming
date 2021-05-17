import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <div class="campo">
        <h1 id="titulo">Modelador Auxiliar de Currículos</h1>     
        </div>

        <form>
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

        <form> 
            <div class="campo">
                <u><h2 id="titulo">Dados pessoais</h2></u>
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
                <u><h2 id="titulo">Formação Profissional</h2></u>
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

            <div class="campo">
                <u><h2 id="titulo">Habilidades Técnicas</h2></u>
            </div>

            <fieldset class="grupo">
                <div class="campo">
                    <label for= "nomeHabilidade1"><strong>Habilidade no. 1</strong></label>
                    <input type="text" name="nomeHabilidade1" id="nomeHabilidade1" onkeyup="update()">
                </div>

                <div class="campo">
                    <label for="descricaoHabilidade1"><strong>Descrição da Habilidade</strong></label>
                    <input type="text" name="descricaoHabilidade1" id="descricaoHabilidade1" onkeyup="update()">
                </div>
            </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for= "nomeHabilidade2"><strong>Habilidade no.2 </strong></label>
                    <input type="text" name="nomeHabilidade2" id="nomeHabilidade2" onkeyup="update()">
                </div>

                <div class="campo">
                    <label for="descricaoHabilidade2"><strong>Descrição da Habilidade</strong></label>
                    <input type="text" name="descricaoHabilidade2" id="descricaoHabilidade2" onkeyup="update()">
                </div>
            </fieldset>

            <fieldset class="grupo">
                <div class="campo">
                    <label for= "nomeHabilidade3"><strong>Habilidade no. 3</strong></label>
                    <input type="text" name="nomeHabilidade3" id="nomeHabilidade3" onkeyup="update()">
                </div>

                <div class="campo">
                    <label for="descricaoHabilidade3"><strong>Descrição da Habilidade</strong></label>
                    <input type="text" name="descricaoHabilidade3" id="descricaoHabilidade3" onkeyup="update()">
                </div>
            </fieldset>

            <div class="campo">
                <u><h2 id="titulo">Experiências Anteriores</h2></u>
            </div>

            <fieldset class="grupo">
                <div class="campo">
                    <label for= "empresa"><strong>Empresa</strong></label>
                    <input type="text" name="empresa" id="empresa" onkeyup="update()">
                </div>

                <div class="campo">
                    <label for="localEmprego"><strong>Local</strong></label>
                    <input type="text" name="localEmprego" id="localEmprego" onkeyup="update()">
                </div>
            </fieldset>

            <fieldset class="grupo">
            <div class="campo">
                <label for="cargo"><strong>Cargo</strong></label>
                <input type="text" name="cargo" id="cargo" onkeyup="update()">
            </div>
            <div class="campo">
                <label for= "descricaoAtividade1"><strong>Descrição do Cargo</strong></label>
                <input type="text" name="descricaoAtividade1" id="descricaoAtividade1" onkeyup="update()">
            </div>
            </fieldset>
            
            <fieldset class="grupo"> 
                <div class="campo">
                    <label for="dataentrada"><strong>Data de Entrada</strong></label>
                    <input id="dataentrada" type="date" onkeyup="update()" onchange="update()">
                </div>
                
                <div class="campo">
                    <label for="datasaida"><strong>Data de Saída</strong></label>
                    <input id="datasaida" type="date" onkeyup="update()" onchange="update()">
                </div>
            </fieldset>
            <br>            
    </form> 

    <form style="display" id="form2-pre0" name="form2-pre0" enctype="multipart/form-data" action="https://texlive.net/cgi-bin/latexcgi" method="post" target="pre0ifr">
    <textarea style="display:none" type="text" name="filecontents[]" vairable="yname"></textarea>
        <input type="text" name="filename[]" value="document.tex" style="display:none">
        <input type="text" name="engine" value="pdflatex" style="display:none">
        <input type="text" name="return" value="pdfjs" style="display:none">
        <br>            
    <button class="llbutton" onclick="redirect();" id="lo-pre0">Gerar currículo</button>
    </form>  

</body> 
                `;
    }
}