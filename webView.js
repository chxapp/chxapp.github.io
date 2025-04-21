let timer,timer1;
 var cfale = false
 var cfale1 = false
 var cfale2 = false


 timer1 = setInterval(() => {
    if(cfale){
      //console.log(1111)

      clearInterval(timer1)

     return

    }

    if(document.querySelector('._akaz')){


         cfale = true


       document.querySelector('._akaz').parentNode.insertAdjacentHTML("afterbegin",
               "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/png;base64,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'/>"
           )



   }
  },200)

function getCount() {
           if (document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn")){
               var nodeList = document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn");
               var count = 0;
               for (const nodeDiv of nodeList) {
                   count = count + parseInt(nodeDiv.innerText);
               }
               return count


           }

      }


 timer = setInterval(() => {
 // console.log("tttttttt")

   if(cfale1){

      clearInterval(timer)

      return
    }



   var div = document.querySelector("#wa-popovers-bucket").parentNode

   if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38")){

     cfale1 = true




      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38").setAttribute("style",'display:none')
      div.querySelector(".xcnrxux.xcnrxux").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
     div.querySelector(".x1hql6x6.x1c3i2sq.xdod15v.x1iymm2a").setAttribute("style",'display:none')
     div.querySelector(".x1lliihq").querySelector(".x12peec7.xui2vq6").setAttribute("style",'border:none;padding: 0;width: 100%;')
     div.querySelector(".x1lliihq").querySelector(".x1tfhste").setAttribute("style",'display:none')
     div.querySelector(".x1lliihq").querySelector(".x1sy10c2").setAttribute("style",'display:none')
     div.querySelector(".x6s0dn4.x11fxgd9").setAttribute("style",'display:none')

     div.querySelector(".x1lliihq").querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x1lliihq").querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").innerHTML='Use Whats on your computer'




     div.querySelector(".x1lliihq").querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
      div.querySelector(".x1lliihq").querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";


   var pp = div.querySelector(".x1lliihq").querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
      pp.innerHTML = pp.innerHTML.replace("WhatsApp", "Whats")




     div.querySelector(".x1lliihq").querySelector(".x1ism021.x1w450gt").setAttribute("style",'flex-grow: 1;flex-shrink: 2;width:320px;')


     div.querySelector(".x1lliihq").querySelector(".x1dnwe82.x8vdgqj").setAttribute("style",'flex-grow: 0;padding: 0;margin: 0;')

     div.querySelector(".x1lliihq").parentNode.setAttribute("style",'flex-grow: 0;')

         div.querySelector(".x1lliihq").querySelector(".x1dnwe82.x8vdgqj").insertAdjacentHTML("afterbegin",
               '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 闈炲畼鏂瑰簲鐢� -</div></div>'
           );

   }



   },300)


var time2 = setInterval(() => {
   if (document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38")){
          document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38").remove()
      }
   if(!document.getElementsByClassName('_aigw')[1]){
       return
   }

   if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].getElementsByClassName('_aigw')[1]) {

       if(cfale2){

       clearInterval(time2)

      return
    }
      cfale2 = true
       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .style.minWidth = 'auto'

       //document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
       //  .getElementsByClassName('_2Ts6i')[0].style.minWidth = '100%'

       if (document.querySelector(".xbyj736")){
           document.querySelector(".xbyj736").style.display = "none";
       }
      if (document.querySelector(".x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl")){
          document.querySelector(".x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl").style.width = '0'
       }

       // document.querySelector(".xbyj736").style.display = "none";
       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .getElementsByClassName('_aigw')[1].style.minWidth = '100%'
       // 灏佽澶嶇敤
       // 鎻愬彇鍏叡鐨勬煡璇㈤€夋嫨鍣ㄥ嚱鏁�
       function querySelectorAllAndHandle(selector, eventType, handler) {
           document.querySelectorAll(selector).forEach(item => {
               item.addEventListener(eventType, handler);
           });
       }

       // 鎻愬彇璁剧疆鏍峰紡鐨勫嚱鏁�
       function setStyle(selector, style) {
           document.querySelectorAll(selector)[1].setAttribute("style", style);
       }

       // 澶勭悊鐐瑰嚮浜嬩欢鐨勬牳蹇冨嚱鏁�
       function handleClickCore(e) {
           setStyle("._aigw.x9f619", 'z-index: 0;position: absolute;width: 100%');
           window.webkit.messageHandlers.nativeBridge.postMessage('chat');

           document.querySelectorAll(".x78zum5.x6s0dn4")[0].addEventListener('click', (e) => {
               setTimeout(() => {
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
               }, 300);
           });
           function sendMessage(){
                   console.log('send');
               }
           var time3 = setInterval(() => {

               if (document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")){

                   const button = document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")
                   button.removeEventListener('click', sendMessage);
                   button.addEventListener('click', sendMessage);
           }
           },200)
           if (document.getElementById("backleftid")) {
               document.getElementById("backleftid").remove();
           }
           insertBackLeftDiv();
           document.getElementById("backleftid").addEventListener('click', (e) => {
               setStyle("._aigw.x9f619", 'min-Width: 100%;');
               window.webkit.messageHandlers.nativeBridge.postMessage('list');
           });

           handleFooterClick();
       }

       // 澶勭悊鐗瑰畾 div 鐐瑰嚮鐨勫嚱鏁�
       function handleDivClick(div) {
           div.addEventListener('click', (e) => {
               document.querySelectorAll("div._aigv._aigw._aigx")[0].setAttribute("style", 'display:none');
               var timer = setInterval(() => {
                   if (document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0]) {
                       document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0].setAttribute("style",'min-width:auto;');
                       clearInterval(timer);
                   }
               }, 300);
           });
       }

       // 鎻掑叆鐗瑰畾 div 鐨勫嚱鏁�
       function insertBackLeftDiv() {
           document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
                                                                                      "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
       }

       // 澶勭悊椤佃剼鐐瑰嚮鐨勫嚱鏁�
       function handleFooterClick() {
           var foot = document.getElementsByTagName("footer")[0];
           foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
               setTimeout(() => {
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
               }, 300);
           });
       }

       // 澶勭悊鐗瑰畾.bugiwsl0 鍏冪礌鐐瑰嚮鐨勫嚱鏁�
       function handleBugiwsl0Click(item) {
           item.addEventListener('click', (e) => {
               document.querySelectorAll('._2Ts6i._3RGKj._318SY')[0].setAttribute("style", 'flex:0;');
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3].setAttribute("style", 'flex:0;');
               }

               var timer = setInterval(() => {
                   if (document.querySelectorAll('.HP5-u')[0]) {
                       document.querySelectorAll('.HP5-u')[0].setAttribute("style",'min-width:auto;');
                       if (document.querySelectorAll('.HP5-u')[1]) {
                           document.querySelectorAll('.HP5-u')[1].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[2]) {
                           document.querySelectorAll('.HP5-u')[2].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[3]) {
                           document.querySelectorAll('.HP5-u')[3].setAttribute("style",'min-width:auto;');
                       }
                       // document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
                   }

                   if (!document.querySelectorAll('.bugiwsl0.fooq7fky')[2]) {
                       clearInterval(timer);
                   }
               }, 300);
           });
       }

       // 灏佽鐨� handleClicks 鍑芥暟
       function handleClicks() {
           querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
       }
       // 鐐瑰嚮璺宠浆
       handleClicks()
       // 涓哄悇绉嶅厓绱犳坊鍔犱簨浠剁洃鍚�
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.xdxn8r.xmuu9lm.x1690sq9.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       });
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 0);
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 1);


       document.querySelector(".x1n2onr6.xh8yej3.lexical-rich-text-input").addEventListener('mouseout', () => {
           setTimeout(handleClicks, 50);
       });
       document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
                                                                                   (
                                                                                    e) => {
                                                                                        setTimeout(() => {
                                                                                            document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
                                                                                            .addEventListener('click', (e) => {
                                                                                                setTimeout(() => {
                                                                                                    document.querySelector('._3J6wB')
                                                                                                    .setAttribute("style",
                                                                                                                  "width:auto;")
                                                                                                    document.querySelector('._3ev9-')
                                                                                                    .setAttribute("style",
                                                                                                                  "min-width:auto;")

                                                                                                    document.querySelector(
                                                                                                                           'div[data-testid="popup-controls-ok"]'
                                                                                                                           ).addEventListener('click', (
                                                                                                                                                        e) => {
                                                                                                                                                        })
                                                                                                }, 300)
                                                                                            })
                                                                                        }, 300)
                                                                                    })



   }
}, 200)
