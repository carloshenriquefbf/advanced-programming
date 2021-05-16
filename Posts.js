import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="formulario.css" media="">
    <title>Cadastro</title>
</head>
<body>


    <div class="campo">
        <h1 id="titulo">Modelador Auxiliar de Currículos</h1>
        <p id="subtitulo">Insira suas informações pessoais abaixo</p>
  
    </div>

    <form>
        <fieldset class="grupo">
            <div class="campo">
                <label for= "nome"><strong>Nome</strong></label>
                <input type="text" name="nome" id="nome" required>
            </div>

            <div class="campo">
                <label for="sobrenome"><strong>Sobrenome</strong></label>
                <input type="text" name="sobrenome" id="sobrenome" required>
            </div>
        </fieldset>

        <fieldset class="grupo">
            <div class="campo">
                <label for="email"><strong>Email</strong></label>
                <input type="email" name="email" id="email" required>
            </div>

            <div class="campo">
                <label for="phone"><strong>Telefone</strong></label>
                <input type="phone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
            </div>
        </fieldset>    

        <div class="campo">
            <u><h2 id="titulo">Formação Profissional</h2></u>
        </div>

        <div class="campo">
            <label for="formação"><i><strong>Escolaridade</strong></i></label>
            <select> id="formação"
                <option selected disabled value= "">Selecione...</option>
                <option>Ensino Fundamental</option>
                <option>Ensino Médio</option>
                <option>Nível Superior</option>
                <option>Nível Superior (cursando)</option>
                <option>Mestrado</option>
                <option>Doutorado</option>
            </select>
        </div>

        <fieldset class="grupo">
            <div class="campo">
                <label for= "nome"><i><strong>Universidade</strong></i></label>
                <input type="text" name="universidade" id="universidade">
            </div>

            <div class="campo">
                <label for="curso"><i><strong>Curso</strong></i></label>
                <input type="text" name="curso" id="curso">
            </div>
        </fieldset>
        
        <fieldset class="grupo">
            <div id="check">
               
                <label><i><strong>Selecione os idiomas que você possui proficiência:</strong></i></label><br>
               
                <input type="checkbox" id="idioma0" name="idioma0" value="Português">
                <label for="idioma0">Português</label>

                <input type="checkbox" id="idioma1" name="idioma1" value="Inglês">
                <label for="idioma1">Inglês</label>
                
                <input type="checkbox" id="idioma2" name="idioma2" value="Espanhol">
                <label for="idioma2">Espanhol</label>
                <br>
                <input type="checkbox" id="idioma3" name="idioma3" value="Francês">
                <label for="idioma3">Francês</label>
                
                <input type="checkbox" id="idioma4" name="idioma4" value="Alemão">
                <label for="idioma4">Alemão</label>
                
                <input type="checkbox" id="idioma5" name="idioma5" value="Russo">
                <label for="idioma5">Russo</label>
                <br>
                <input type="checkbox" id="idioma6" name="idioma6" value="Mandarim">
                <label for="idioma6">Mandarim</label>
                
                <input type="checkbox" id="idioma7" name="idioma7" value="Japonês">
                <label for="idioma7">Japonês</label>

                <input type="checkbox" id="idioma8" name="idioma8" value="Outro">
                <label for="idioma8">Outro</label>
            </div>
        </fieldset>
        <br>
        <div class="campo">
            <label><i><strong>Conte um pouco mais sobre a sua formação (cite cursos e especializações):</strong></i></label>
            <textarea row="6" style="width: 26em" id="experiencia" name="experiencia"></textarea>
        </div>

        <div class="campo">
            <u><h2 id="titulo">Experiências Anteriores</h2></u>
        </div>

        <fieldset class="grupo">
            <div class="campo">
                <label for= "nome"><i><strong>Empresa</strong></i></label>
                <input type="text" name="empresa" id="empresa">
            </div>

            <div class="campo">
                <label for="cargo"><i><strong>Cargo</strong></i></label>
                <input type="text" name="cargo" id="cargo">
            </div>
        </fieldset>
        
        <fieldset class="grupo"> 
            <div class="campo">
                <label for="data"><i><strong>Data de Entrada</strong></i></label>
                <input id="data" type="date">
            </div>
            
            <div class="campo">
                <label for="data"><i><strong>Data de Saída</strong></i></label>
                <input id="data" type="date">
            </div>
        </fieldset>


        <div class="campo">
            <label><i><strong>Conte um pouco de sua experiência:</strong></i></label>
            <textarea row="6" style="width: 26em" id="experiencia" name="experiencia"></textarea>
        </div>
        <br>
        <fieldset class="grupo">
            <div class="campo">
                <label for= "nome"><i><strong>Empresa</strong></i></label>
                <input type="text" name="empresa" id="empresa">
            </div>

            <div class="campo">
                <label for="cargo"><i><strong>Cargo</strong></i></label>
                <input type="text" name="cargo" id="cargo">
            </div>
        </fieldset>

        <fieldset class="grupo"> 
            <div class="campo">
                <label for="data"><i><strong>Data de Entrada</strong></i></label>
                <input id="data" type="date">
            </div>
            
            <div class="campo">
                <label for="data"><i><strong>Data de Saída</strong></i></label>
                <input id="data" type="date">
            </div>
        </fieldset>

        <div class="campo">
            <label><i><strong>Conte um pouco de sua experiência:</strong></i></label>
            <textarea row="6" style="width: 26em" id="experiencia" name="experiencia"></textarea>
        </div>

        <button class="botao" type="submit">Concluído</button>

    </form> 

</body> 
                `;
    }
}