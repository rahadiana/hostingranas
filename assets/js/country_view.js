const p=new URLSearchParams(window.location.search).get("id"),z=p;function CountrySearch(){var e,t,a,s;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("content_list").getElementsByClassName("filter_list"),s=0;s<t.length;s++)((a=t[s].getElementsByTagName("div")[0]).textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[s].style.display="":t[s].style.display="none"}l=null==z?"ID":z,console.log(z),fetch("//tvpeer.github.io/assets/json/country_list/"+l+".json").then(function(e){return e.json()}).then(function(e){const t=JSON.parse(JSON.stringify(e));let a,s="";for(a=0;a<t.length;a++)s+='<div class="filter_list column is-4-desktop is-3-widescreen is-half-tablet"><div class="card"><header class="card-header"><p class="card-header-title"><span>'+t[a].name+'</span></p></header><div class="card-content"><figure class="image"><a href="detail/?id='+l+"&player="+t[a].path_name+'"><img class="lazyload" src="//tvpeer.github.io/assets/image/icon/loading.svg" data-src="//i0.wp.com/tvpeer.github.io/assets/image/logo/'+t[a].path_name+'.png?q=60&w=250&h=250" alt="'+t[a].path_name+'"></a></figure></div><footer class="card-footer"><a href="detail/?id='+l+"&player="+t[a].path_name+'" class="card-footer-item"><i class="fas fa-search"></i>Preview</a></footer></div></div>';document.getElementById("content_list").innerHTML=s,lazyload()});