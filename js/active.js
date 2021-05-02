var sk_html = document.querySelector(".skillList .html");
var sk_js = document.querySelector(".skillList .js");
var sk_git = document.querySelector(".skillList .git");
var sk_adobe = document.querySelector(".skillList .adobe");

var skill = document.querySelector(".graph p");
var circle = document.querySelector(".graph_circle")
sk_html.addEventListener("click",changeshtml);
sk_js.addEventListener("click",changesjs);
sk_git.addEventListener("click",changesgit);
sk_adobe.addEventListener("click",changesadobe);

function changeshtml(){
    skill.innerHTML = "HTML/CSS";
    circle.setAttribute("class","graph_circle part5")
}
function changesjs(){
    skill.innerHTML = "js/jQuery";
    circle.setAttribute("class","graph_circle part4")
}
function changesgit(){
    skill.innerHTML = "Git";
    circle.setAttribute("class","graph_circle part3")
}
function changesadobe(){
    skill.innerHTML = "Adobe系列";
    circle.setAttribute("class","graph_circle part5")
}



var btn = document.querySelector('.form .btn');

btn.addEventListener('click',sorry);
function sorry(e){
    e.preventDefault();
    console.log(btn);
    var userName = document.querySelector('.form .name').value;
    alert(userName+"先生/小姐很感謝您的支持。很抱歉目前此功能尚未開放。");
}