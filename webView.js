let timer,timer1;
  var cfale = false
  var cfale1 = false
  var cfale2 = false


  timer1 = setInterval(() => {
     if(cfale){

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

    if(cfale1){

       clearInterval(timer)

       return
     }



    var div = document.querySelector("#wa-popovers-bucket").parentNode

    if(div){

     cfale1 = true



     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
   //div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.x1lxuw3u.x1ow4hk9").setAttribute("style",'display:none')
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.x1lxuw3u.x1ow4hk9").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
//
//    div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").setAttribute("style",'font-size:32px;margin-top:20px;')
   div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").innerHTML='Login WAMR on your device'




    div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
  div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";


  var pp = div.querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
     pp.innerHTML = pp.innerHTML.replace("WhatsApp", "WAMR")



     div.querySelector(".x1lliihq").querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8").setAttribute("style",'flex-grow: 0;padding: 0;margin: 0;')

     div.querySelector(".x1lliihq").parentNode.setAttribute("style",'flex-grow: 0;')

      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.x1lxuw3u.x1ow4hk9").insertAdjacentHTML("afterbegin",
                '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 闈炲畼鏂瑰簲鐢� -</div></div>'
            );

       div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1tfhste").remove()
       div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1sy10c2").remove()


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


        if (document.querySelector(".xbyj736")){
            document.querySelector(".xbyj736").style.display = "none";
        }
       if (document.querySelector(".x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl")){
           document.querySelector(".x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl").style.width = '0'
        }

        document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                            0]
        .getElementsByClassName('_aigw')[1].style.minWidth = '100%'
        function querySelectorAllAndHandle(selector, eventType, handler) {
            document.querySelectorAll(selector).forEach(item => {
                item.addEventListener(eventType, handler);
            });
        }

        function setStyle(selector, style) {
            document.querySelectorAll(selector)[1].setAttribute("style", style);
        }

        function handleClickCore(e) {
            setStyle("._aigw.x9f619", 'z-index: 0;position: absolute;width: 100%');

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
            });

            handleFooterClick();
        }

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
        function handleFooterClick() {
            var foot = document.getElementsByTagName("footer")[0];
            foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
                setTimeout(() => {
                    handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
                    handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
                }, 300);
            });
        }

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

        function handleClicks() {
            querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
        }
        handleClicks()
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
