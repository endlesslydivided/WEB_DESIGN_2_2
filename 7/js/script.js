var request=null;


jQuery("#serialization").click(
function() {
	
	var json = document.getElementsByTagName("title");
	var array = [];
	for(i=0;i< json.length;i++)
    {
		var o = {tagName: json.item(i).tagName,HTMLinner: json.item(i).innerHTML};
    var l = 0;
    for (l ; l < json.item(i).attributes.length; l++) 
	{
        o[json.item(i).attributes[l].name] = json.item(i).attributes[l].value;
    }	
	array[i] = o;

	}
			$.post("php/connect.php", {json : JSON.stringify(array,null,'  ')})
			})	 
			
jQuery("#deserialization").click(
function() 
{
	$.get("php/getJSON.php",
	function(data) {
	var Words = $.parseJSON(data);
	$("#di").append("Результат:");	
	$("#di").append("<h1>" + Words[6].HTMLinner + "</h1>");	
	$("#di").append("<h1>" + Words[7].HTMLinner + "</h1>");	
	$("#di").append("<h1>" + Words[8].HTMLinner + "</h1>");	
					});
	
		
})	 