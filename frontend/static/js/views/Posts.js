import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Gerar currículo</h1>
            <p>
                Preencha com seus dados:
            </p>
            <form>
                <label for="yname">Name:</label><br>
                <input type="text" id="yname" name="yname" onkeyup="update()"><br>
                <label for="yname">Universidade:</label><br>
                <input type="text" id="yuniversity" name="yuniversity" onkeyup="update()"><br>
                <label for="yname">Curso:</label><br>
                <input type="text" id="ymajor" name="ymajor" onkeyup="update()"><br>
            </form>

            <form style="display" id="form2-pre0" name="form2-pre0" enctype="multipart/form-data" action="https://texlive.net/cgi-bin/latexcgi" method="post" target="pre0ifr">
            <textarea style="display:none" type="text" name="filecontents[]" vairable="yname"></textarea>
                <input type="text" name="filename[]" value="document.tex" style="display:none">
                <input type="text" name="engine" value="pdflatex" style="display:none">
                <input type="text" name="return" value="pdfjs" style="display:none">
                <br>
            <button class="llbutton" onclick="latexcgi()" id="lo-pre0">Gerar currículo</button>
            </form>

                `;
    }
}