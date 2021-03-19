
jQuery("#serialization").click(
function() {
	
	var json = document.getElementsByTagName("div");
	var array = [];
	for(i=0;i< json.length;i++)
    {
	array[i] = {KEY: json.item(i).innerHTML,VALUE: i};
	}
	$.post("php/connect.php", {json : JSON.stringify(array,null,'  ')})
	})	 
			
jQuery("#deserialization").click(
function() 
{
	$.get("php/getJSON.php",
	function(data) {
	var Words = $.parseJSON(data);
	var Words_old = Words.slice();
	Words.sort((a, b) => a.KEY > b.KEY ? 1 : -1);
	$("#result").html(' ');
	$("#result").append("<tr><td style='background:salmon'>До: </td><td style='background:mediumspringgreen'>После: </td></tr>");	
	for(var i =0; i < Words.length; i++)
	{
		$("#result").append("<tr>"+"<td>" + Words_old[i].KEY + "➔"+Words_old[i].VALUE + "</td>"
									+"<td>" + Words[i].KEY + "➔"+Words[i].VALUE + "</td>" + "</tr>");
	}
					});
})	 
	 

