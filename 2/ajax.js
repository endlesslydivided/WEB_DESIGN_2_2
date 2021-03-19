

function CreateRequest()
{
  var request=null;
  try
  {
    request = new XMLHttpRequest();
  }
  catch (e)
  {
    try
    {       request=new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e)
    {
      request=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  return request;
}

function LoadResults()
{            
  if (request.readyState == 4)
  {
    if (request.status == 200)
	{
      //получаем данные
      var answer = request.responseText;
      if(answer == "")
		{
		  alert("Неправильный логин или пароль.Либо пустые поля.");
		}
	  else
		{
		  alert("Вы зашли в аккаут под именем: " + answer)
		}
    }
  }
}

function Autorize(LOGIN,PASS)
{
  /*создаем новый объект запроса*/
  request=CreateRequest();
  /*если не удалось создать объект запроса то заканчиваем выполнение функции*/
  if(request==null)
  {
    alert('Can not create request');
    return;
  }  
  /*настраиваем объект запроса для установки связи*/
  
 
  var body = "login=" + encodeURIComponent(LOGIN) + "&pas=" + encodeURIComponent(PASS);

  request.open("POST",'authorize.php', true);
  request.setrequestheader('Content-Type', 'application/x-www-form-urlencoded');
  /*отправляем запрос серверу*/
  request.send(body);
   request.onreadystatechange = LoadResults;
  ClearResults();

}

/*очистка ввода*/
function ClearResults()
{
  var div = document.getElementById("LOGIN");
    div.clear();
  div = document.getElementById("PASS");
  div.clear();
}
