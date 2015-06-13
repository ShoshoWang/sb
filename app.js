/**
 * Created by apple on 15/4/21.
 */
$(document).ready(function(){
   $(window).on("load",function(){
   imgLocation();
   var dataimg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]}  ;

   window.onScroll=function(){
       if(scrollside()){
           $.each(dataimg,data,function(index,value){
               var box=$("<div>").addClass("box").appendTo($("#container"))
               var content=$("<div>").addClass("content").appendTo(box);
               console.log("./images/"+$(value).attr("src"));
               //$("<img>").attr("src","./images/"+$(value).attr("src")).appendTo(content);
           })

       }

   }


   })



})



function scrollside(){
  var box=$(".box");
  var lastboxheight= box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
  var  documentheight=$(document).height();
  var scrollheight=$(window).scrollTop();
  return(documentheight+scrollheight>lastboxheight)?true:false;
}






function  imgLocation (){
    var box=$(".box");
    var boxwidth =box.eq(0).width();
    var num=Math.floor($(window).width()/boxwidth);
    var boxarr=[];
    box.each(function(index,value){
        if(index<num){
           var boxheight=box.eq(index).height();
            boxarr[index]=boxheight;
            //console.log(boxheight);
        }
        else{
            var minboxheight=Math.min.apply(null,boxarr);
            var minboxindex= $.inArray(minboxheight,boxarr);
            $(value).css(
                {
                    "position":"absolute",
                    "top":minboxheight,
                    "left":box.eq(minboxindex).position().left
                }
            )

            boxarr[minboxindex]+=box.eq(index).height();
        }



    })
}

