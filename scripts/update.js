function update() {
    let whichTemplate = document.getElementById("templateField").value;
    if (whichTemplate=='firstTemplate'){
        document.querySelector("textarea").value = `
                %%%%%%%%%%%%%%%%%%%%%%%%%%%% Author: Manuel Pasqual Paul %%%%%%%%%%%%%%%%%%%%%%%%%            

                %%%%%%%%%%%%%%%%%%%%%%%%%%%% Document Specifications %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                
                \\documentclass[12pt]{article} 
                \\usepackage{anysize}
                \\usepackage{multicol}
                \\begin{document}
                
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Name & Contact Info %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                
                \\begin{center}
                    {\\Large \\bfseries [SEU NOME AQUI]} \\\\ 
                    
                \\end{center}
                
                    {\\noindent \\bf Informações de Contato} \\\\ 
                    E-mail: [SEU E-MAIL AQUI] \\\\ 
                    Telefone: (123) 456-7890 \\\\ 
                
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Education %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                
                \\begin{center} % Begin Text Centering
                    {\\noindent \\bfseries EDUCAÇÃO}
                \\end{center} % End Text Centering
                
                \\vspace{8pt} % Gap between title and text
                
                \\noindent
                {\\sl \\bfseries NOME DO SEU CURSO AQUI} \\hfill [PREVISÃO DE FORMATURA] \\\\ 
                \\noindent [NOME DA UNIVERSIDADE AQUI] \\\\
                
                \\vspace{0.2in} % Some whitespace between sections
                
                \\begin{center}
                    {\\noindent \\bfseries HABILIDADES TÉCNICAS}
                \\end{center} 
                
                \\vspace{8pt} % Gap between title and text
                
                \\vspace{0.2in} % Some whitespace between sections
                %%%%%%%%%%%%%%%%%%%%%%%%%%%% HABILIDADES TÉCNICAS  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                
                \\vspace{6pt}
                \\begin{itemize} \\itemsep -2pt % Reduce space between items
                    \\item DESCREVA SUAS HABILIDADES
                    \\item DESCREVA SUAS HABILIDADES
                \\end{itemize}
                
                
                %%%%%%%%%%%%%%%%%%%%%%%%%%%% EXPERIÊNCIA  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                
                \\begin{center}
                    {\\noindent \\bfseries EXPERIÊNCIA}
                \\end{center} 
                
                \\vspace{8pt} % Gap between title and text
                
                \\noindent
                {\\bfseries [CARGO]} \\hfill [MÊS - ANO] \\\\ 
                \\noindent [EMPRESA] \\hfill [LOCAL] \\\\ 
                
                \\vspace{6pt}
                \\begin{itemize} \\itemsep -2pt % Reduce space between items
                    \\item DESCREVA SUAS ATIVIDADES
                    \\item DESCREVA SUAS ATIVIDADES
                \\end{itemize}
                
                \\vspace{0.2in} % Some whitespace between sections
                
                \\begin{center}
                    {\\noindent \\bfseries EXPERIÊNCIA 2}
                \\end{center} 
                
                \\vspace{8pt} % Gap between title and text
                
                \\noindent
                {\\bfseries [CARGO]} \\hfill [MÊS - ANO] \\\\ 
                \\noindent [EMPRESA] \\hfill [LOCAL] \\\\ 
                
                \\vspace{6pt}
                \\begin{itemize} \\itemsep -2pt % Reduce space between items
                    \\item DESCREVA SUAS ATIVIDADES
                    \\item DESCREVA SUAS ATIVIDADES
                \\end{itemize}
                \\end{document}

            `
    }

    else if (whichTemplate=='secondTemplate'){
        document.querySelector("textarea").value = `
                %%%%%%%%%%%%%%%%%%%%%%%%%%%% Author: S. Venkatraman %%%%%%%%%%%%%%%%%%%%%%%%%%%% 

                % --- Set document class and font size ---
                
                \\documentclass[letterpaper, 11pt]{article}
                
                % --- Package imports ---
                
                \\usepackage{hyperref, enumitem, longtable, amsmath, array}
                
                % --- Page layout settings ---
                
                % Set page margins
                \\usepackage[left=0.7in, right=0.8in, bottom=.8in, top=0.8in, headsep=0in, footskip=.2in]{geometry}
                
                % Set line spacing
                \\renewcommand{\\baselinestretch}{1.2}
                
                % --- Page formatting settings ---
                
                % Set link colors
                \\usepackage[dvipsnames]{xcolor}
                \\hypersetup{colorlinks=true, linkcolor=MidnightBlue, urlcolor=MidnightBlue}
                
                % Set font to Libertine, including math support
                \\usepackage{libertine}
                \\usepackage[libertine]{newtxmath}
                
                % Remove page numbering
                \\pagenumbering{gobble}
                
                % Define font size and color for section headings
                \\newcommand{\\headingfont}{\\Large\\color{OliveGreen}}
                
                % Define settings for left-hand column in which dates are printed
                \\newcolumntype{R}{>{\\raggedleft}p{1in}}
                
                % Define 'SectionTable' environment
                \\newenvironment{SectionTable}[1]{
                    \\renewcommand*{\\arraystretch}{1.7}
                    \\setlength{\\tabcolsep}{10pt}
                    \\begin{longtable}{Rp{5.2in}} & #1 \\\\}
                {\\end{longtable}\\vspace{-.3cm}}
                
                % Define 'SectionTableSingleSpace' environment
                \\newenvironment{SectionTableSingleSpace}[1]{
                    \\renewcommand*{\\arraystretch}{1.2}
                    \\setlength{\\tabcolsep}{10pt}
                    \\begin{longtable}{Rp{5.2in}} & #1 \\\\[0.6em]}
                {\\end{longtable}\\vspace{-.3cm}}
                
                % --- Document starts here ---
                
                \\begin{document}
                
                % --- Name and contact information ---
                
                \\begin{SectionTable}{\\Huge [SEU NOME AQUI]} & 
                [SEU EMAIL AQUI]   $\\;\\boldsymbol{\\cdot}\\;$ \\newline
                [SEU TELEFONE AQUI] 
                \\end{SectionTable}
                
                % --- Section: Education ---
                
                \\begin{SectionTable}{\\headingfont Educação}
                
                [PREVISÃO DE FORMATURA] & 
                \\textbf{SUA UNIVERSIDADE AQUI} -- LOCAL \\newline
                NOME DO CURSO \\\\
                \\end{SectionTable}
                
                % --- Section: Industry experience ---
                
                \\begin{SectionTable}{\\headingfont Experiência}
                
                [DATA DE ENTRADA] &
                \\textbf{NOME DA EMPRESA (CARGO)} -- LOCAL \\newline
                DESCRIÇÃO DO CARGO \\\\
                
                [DATA DE ENTRADA] &
                \\textbf{NOME DA EMPRESA (CARGO)} -- LOCAL \\newline
                DESCRIÇÃO DO CARGO \\\\
                
                \\end{SectionTable}
                
                % --- Section: Technical skills ---
                
                \\begin{SectionTable}{\\headingfont HABILIDADES TÉCNICAS}
                & \\textbf{NOME DA HABILIDADE} \\newline
                DESCRIÇÃO DA HABILIDADE \\\\
                
                & \\textbf{NOME DA HABILIDADE} \\newline
                DESCRIÇÃO DA HABILIDADE\\\\
                
                \\end{SectionTable}
                
                % --- End of CV! ---
                
                \\end{document}     
        `        
    }
    
    else if (whichTemplate=='thirdTemplate'){
        document.querySelector("textarea").value = `
                %%%%%%%%%%%%%%%%%%%%%%%%%%%% Author: Kajal Gada %%%%%%%%%%%%%%%%%%%%%%%%%%%% 

                \\documentclass{article}
                
                \\usepackage[top=0.5in, bottom=0.5in, left=0.5in, right=0.5in]{geometry}
                \\usepackage{enumitem}
                
                \\begin{document}
                \\begin{center}
                \\thispagestyle{empty}
                \\large \\textbf{SEU NOME AQUI\\\\}
                \\normalsize SEU E-MAIL AQUI $\\mid$ SEU TELEFONE AQUI   \\\\
                \\hrulefill
                \\end{center}
                
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                % SKILLS
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                
                \\noindent \\textbf{\\underline{HABILIDADES TÉCNICAS}} \\\\
                
                \\textbf{NOME DA HABILIDADE}: DESCRIÇÃO DA HABILIDADE \\\\
                
                \\textbf{NOME DA HABILIDADE}: DESCRIÇÃO DA HABILIDADE\\\\
                % Skill 1 (level of expertise), Skill 2 (level of expertise), Skill 3 (level of expertise) \\\\
                
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                % EDUCATION
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                \\noindent \\textbf{\\underline{EDUCAÇÃO}} \\\\
                
                \\textbf{NOME DA UNIVERSIDADE} \\hfill LOCAL \\\\
                
                \\textit{NOME DO CURSO} \\hfill PREVISÃO DE FORMATURA \\\\
                
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                % WORK EXPERIENCE
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                \\noindent \\textbf{\\underline{EXPERIÊNCIA}} \\\\
                
                \\noindent \\textbf{NOME DA EMPRESA} \\hfill LOCAL \\\\
                
                \\textit{CARGO} \\hfill DATA \\\\
                
                \\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
                
                \\item {DESCRIÇÃO DO CARGO} \\\\
                
                \\item {DESCRIÇÃO DO CARGO} \\\\
                
                \\end{itemize}
                
                \\noindent \\textbf{\\underline{EXPERIÊNCIA}} \\\\
                
                \\noindent \\textbf{NOME DA EMPRESA} \\hfill LOCAL \\\\
                
                \\textit{CARGO} \\hfill DATA \\\\
                
                \\begin{itemize}[noitemsep,nolistsep,leftmargin=*]
                
                \\item {DESCRIÇÃO DO CARGO} \\\\
                
                \\item {DESCRIÇÃO DO CARGO} \\\\
                
                \\end{itemize}
                
                \\end{document}       

        `   
    }
}
