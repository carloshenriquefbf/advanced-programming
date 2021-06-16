var experience = 0;
var skill = 0;

function addChild(child) {

	if(child == "Experience"){
		var parent = document.getElementById("Experience");

		var html_content = "        \u003Cform\u003E\n            \u003Cfieldset class=\"grupo\"\u003E\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for= \"empresa\"\u003E\u003Cstrong\u003EEmpresa\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"empresa\" id=\"empresa"+[experience]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"localEmprego\"\u003E\u003Cstrong\u003ELocal\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"localEmprego\" id=\"localEmprego"+[experience]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n            \u003C\/fieldset\u003E\n\n            \u003Cfieldset class=\"grupo\"\u003E\n            \u003Cdiv class=\"campo\"\u003E\n                \u003Clabel for=\"cargo\"\u003E\u003Cstrong\u003ECargo\u003C\/strong\u003E\u003C\/label\u003E\n                \u003Cinput type=\"text\" name=\"cargo\" id=\"cargo"+[experience]+"\" onkeyup=\"update()\"\u003E\n            \u003C\/div\u003E\n            \u003Cdiv class=\"campo\"\u003E\n                \u003Clabel for= \"descricaoAtividade1\"\u003E\u003Cstrong\u003EDescri\u00e7\u00e3o do Cargo\u003C\/strong\u003E\u003C\/label\u003E\n                \u003Cinput type=\"text\" name=\"descricaoAtividade1\" id=\"descricaoAtividade"+[experience]+"\" onkeyup=\"update()\"\u003E\n            \u003C\/div\u003E\n            \u003C\/fieldset\u003E\n\n            \u003Cfieldset class=\"grupo\"\u003E\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"dataentrada\"\u003E\u003Cstrong\u003EData de Entrada\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput id=\"dataentrada"+[experience]+"\" type=\"date\" onkeyup=\"update()\" onchange=\"update()\"\u003E\n                \u003C\/div\u003E\n\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"datasaida\"\u003E\u003Cstrong\u003EData de Sa\u00edda\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput id=\"datasaida"+[experience]+"\" type=\"date\" onkeyup=\"update()\" onchange=\"update()\"\u003E\n                \u003C\/div\u003E\n            \u003C\/fieldset\u003E\n            \u003Cbr\u003E\n        \u003C\/form\u003E"
		parent.insertAdjacentHTML('beforeend', html_content);
		experience++;
	}

	if(child == "Skill"){
		var parent = document.getElementById("Skill");

		var html_content = "            \u003Cfieldset class=\"grupo\"\u003E\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for= \"nomeHabilidade\"\u003E\u003Cstrong\u003EHabilidade\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"nomeHabilidade\" id=\"nomeHabilidade"+[skill]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"descricaoHabilidade\"\u003E\u003Cstrong\u003EDescri\u00e7\u00e3o da Habilidade\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"descricaoHabilidade\" id=\"descricaoHabilidade"+[skill]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n            \u003C\/fieldset\u003E"
		parent.insertAdjacentHTML('beforeend', html_content);
		skill++;
		console.log(skill);
	}

	update();
}

function rmChild(child) {

	if(child == "Experience" && experience > 0) {
		var parent = document.querySelectorAll("div#Experience.campo > form");
		parent[experience-1].remove();
		experience--;
	}

	if(child == "Skill" && skill > 0) {
		var parent = document.querySelectorAll("div#Skill.campo > fieldset.grupo");
		parent[skill-1].remove();
		skill--;
	}

	update();
}