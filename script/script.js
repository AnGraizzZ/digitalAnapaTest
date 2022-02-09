window.onload = function() {
    document.getElementById('infrastructure-gallery').innerHTML='';
    let i = 0;
while (i < 4) { 
    document.getElementById('infrastructure-gallery').innerHTML+=infrablock(i);
  i++;
}
 };

 function infrablock(data)
 {
     var arr =[
        [1,'Собственный пляж'],
        [2,'Шведский стол'],
        [3,'Уютные номера'],
        [4,'Соляная пещера']
     ];
     return '<div class="col-md-3  col-12">\
                <div class="infrastructure-block ">\
                    <div class="infrastructure-img" style="background-image: url(image/infra'+arr[data][0]+'.png)">\
                    <div class="black-hidden"><button class="btn-infrastructure button-active">Подробнее</button></div>\
                </div>\
                <p class="content-title">'+arr[data][1]+'</p>\
            </div></div>';
 }