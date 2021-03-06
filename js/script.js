function init(){
  myMap=new ymaps.Map("yandex_map",{
    center:[59.938631,30.323055],
    zoom:17
  }),
    myPlacemark=new ymaps.Placemark([59.938631,30.323055],{},{
    iconLayout:"default#image",
    iconImageHref:"img/map-marker.png",
    iconImageSize:[367,190],
    iconImageOffset:[-180,-190]
  }),
    myMap.geoObjects.add(myPlacemark)
}
var enter=document.querySelector(".map_contacts_btn"),
    popup=document.querySelector(".write_us"),
    close=popup.querySelector(".close_window"),
    form=popup.querySelector("form"),
    login=popup.querySelector("[id=name]"),
    myMap,
    myPlacemark;
ymaps.ready(init),
  enter.addEventListener("click",function(e){
  e.preventDefault(),
    popup.classList.add("write_us_show"),
    login.focus()
}),
  close.addEventListener("click",function(e){
  e.preventDefault(),
    popup.classList.remove("write_us_show")
});