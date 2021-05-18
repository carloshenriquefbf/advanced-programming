function add_skill() {
    let whichTemplate = document.getElementById("templateField").value;
    var skill_string = "";

    if(`${window["nomeHabilidade0"]}` !== 'undefined') {
            i = 0;

            if (whichTemplate=='firstTemplate'){
                    skill_string += `
                    %%%%%%%%%%%%%%%%%%%%%%%%%%%% HABILIDADES TÉCNICAS  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

                    \\begin{center}
                        {\\noindent \\bfseries Habilidades Técnicas}
                    \\end{center}

                    \\vspace{8pt} % Gap between title and text

                    \\vspace{6pt}
                    \\begin{itemize} \\itemsep -2pt % Reduce space between items
                    `

                    while(`${window["nomeHabilidade"+[i]]}` !== 'undefined') {
                            skill_string += `
                            \\item ${window["nomeHabilidade"+[i]].value} : ${window["descricaoHabilidade"+[i]].value}
                            `
                            i++;
                    }
                    skill_string += `
                    \\end{itemize}
                    `
            }

            if (whichTemplate=='secondTemplate'){
                    skill_string += `
                    % --- Section: Technical skills ---
                    \\begin{SectionTable}{\\headingfont HABILIDADES TÉCNICAS}
                    `

                    while(`${window["nomeHabilidade"+[i]]}` !== 'undefined') {
                            skill_string += `
                            & \\textbf{${window["nomeHabilidade"+[i]].value}} \\newline
                            ${window["descricaoHabilidade"+[i]].value} \\\\
                            `
                            i++;
                    }
                    skill_string += `
                    \\end{SectionTable}
                    `
            }

            if (whichTemplate=='thirdTemplate'){
                    skill_string += `
                    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                            % SKILLS
                    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                    \\noindent \\textbf{\\underline{HABILIDADES TÉCNICAS}} \\\\
                    `

                    while(`${window["nomeHabilidade"+[i]]}` !== 'undefined'){
                            skill_string += `
                            \\textbf{${window["nomeHabilidade"+[i]].value}}: ${window["descricaoHabilidade"+[i]].value} \\\\
                            `
                            i++;
                    }
            }
    }

    return skill_string;
}