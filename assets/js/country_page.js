function CountrySearch(){for(var e,t=document.getElementById("myInput").value.toUpperCase(),s=document.getElementById("content_list").getElementsByClassName("filter_list"),a=0;a<s.length;a++)e=s[a].getElementsByTagName("div")[0],console.log(e),-1<(e.textContent||e.innerText).toUpperCase().indexOf(t)?s[a].style.display="":s[a].style.display="none"}fetch("/assets/json/country_list/allcountry.json").then(function(e){return e.json()}).then(function(e){const t=JSON.parse(JSON.stringify(e));let s,a="";for(s=0;s<t.length;s++)a+='<div class="filter_list column is-4-desktop is-3-widescreen is-half-tablet"><div class="card"><header class="card-header"><p class="card-header-title"><span>'+t[s].name+'</span></p></header><div class="card-content"><figure class="image"><a href="view/?id='+t[s].code+'"><img class="lazyload" src="/assets/image/icon/loading.svg" data-src="//i0.wp.com/tvpeer.github.io/assets/image/flag/'+t[s].code.toLowerCase()+'-flag.jpg?q=60&w=250&h=250" alt="'+t[s].name+'"></a></figure></div><footer class="card-footer"><a href="view/?id='+t[s].code+'" class="card-footer-item"><i class="fas fa-search"></i>Preview</a></footer></div></div>';document.getElementById("content_list").innerHTML=a,lazyload()});