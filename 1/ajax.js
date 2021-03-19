/*переменная для хранения объекта запроса*/
var request;
/*функция создания объекта запроса*/
function CreateRequest()
{
  var request=null;
  try
  {
    //создаем объект запроса для Firefox, Opera, Safari
    request = new XMLHttpRequest();
  }
  catch (e)
  {
    //создаем объект запроса для Internet Explorer
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

function KeyPress(term)
{
  /*создаем новый объект запроса*/
  request=CreateRequest();
  /*если не удалось создать объект запроса то заканчиваем выполнение функции*/
  if(request==null)
  {
    return;
  }
  /*формируем url-адрес*/
  var url = "country.php" + "?s=" + encodeURIComponent(term) + "&sid=" + Math.random();
  /*настраиваем объект запроса для установки связи*/
  request.onreadystatechange = LoadResults;
  request.open("GET", url, true);
  /*отправляем запрос серверу*/
  request.send(null);
}

function LoadResults()
{            
  /*Проверяем состояние готовности*/
  if (request.readyState == 4){
    /*Проверяем статус запроса*/
    if (request.status == 200){
      //делаем слой searchresults видимым
      ShowDiv("searchresults");
      //очищаем результаты
      ClearResults();
      //получаем данные
      var answer = request.responseText;
      //alert(answer);
      //преобразуем строку текста в массив
      var array = answer.split(",");
      //определяем размер массива
      var count = array.length;
      //находим слой searchresults
      var div = document.getElementById("searchresults");
      //создаем таблицу в объектной модели документа
      var tbl = document.createElement("table");
      var tblbody = document.createElement("tbody");
      var tblRow, tblCell, tblNode;
      //перебираем все элементы массива array
      for(var i = 0; i < count; i++)
      {
        var text = array[i];
        //создаем строки таблицы и добавляем в ее тело
        tblRow = document.createElement("tr");
        tblCell = document.createElement("td");
        //задаем атрибуты и функции ячеек
        tblCell.onmouseover = function(){this.className='mouseOver';};
        tblCell.onmouseout = function(){this.className='mouseOut';};
        tblCell.setAttribute("border", "0");
        tblCell.onclick = function(){Replace(this);};
        tblNode = document.createTextNode(text);
        tblCell.appendChild(tblNode);
        tblRow.appendChild(tblCell);
        tblbody.appendChild(tblRow);
      }
      //добавляем в таблицу ее тело
      tbl.appendChild(tblbody);
      //помещаем таблицу в слой
      div.appendChild(tbl);

    }
  }
}

/*делаем слой с результатами видимым*/
function ShowDiv(id)
{
  if (document.layers) document.layers[id].visibility="show";
  else document.getElementById(id).style.visibility="visible";
}

/*делаем слой с результатами не видимым*/
function HideDiv(id)
{
  if (document.layers) document.layers[id].visibility="hide";
  else document.getElementById(id).style.visibility="hidden";
}

/*очистка результатов*/
function ClearResults()
{
  // Удаление существующих строк из таблицы результатов
  var div = document.getElementById("searchresults");
  var counter = div.childNodes.length;
  for(var i = counter-1; i >= 0; i--)
  {
    div.removeChild(div.childNodes[i]);
  }
}

/*Заменяем значение в поле ввода значением, выбранным щелчком мыши*/
function Replace(tblCell)
{
  var inputbox = document.getElementById("country");
  inputbox.value = tblCell.firstChild.nodeValue;
  ClearResults();
  HideDiv("searchresults");
}

function BodyLoad()
{
	HideDiv("searchresults");
	// Перевод фокуса на поле ввода
	document.form1.keyword.focus();
	var net = new activexobject("wscript.network");
	var str = net.computername + " " + net.username;
	alert(str);
}