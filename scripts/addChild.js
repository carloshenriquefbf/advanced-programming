var experience = 0;
var skill = 0;

function addChild(child) {

	if(child == "Experience"){
		var parent1 = document.getElementById("Experience");

		var temp1 = "        \u003Cform\u003E\n            \u003Cfieldset class=\"grupo\"\u003E\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for= \"empresa\"\u003E\u003Cstrong\u003EEmpresa\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"empresa\" id=\"empresa"+[experience]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"localEmprego\"\u003E\u003Cstrong\u003ELocal\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"localEmprego\" id=\"localEmprego"+[experience]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n            \u003C\/fieldset\u003E\n\n            \u003Cfieldset class=\"grupo\"\u003E\n            \u003Cdiv class=\"campo\"\u003E\n                \u003Clabel for=\"cargo\"\u003E\u003Cstrong\u003ECargo\u003C\/strong\u003E\u003C\/label\u003E\n                \u003Cinput type=\"text\" name=\"cargo\" id=\"cargo"+[experience]+"\" onkeyup=\"update()\"\u003E\n            \u003C\/div\u003E\n            \u003Cdiv class=\"campo\"\u003E\n                \u003Clabel for= \"descricaoAtividade1\"\u003E\u003Cstrong\u003EDescri\u00e7\u00e3o do Cargo\u003C\/strong\u003E\u003C\/label\u003E\n                \u003Cinput type=\"text\" name=\"descricaoAtividade1\" id=\"descricaoAtividade"+[experience]+"\" onkeyup=\"update()\"\u003E\n            \u003C\/div\u003E\n            \u003C\/fieldset\u003E\n\n            \u003Cfieldset class=\"grupo\"\u003E\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"dataentrada\"\u003E\u003Cstrong\u003EData de Entrada\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput id=\"dataentrada"+[experience]+"\" type=\"date\" onkeyup=\"update()\" onchange=\"update()\"\u003E\n                \u003C\/div\u003E\n\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"datasaida\"\u003E\u003Cstrong\u003EData de Sa\u00edda\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput id=\"datasaida"+[experience]+"\" type=\"date\" onkeyup=\"update()\" onchange=\"update()\"\u003E\n                \u003C\/div\u003E\n            \u003C\/fieldset\u003E\n            \u003Cbr\u003E\n        \u003C\/form\u003E"
		parent1.insertAdjacentHTML('beforeend', temp1);
		experience++;
	}

	if(child == "Skill"){
		var parent2 = document.getElementById("Skill");

		var temp2 = "            \u003Cfieldset class=\"grupo\"\u003E\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for= \"nomeHabilidade\"\u003E\u003Cstrong\u003EHabilidade\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"nomeHabilidade\" id=\"nomeHabilidade"+[skill]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n\n                \u003Cdiv class=\"campo\"\u003E\n                    \u003Clabel for=\"descricaoHabilidade\"\u003E\u003Cstrong\u003EDescri\u00e7\u00e3o da Habilidade\u003C\/strong\u003E\u003C\/label\u003E\n                    \u003Cinput type=\"text\" name=\"descricaoHabilidade\" id=\"descricaoHabilidade"+[skill]+"\" onkeyup=\"update()\"\u003E\n                \u003C\/div\u003E\n            \u003C\/fieldset\u003E"
		parent2.insertAdjacentHTML('beforeend', temp2);
		skill++;
	}

	update();
}