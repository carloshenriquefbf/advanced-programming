function update() {
    let whichTemplate = document.getElementById("field2").value;
    if (whichTemplate=='firstTemplate'){
        document.querySelector("textarea").value = `
                        \\documentclass[letterpaper,10pt]{article}

                        \\usepackage{latexsym}
                        \\usepackage[empty]{fullpage}
                        \\usepackage{titlesec}
                        \\usepackage{marvosym}
                        \\usepackage[usenames,dvipsnames]{color}
                        \\usepackage{verbatim}
                        \\usepackage{enumitem}
                        \\usepackage[hidelinks]{hyperref}
                        \\usepackage{fancyhdr}
                        \\usepackage[english]{babel}
                        \\usepackage{tabularx}
                        \\usepackage{multicol}
                        \\input{glyphtounicode}

                        \\usepackage[default]{sourcesanspro}
                        \\usepackage[T1]{fontenc}

                        \\pagestyle{fancy}
                        \\fancyhf{}
                        \\fancyfoot{}
                        \\renewcommand{\\headrulewidth}{0pt}
                        \\renewcommand{\\footrulewidth}{0pt}


                        \\addtolength{\\oddsidemargin}{-0.5in}
                        \\addtolength{\\evensidemargin}{-0.5in}
                        \\addtolength{\\textwidth}{1in}
                        \\addtolength{\\topmargin}{-.5in}
                        \\addtolength{\\textheight}{1.0in}

                        \\urlstyle{same}

                        \\raggedbottom
                        \\raggedright
                        \\setlength{\\tabcolsep}{0in}

                        \\titleformat{\\section}{
                        \\vspace{-4pt}\\centering
                        }{}{0em}{}[\\color{black}\\titlerule\\vspace{-5pt}]


                        \\pdfgentounicode=1

                        \\newcommand{\\resumeItem}[1]{
                        \\item\\small{
                            {#1 \\vspace{-2pt}}
                        }
                        }

                        \\newcommand{\\resumeSubheading}[4]{
                        \\vspace{-2pt}\\item
                            \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
                            \\textbf{#1} & #2 \\\\
                            \\textit{\\small#3} & \\textit{\\small #4} \\\\
                            \\end{tabular*}\\vspace{-7pt}
                        }

                        \\newcommand{\\resumeSubSubheading}[2]{
                            \\item
                            \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
                            \\textit{\\small#1} & \\textit{\\small #2} \\\\
                            \\end{tabular*}\\vspace{-7pt}
                        }

                        \\newcommand{\\resumeProjectHeading}[2]{
                            \\item
                            \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
                            \\small#1 & #2 \\\\
                            \\end{tabular*}\\vspace{-7pt}
                        }

                        \\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

                        \\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

                        \\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
                        \\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
                        \\newcommand{\\resumeItemListStart}{\\begin{itemize}}
                        \\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

                        \\begin{document}



                        \\begin{center}
                            {\\LARGE ${yname.value}} \\\\ \\vspace{2pt}

                        \\end{center}
                        %-----------EDUCATION-----------
                        \\vspace{-2pt}
                        \\section{Educação}
                        \\resumeSubHeadingListStart
                            \\resumeSubheading
                            {${yuniversity.value}}{}
                            {${whichTemplate}}{}

                        \\resumeSubHeadingListEnd

                        \\end{document}

            `
    }
    else if (whichTemplate=='secondTemplate'){
        document.querySelector("textarea").value = `
                        \\documentclass[letterpaper,10pt]{article}

                        \\usepackage{latexsym}
                        \\usepackage[empty]{fullpage}
                        \\usepackage{titlesec}
                        \\usepackage{marvosym}
                        \\usepackage[usenames,dvipsnames]{color}
                        \\usepackage{verbatim}
                        \\usepackage{enumitem}
                        \\usepackage[hidelinks]{hyperref}
                        \\usepackage{fancyhdr}
                        \\usepackage[english]{babel}
                        \\usepackage{tabularx}
                        \\usepackage{multicol}
                        \\input{glyphtounicode}

                        \\usepackage[default]{sourcesanspro}
                        \\usepackage[T1]{fontenc}

                        \\pagestyle{fancy}
                        \\fancyhf{}
                        \\fancyfoot{}
                        \\renewcommand{\\headrulewidth}{0pt}
                        \\renewcommand{\\footrulewidth}{0pt}


                        \\addtolength{\\oddsidemargin}{-0.5in}
                        \\addtolength{\\evensidemargin}{-0.5in}
                        \\addtolength{\\textwidth}{1in}
                        \\addtolength{\\topmargin}{-.5in}
                        \\addtolength{\\textheight}{1.0in}

                        \\urlstyle{same}

                        \\raggedbottom
                        \\raggedright
                        \\setlength{\\tabcolsep}{0in}

                        \\titleformat{\\section}{
                        \\vspace{-4pt}\\centering
                        }{}{0em}{}[\\color{black}\\titlerule\\vspace{-5pt}]


                        \\pdfgentounicode=1

                        \\newcommand{\\resumeItem}[1]{
                        \\item\\small{
                            {#1 \\vspace{-2pt}}
                        }
                        }

                        \\newcommand{\\resumeSubheading}[4]{
                        \\vspace{-2pt}\\item
                            \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
                            \\textbf{#1} & #2 \\\\
                            \\textit{\\small#3} & \\textit{\\small #4} \\\\
                            \\end{tabular*}\\vspace{-7pt}
                        }

                        \\newcommand{\\resumeSubSubheading}[2]{
                            \\item
                            \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
                            \\textit{\\small#1} & \\textit{\\small #2} \\\\
                            \\end{tabular*}\\vspace{-7pt}
                        }

                        \\newcommand{\\resumeProjectHeading}[2]{
                            \\item
                            \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
                            \\small#1 & #2 \\\\
                            \\end{tabular*}\\vspace{-7pt}
                        }

                        \\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

                        \\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

                        \\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
                        \\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
                        \\newcommand{\\resumeItemListStart}{\\begin{itemize}}
                        \\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

                        \\begin{document}



                        \\begin{center}
                            {\\LARGE ${yname.value}} \\\\ \\vspace{2pt}

                        \\end{center}
                        %-----------EDUCATION-----------
                        \\vspace{-2pt}
                        \\section{Education}
                        \\resumeSubHeadingListStart
                            \\resumeSubheading
                            {${yuniversity.value}}{}
                            {${whichTemplate}}{}

                        \\resumeSubHeadingListEnd

                        \\end{document}

            `
    }
    
    
}
