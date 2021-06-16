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
        {\\Large \\textbf{${nomePessoa.value}}} \\\\ 
        
        \\end{center}
    
        {\\noindent \\bf Informações de Contato} \\\\ 
        E-mail: ${email.value} \\\\ 
        Telefone: ${phone.value} \\\\ 
        
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Education %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        
 
        \\begin{center} % Begin Text Centering
        {\\noindent \\bfseries EDUCAÇÃO}
        \\end{center} % End Text Centering
        
        \\vspace{8pt} % Gap between title and text
        
        \\noindent
        {\\sl \\bfseries ${curso.value}} \\hfill ${dataformatura.value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/')} \\\\ 
        \\noindent ${universidade.value} \\\\

        \\vspace{0.2in} % Some whitespace between sections
        `
	+ add_skill() +
	`
	\\vspace{0.2in} % Some whitespace between sections
	`
	+ add_experience() +
	`
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
        
        \\begin{SectionTable}{\\Huge ${nomePessoa.value}} & 
        ${email.value}   $\\;\\boldsymbol{\\cdot}\\;$ ${phone.value}
        \\end{SectionTable}
        
        % --- Section: Education ---
        
        \\begin{SectionTable}{\\headingfont Educação}
        
        ${dataformatura.value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/')} & 
        \\textbf{ ${universidade.value}}\\newline
        ${curso.value} \\\\
        \\end{SectionTable}
	    `
	    + add_skill() +
	    ``
	    + add_experience() +
	    ` 
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
                \\large \\textbf{${nomePessoa.value}\\\\}
                \\normalsize ${email.value} $\\mid$ ${phone.value}   \\\\
                \\hrulefill
                \\end{center}

                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                % EDUCATION
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                \\noindent \\textbf{\\underline{EDUCAÇÃO}} \\\\
                
                \\textbf{${universidade.value}} 
                
                \\textit{${curso.value}} \\hfill ${dataformatura.value.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1').replace(/-/g, '/')} \\\\
                `
                + add_skill() +
                ` `
                + add_experience() +
                `
                        \\end{document}
                `   
    }     
}
