function add_experience() {
    let whichTemplate = document.getElementById("templateField").value;
    var experience_string = "";

    if(`${window["empresa0"]}` !== 'undefined') {
            i = 0;

            if (whichTemplate=='firstTemplate'){
                    experience_string += `
                    %%%%%%%%%%%%%%%%%%%%%%%%%%%% EXPERIÊNCIA  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

                    \\begin{center}
                    {\\noindent \\bfseries EXPERIÊNCIA}
                    \\end{center}

                    \\vspace{8pt} % Gap between title and text
                    `

                    while(`${window["empresa"+[i]]}` !== 'undefined') {
                            experience_string += `
                            \\noindent
                            {\\bfseries ${window["cargo"+[i]].value}} \\hfill ${"de ".concat(window["dataentrada"+[i]].value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/')," a ",window["datasaida"+[i]].value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/'))}  \\\\
                            \\noindent ${window["empresa"+[i]].value} \\hfill ${window["localEmprego"+[i]].value} \\\\

                            \\vspace{6pt}
                            \\begin{itemize} \\itemsep -2pt % Reduce space between items
                            \\item ${window["descricaoAtividade"+[i]].value}
                            \\end{itemize}

                            \\vspace{0.2in} % Some whitespace between sections
                             `
                            i++;
                    }
            }

            if (whichTemplate=='secondTemplate'){
                    experience_string += `
                    % --- Section: Industry experience ---

                    \\begin{SectionTable}{\\headingfont Experiência}
                    `

                    while(`${window["empresa"+[i]]}` !== 'undefined') {
                            experience_string += `
                            ${"de ".concat(window["dataentrada"+[i]].value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/')," a ",window["datasaida"+[i]].value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/'))}
                            & \\textbf{${window["empresa"+[i]].value} (${window["cargo"+[i]].value})} -- ${window["localEmprego"+[i]].value} \\newline
                            ${window["descricaoAtividade"+[i]].value} \\\\
                            `
                            i++;
                    }
                    experience_string += `

                    \\end{SectionTable}
                    `
            }

            if (whichTemplate=='thirdTemplate'){
                    experience_string += `
                    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                         % WORK EXPERIENCE
                    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                    \\noindent \\textbf{\\underline{EXPERIÊNCIA}} \\\\
                    `

                    while(`${window["empresa"+[i]]}` !== 'undefined') {
                            experience_string += `
                            \\noindent \\textbf{${window["empresa"+[i]].value}} \\hfill ${window["localEmprego"+[i]].value} \\\\

                            \\textit{${window["cargo"+[i]].value}} \\hfill ${"de ".concat(window["dataentrada"+[i]].value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/')," a ",window["datasaida"+[i]].value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/'))} \\\\

                            \\begin{itemize}[noitemsep,nolistsep,leftmargin=*]

                            \\item {${window["descricaoAtividade"+[i]].value}} \\\\
                            \\end{itemize}
                            `
                            i++;
                    }
            }
    }

    return experience_string;
}