
fetch('//tvpeer.github.io/assets/json/channel_list/allchannel.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  const jsonData = JSON.parse(JSON.stringify(myJson));

  let text = "";
  let i;
  for (i = 0; i < jsonData.length; i++) {

text += 

'<div class="filter_list column is-4-desktop is-3-widescreen is-half-tablet">'+
        '<div class="card">'+
          '<header class="card-header">'+
            '<p class="card-header-title">'+
              '<span>'+jsonData[i]['name']+'</span>'+
            '</p>'+
          '</header>'+
          '<div class="card-content">'+
            '<figure class="image">'+
              '<a href="detail/?player='+jsonData[i]['path_name']+'"><img class="lazyload" src="http://tvpeer.github.io/assets/image/icon/loading.svg" data-src="http://i0.wp.com/tvpeer.github.io/assets/image/logo/'+jsonData[i]['path_name']+'.png?q=60&w=250&h=250" alt="'+jsonData[i]['name']+'"></a>'+
            '</figure>'+
          '</div>'+
          '<footer class="card-footer">'+
            '<a href="detail/?player='+jsonData[i]['path_name']+'" class="card-footer-item"><i class="fas fa-search"></i>Preview</a>'+
          '</footer>'+
        '</div>'+
      '</div>';

}

  document.getElementById("content_list").innerHTML = text;
  

  ;(function() {
    lazyload();
  })();

});

function CountrySearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("content_list");
    li = ul.getElementsByClassName("filter_list");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}