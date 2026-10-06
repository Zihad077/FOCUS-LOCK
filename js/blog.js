(function(){var P=[],q="",cat="All",n=6,base=document.currentScript.dataset.base||"",
L=document.getElementById("list"),F=document.getElementById("cats"),S=document.getElementById("q"),M=document.getElementById("more"),
card=function(p){return'<a class="card post" href="'+base+p.url+'"><img loading="lazy" src="'+base+p.image+'" alt=""><div><small>'+p.category+" · "+p.date+"</small><h3>"+p.title+"</h3><p>"+p.description+"</p></div></a>"};
fetch(base+"data/posts.json").then(function(r){return r.json()}).then(function(d){P=d.sort(function(a,b){return b.date>a.date?1:-1});
var h=document.getElementById("latest");if(h)h.innerHTML=P.slice(0,3).map(card).join("");
var rel=document.getElementById("related");if(rel){var s=location.pathname.split("/").pop();rel.innerHTML=P.filter(function(p){return p.slug+".html"!==s}).slice(0,2).map(card).join("")}
if(F){F.innerHTML=["All"].concat(P.map(function(p){return p.category}).filter(function(c,i,a){return a.indexOf(c)===i})).map(function(c){return'<button type="button"'+(c==="All"?' class="on"':"")+">"+c+"</button>"}).join("");
F.onclick=function(e){if(e.target.tagName!=="BUTTON")return;cat=e.target.textContent;[].forEach.call(F.children,function(b){b.className=b===e.target?"on":""});n=6;draw()};
S.oninput=function(){q=S.value.trim().toLowerCase();n=6;draw()};M.onclick=function(){n+=6;draw()};draw()}})
.catch(function(){if(L)L.innerHTML="<p>Could not load articles.</p>"});
function draw(){var r=P.filter(function(p){return(cat==="All"||p.category===cat)&&(p.title+p.description).toLowerCase().indexOf(q)>-1});
L.innerHTML=r.slice(0,n).map(card).join("")||"<p>No articles match your search.</p>";M.hidden=r.length<=n}})();
