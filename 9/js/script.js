
jQuery("#serialization").click(
function() {
	//объявление необходимых переменных
	var keyWord = document.getElementById("serializationInput").value;
	var json = document.getElementsByTagName("div");
	var array = [];
	
	//получение значений со страницы
	for(i=0;i< json.length;i++)
    {
	array[i] = {VALUE: json.item(i).innerHTML};
	}
	$("#before").html(" ");
	$("#before").append("<tr><td style='background:salmon'>До:</td></tr>");	
	
	//шифрование алфавита
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var alpha = [];
	var number = 0;
	for(var d = 0; d < keyWord.length;d++)
		{
			number += parseInt(keyWord.charCodeAt(d).toString(10))
		}
	for(var l = 0; l < alphabet.length;l++)
	{
		var baseSymbol =parseInt(alphabet.charCodeAt(l).toString(10));
		alpha.push(String.fromCharCode(baseSymbol ^ number));
	}
	
	//шифрование слов
	var outStrings = [];
	for(var i =0, l = 0; i < array.length; i++)
	{
		var str_out =[];
		
		for(var k =0;k <array[i].VALUE.length;k++)
		{	
	
			if( l == alpha.length)
		{
			l = 0;
		}
		
			var baseSybmol =parseInt(array[i].VALUE.charCodeAt(k).toString(10));
			var alphaSymbol =parseInt(alpha[l++].charCodeAt(0).toString(10));
			str_out[k] = String.fromCharCode(baseSybmol ^ alphaSymbol);
			
		}	
		var str = str_out.join('');
		outStrings.push(str);
		$("#before").append("<tr>"+"<td>" +outStrings[i] + "</td>"  + "</tr>");
	}

	//сериализация
	$.post("php/connect.php", {json : JSON.stringify(outStrings,null,'  ')})
	})	 
			
jQuery("#deserialization").click(
function() 
{
	$.get("php/getJSON.php",
	function(data) {
		
	//объявление необходимых переменных
	var keyWord = document.getElementById("deserializationInput").value;
	var outStrings = [];
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var alpha = [];
	var number = 0;
	var Words = $.parseJSON(data);
	
	$("#after").html(" ");
	$("#after").append("<tr><td style='background:mediumspringgreen'>После: </td></tr>");
	
	//шифрование алфавита
	for(var d = 0; d < keyWord.length;d++)
		{
			number += parseInt(keyWord.charCodeAt(d).toString(10))
		}
	for(var l = 0; l < alphabet.length;l++)
	{
		var baseSymbol =parseInt(alphabet.charCodeAt(l).toString(10));
		alpha.push(String.fromCharCode(baseSymbol ^ number));
	}	
	//шифрование слов
		for(var i =0, l = 0; i < Words.length; i++)
	{
		
		var str_out =[];
		
		for(var k =0;k <Words[i].length;k++)
		{	
	
			if( l == alpha.length)
		{
			l = 0;
		}
		
			var baseSybmol =parseInt(Words[i].charCodeAt(k).toString(10));
			var alphaSymbol =parseInt(alpha[l++].charCodeAt(0).toString(10));
			str_out[k] = String.fromCharCode(baseSybmol ^ alphaSymbol);
			
		}	
		var str = str_out.join('');
		outStrings.push(str);
		$("#after").append("<tr>"+"<td>" +outStrings[i] + "</td>"  + "</tr>");
	}
					});
})	 
	 

