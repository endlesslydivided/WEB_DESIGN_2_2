var dictionary = [];
jQuery("#in").click(
function() {
	$.get("php/getJSON.php",
	function(data) {
	const regexEng = new RegExp('[A-Z]|[a-z]');
	const regexRus = new RegExp('[А-я]|[а-я]');
	var russian = document.getElementById("rus");
	var english = document.getElementById("engl");
	if(data != "")
		{
		var Words = $.parseJSON(data);
		dictionary = [];
		for(var iter = 0; iter <Words.length;iter++)
			{
		dictionary.push(Words[iter]);
			}
	}
		if(russian.value =="" || english.value=="")
	{
		alert("Пустое поле!");
		return;
	}
	if(!(regexRus.test(russian.value)||regexEng.test(english.value)))
	{
		alert("Несоотвествие значений полям!");
		return;
	}
	for(var iter =0;iter <dictionary.length;iter++)
	{
		if(dictionary[iter].RUSSIANW == russian.value || dictionary[iter].RUSSIANW == english.value)
		{
			alert("Повторение слов!");
			return;
		}
	}
	var translation = {ENGLISHW:english.value,RUSSIANW:russian.value};
	dictionary.push(translation);
	dictionary.sort((a, b) => a.RUSSIANW > b.RUSSIANW ? 1 : -1);
	$("#dictionaryID").html(" ");
	$("#dictionaryID").append("<tr>"+"<td>Русский язык</td>"+"<td>Английский язык</td>"  + "</tr>");
	for(var iter = 0; iter <dictionary.length;iter++)
	{
		$("#dictionaryID").append("<tr>"+"<td>" +dictionary[iter].RUSSIANW + "</td>"+"<td>" +dictionary[iter].ENGLISHW + "</td>"  + "</tr>");
	}
	russian.value = "";
	english.value = "";
	$.post("php/connect.php", {json : JSON.stringify(dictionary,null,'  ')});
	});
	})	 
			
jQuery("#out").click(
function output() 
{
	$.get("php/getJSON.php",
	function(data) 
	{
	$("#dictionaryID").html(" ");
	$("#dictionaryID").append("<tr>"+"<td>Русский язык</td>"+"<td>Английский язык</td>"  + "</tr>");
	var Words = $.parseJSON(data);
	dictionary = [];
	for(var iter = 0; iter <Words.length;iter++)
		{
		dictionary.push(Words[iter]);
		}
		dictionary.sort((a, b) => a.RUSSIANW > b.RUSSIANW ? 1 : -1);
	for(var iter = 0; iter <dictionary.length;iter++)
		{
		$("#dictionaryID").append("<tr>"+"<td>" +dictionary[iter].RUSSIANW + "</td>"+"<td>" +dictionary[iter].ENGLISHW + "</td>"  + "</tr>");
		}
	
	}	  );
}
					)	

jQuery("#delete").click(
function() 
{
	$.get("php/getJSON.php",
	function(data) {
	var deleteWord = document.getElementById("delIN");
	if(deleteWord.value == "")
	{
		alert("Пустое поле!");
		return;
	}
	deleteWord.value == "";
	var Words = $.parseJSON(data);
		
	for(var iter = 0; iter < Words.length;iter++)
	{
		if(Words[iter].ENGLISHW == deleteWord.value || Words[iter].RUSSIANW == deleteWord.value)
		{
				Words.splice(iter, 1);
				dictionary = [];
				$("#dictionaryID").html(" ");
				$("#dictionaryID").append("<tr>"+"<td>Русский язык</td>"+"<td>Английский язык</td>"  + "</tr>");
					for(var iter = 0; iter <Words.length;iter++)
				{
					dictionary.push(Words[iter]);
				}
				dictionary.sort((a, b) => a.RUSSIANW > b.RUSSIANW ? 1 : -1);
				$.post("php/connect.php", {json : JSON.stringify(dictionary,null,'  ')});
				for(var iter = 0; iter <Words.length;iter++)
				{
					$("#dictionaryID").append("<tr>"+"<td>" +dictionary[iter].RUSSIANW + "</td>"+"<td>" +dictionary[iter].ENGLISHW + "</td>"  + "</tr>");
				}
			return;
		}
	}
	$.post("php/connect.php", {json : JSON.stringify(dictionary,null,'  ')});
					});
})	  
	 

