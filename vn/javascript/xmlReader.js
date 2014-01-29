

function loadGameData()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","gamedata.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML; 

    var gameData=xmlDoc.getElementsByTagName("GameData")[0];
     
    return gameData;
}

function xmlGetChapter(gameData,chapterName) {

    var chapter = gameData.querySelector("chapter[name='" + chapterName + "']");
    return chapter.childNodes;
}