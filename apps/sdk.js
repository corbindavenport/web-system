// Software Development Kit (SDK) for Web Systen 7

// Function for compiling code
function doIt() {
    var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.innerHTML = document.getElementById("textarea").value;
    headID.appendChild(newScript);
}

// Function for tab use
  function tabs(x)
  {
    var lis=document.getElementById("sidebarTabs").childNodes; //gets all the LI from the UL
 
    for(i=0;i<lis.length;i++)
    {
      lis[i].className=""; //removes the classname from all the LI
    }
    x.className="selected"; //the clicked tab gets the classname selected
    var res=document.getElementById("tabContent");  //the resource for the main tabContent
    var tab=x.id;
    switch(tab) //this switch case replaces the tabContent
    {
      case "tab1":
        res.innerHTML=document.getElementById("tab1Content").innerHTML;
        break;
 
      case "tab2":
        res.innerHTML=document.getElementById("tab2Content").innerHTML;
        break;
      case "tab3":
        res.innerHTML=document.getElementById("tab3Content").innerHTML;
        break;
      default:
        res.innerHTML=document.getElementById("tab1Content").innerHTML;
        break;
 
    }
  }
  
function createSDK() { 
var divTag = document.createElement("div"); 
	divTag.id = "SDK"; 
	divTag.className = "window"; 
            divTag.innerHTML = '<style>.tabContainer{width:415px;margin:2px}.tabContainer .digiTabs{list-style:none;display:block;overflow:hidden;position:relative;top:1px;margin:0;padding:0}.tabContainer .digiTabs li{float:left;background:#CCC;border-radius:3px 3px 0 0;border:1px solid #000;cursor:pointer;margin-right:10px;padding:3px}.tabContainer .digiTabs .selected{background-color:#fff;color:#393939;border-left:1px solid #000;border-right:1px solid #000;border-top:1px solid #000;border-bottom:1px solid #FFF}#tabContent{background-color:#fff;overflow:auto;float:left;margin-bottom:10px;border:1px solid #000;width:385px;height:245px;padding:4px}</style><div id="wintop" onmousedown="dragStart(event, ' + "'SDK'" + ')"><a href="javascript:CloseSDK();"><span id="close"></span></a><span>Software Dev Kit</span></div><div id="wincontent"><div class="tabContainer" ><ul class="digiTabs" id="sidebarTabs"><li  id="tab1" class="selected"  onclick="tabs(this);">Compiler</li><li id="tab2" onclick="tabs(this);">Help</li><li id="tab3"  onclick="tabs(this);">About</li></ul><div id="tabContent">The Web System 7 SDK is still in very early development and there are many bugs. Save your work often!</div></div> <div id="tab1Content" style="display:none;"><textarea name="textarea" style="width:370px; height:200px;" id="textarea" placeholder="This is where the JavaScript application code goes. Type some code in here and press Run. If you need help, check out the examples."></textarea><input type="button" value="Run" onclick="doIt();" /><input type="button" value="Help" /></div><div id="tab2Content" style="display:none;"><h2>Web System 7 SDK Help</h2><br />Welcome to the Web System 7 SDK. With this application you can create apps and extensions for System 7. This tutorial will teach you the basics of making an application for Web System 7.<br /><br />TUTORIAL COMING SOON</div></div><div id="tab3Content" style="display:none;">Web System 7 SDK by Corbin Davenport</div></div></div>'; 
            document.body.appendChild(divTag); 
}
function CloseSDK(){var a=document.getElementById("SDK");if(a){a.parentNode.removeChild(a)}}