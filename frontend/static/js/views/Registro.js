import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Registro");
    }

    async getHtml() {
        return `
                <div id="principal">
                <div class="efeito">
                <form action="/auth/register" method="post">
                    <div class="container">
                        <h1>Registro de Usuário</h1>
                        <p>Preencha com seus dados para criar uma conta:</p>
                        <hr>

                        <fieldset class="grupo">

                        <div class="campo">
                            <label for="name"><b>Nome</b></label>
                            <input type="text" placeholder="Digite seu nome" name="name" id="name" required>
                        </div>

                        <div class="campo">
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Digite seu endereço de e-mail" name="email" id="email" required>
                        </div>

                        <div class="campo">
                            <label for="password"><b>Senha</b></label>
                            <input type="password" placeholder="Digite sua senha" name="password" id="password" required>
                        </div>
                        </fieldset>

                        <input type="radio" id="candidato" name="role" value="candidato">
                        <label for="candidato">Sou um candidato</label><br>
                        <input type="radio" id="recrutador" name="role" value="recrutador">
                        <label for="recrutador">Sou um recrutador</label><br>

                        <hr>
                    </div>
                    <br>
                    <button type="submit" class="registerbtn" onclick="showSnackbar()">Registrar</button>
                </form>
                </div>
                <div id="snackbar">Usuário cadastrado com sucesso!</div>
                </div>
                `;
    }
}