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
               "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAU30lEQVR4Ad1aC3SURZb+/n4mne7OAxJCeMkrARke8hCEEQVxBN1lh9VVV1bPuDrjijs6O+sccd11ObrMnDlHOTu64ILjMLpHz3F9MOg44+ADfAIKyCsBFEiAEEgnkaSTTrrTj3+/W3//3X93OiGwPqeSv/+/qm7duvfWrVu3bpWGfqYJ1f/rQnHrPOi2xQkNF2pABZvK4+0nii8LrIOIG3Q+Nh010BKv4EzR5uoJ13f3p0Py0XeaEFhfjlj8QXawlJD+vqG/MbVBMvYsHPaHqstuPd0XVb0KYMxnj7mdBfkPQNd/CmgFaSQUBazNvtH5EEldFQ11rTw89u5Imof0l5WTVOmEwOryRNS+gYzOShV+qz/0bTZnfEl12V09tKGHAKpOPDlJ0xKvAfpQTUZaIDjIOv++5fl66NrVB4fdsc86lhkCmFC7ujzusH1Mroemgb7RKm6Mjholk+I+6a23x+IzqkemNcFmNpM5H3fYN7D5UM57DrkgUoNvfP9/8kqFBJ+B8wvH3396h0Ydtg3Cq2KOPw7zw+620+AlZmkpnRAhUOnPIy/TRReiEjqXDTcG2Qvgs7thI67OeBRNeieaE51cUQW/dCDP+fdn8NC/9uxylia8Ag9KO8WeqH7MjsPMFwhBinipZTqXvLQbiDwsyB+FOXnDMNldjkGu3G5CMBZGdaQJ28In8EbnURxOtKq+DIEYfZ9r/+cAH3LEMUamghJA1fE1azgCd6a77f+XMC3PZEcZbvddhHneUXDZ7P1HQEhpv6frNNa3fYLXw0cAuy2pGeeE5hyBtScODV+2TBMPL+ZraiIRfqv0haiz5QWmAh7cX3wpvucdA010PJkaIm3Y3lWHmkgj6qOtaNPDnBE6vDYXyh1+VLnKMCN/OKryyjL6qelqxEMtW7Az1gibTQRhmKn+0HM2erPqg86OslJt3PHHr+JUfd0kvL/vRCKOxe5KrCidD5/DsCld8W5saNuH54O7sDvSkJxgfWMcZi/Ctf7JWFo4DWUunwKOkaD1Z3ZgVdtWxO2mnegbz/nUcrwWapV1v1pNMS/rLwIZCcR1LC+ag1uLp6nRS5DgF9t245GWt9GYENf83FMe7fFtRTNxV8mlKEgKdGvHcdwVeBXtWkxpl3UEz72HHC10fY02tu6xzZyFl+eo7lGk1JDM/rzkClxXNFHVB6Lt+OmpDXgvXNsD/nwKRlAjfjX4WlzkMVyR6s7TuOX0SwhqUQohtWqfD+ocbbQt3EDpsqM7axLm9XgCywvnpJg/QMO1+NiTXxjzQsSxeCuur/8tXmk1HLYJnnKsG/RXcMU5TJx2X2QS3u0lP1n4Cy7Brr4REzSRwOL8StxXdrlSe2H+xvpn0KyH+m56HrVxEvSnjgMY7ijG+LxyVLj8XF7z8VYXV+q0Y3IemLOaaHDbyBkX6gRren90PYHBugcryhYo5kXtbz35HFr1riyMX1yWMQf8rHEjtnYYU+v64klY4BpJLYxRFUQTeqe333Xk3aaMmhg2eZhy5qn6Dwy8HH5HHsTgyZw/lWhX8F/mT0zT8WPO/+Yod7Uc+Qc5AO44x0ymY1/0no0fS71yhQ3WFfeKn4w8gSfRybnKV6XqxNrnMnhjHQNwlXc8HFlOUIJT573QUXzSXc/2Gi6gWl/tu5DOUsoLV3jFR9gWqsNHkWMZat6UCOHnTZuwqmIJKtyFuNk/Bes6dtBHsIvzrJL5Tg1isrw/eW3M0UdUeyVRqp3a8hKBKeFELI7VZYuxqGg8ZJ2/rPbxHktdsZ6Hd0bfjUBXKzriYbN79XZxeRvrG4xratfiZKwV746+B23hEILxzgw4O+wY7xuC6449hd2xUxl1VAS8NuxHmOAZjMbudsw9+gRiTpFT2mPMSX82PznyDpnfqcSOqFzpLEdFfPsrfJWqbENwXw/mpWIMR7/QkY8Z+x9Gh91qqYmNAtw3bQUmuspB/xsDnV5c+cmjaIQIQPoiVdJrPI6tk+7HZOdg7I6KEyXlRuKeDGvPfIjHPNdyb+HDfO41/tR9BLAJ7Wk4QWelvz/5PhdWsfxXFoyFy2749s+37TJpynjLCEmy+fIwprgC2yYvx84p/4LZpVVw+j3cVNKtJowJZy/Ig4vlr174j9g75d/wD8PmEY5RNy7KmnCbI/2xowatUUNrFvnHqVXJ1NIc4P0uUkZQEOV8aPAuLRipkDV0txnu7VlQiyMz3F2Mwa5CVDlKM6CTclKD5oprmOYdjoHcLU5x0xUhDX2lbi2BLSHZsALfLRhFb9TQXLExOWnvjaescmqAdCwCEITGt5kXtZySP0T6xPbOYxnapgpz/NSEGvB+8yFsbzmMj4K1OSCMonAiipdP7cDOM0exqbm6VzhrxVZuriSVuDw0pkVJmqUkN/3Z/OTK0wakJZ/97de4c3MbkfCaSI94ovRspDQKNNnDuKFuPfvSYffIJokqbak3m8Bpx92nXlLepS3PqdxcAcsFarax0jDGOQB10TY1r0wWrPRLm/7kM9cisyejNcrt6WCGbGl7S/WRM4hSWx4d8tdoQ2b02aHbUOzwoq6rBadIcJgRoZUVf4kWRoSshs5OzitcxTgWbu6tG26ryXAylROnHtGRJ9tlSiDMKXI+m6UMGyC4RWrGwyMfm7HNlXLZz/eW6hHED2vWI9HVjeKwPePxstnyT5/HR93H8bkWxq3VTyHS2YXiiCMDzhe24aHDG/B252cZgrH22ZZIe54+e54oPvI1J14cegvmuUciwUFI02/o0tny1ID0MmiqktGpDusSkbAul1aq+G2jOr8VPY43T3NpykTCFUBT9Ta3oWwfcon74PTLCi5h6Vu0QSMemQ69JWHYTGqtYF/tHBiJI/yy4i/wO26gftmyGTFZTQiYRUrOvMOK1ERuvHUGMNPHawVaWhsy4Yzc3xXPwN8WTYVTywyHRem3vxjcjaeDH8MTd2L3+PvgthvC+HXgQzx8ZpMa8emOIVg/bCl+EXgDz3VwubX4AWZ/Vho64zLVEujWY7i39iX869BF+D636IM4Nf759KuIio+gpGS2zv3OMIIyh0RljKQjEEv7+4MZxuotlaEADw++Bk8ffwenGQqzplKOzooRV+PN4CG000s0mRcYCYKoQSWhnZEwAuE2dIQzPUQrrnKHETGSskAsHXjZEq3FoSNPY/UFN+AS70j8R+lC3Bf4PWOL5MeCIJM/kTG1U0EkoXSu+6k8P0UA7VFj3lW6M9d0C14U6/ncA9jwRNs2/Hf3Tuy1taDafgbrIjuxNridfrsGv04NyhoRa7Y63oi5Navwu5DEAaw16Z6q3GWpzNGIYSyp7dAYRG2whfCj2ufUAMwvrOSeYZpaYZTzlYs/YhJ+HSkZicaw3yQs3/xjfl9nA2YXjsZ0BjB7Sya5NqcDs/IvwPMjb1Ogt9c9h72d9almnXoEL5zcDldymnzYQYPHDhd7JmDmwBGqz2dbd+JALJBqY/2Ynj9MZbu4khwKN4LqxLxBsQi5ifbgZ8dfxm9G34I7Bs7B5tBnqE8EjdmUxZ+YH+HXQTGk+hAFMJmRt6wwH7QfVgIY5x6EIfZCnIxnqniqcfJDi5kiZPukt2bCRGnf/qlpo5K8lNlp9Aa5i3CjbwrmFI5RYIdDARyIkjmhzpqIdn6BsSfZ2V7HOR6j+sqUTcMJvdWMJv9PYBv+vnwOlg2Yg+WNr6rosqCy8mfmjXhAsiNBlbYBzLDg9bYaVSsSvs43OQnZ+2tbZx1u3rMWP9jzJN5oP5gcHwNeYnriHDm8nP185nmr8HHlvSnmFVRafhmdzMwbjhHuElX2x9b9XHqsa1QSP+m1Oez4TctWBDl153MLX2Hzp3jK5k/yNtMwmOulNS+jcLA7gN3B46qHpUXTeNBlWHCjS+M3mtSiUlrggjwPdjibsN0ZQH6+BwN5LCYpJlEcDsE9RXOxYsBV6jtPz1wxDGy5f28rmqUqumLd2Ni6V2mI0CrJpF3eUtZpj2Hj53t4vmLDIsYesuut+YxVwESmsCZ/NIcN6xrfwxr/Um5F/fhB4QysZbzemo50N2HHmVq8Vpn7cGl323EcjjZBp1W+1j8JQ5xFeLDh94g4olY06rs7R+DzItcQXOkbp+pfaN6BVoQ5cs7UyFqRKCGQ8TeCB3DzoFlq4/RrbqW15I5W6q1JG1b9gIgtXSYAlrwa3HAUb1b9BFXecgQYkJhe+6iSdKqRzPX2bky0l/bwA2JEsD8eQNzHuCtxjw57GYF14IC7VcUKysIuODmbHfLQOB53hhD3UMuSJEndxmG3Y0L+YHTGIrhs/yM47ehS5wRG/5n0Sh+qcXcc7467l/TY8N1DjyIuiis4s/gzHCHVSPiWNYEILHlpFLeLzyaIgc842qbqqQL54TKEQjf2JsRAWoSpAChfutSqDfEe8TCKLDRzlES7mt3SI6cHGOxkW01WCAuK5QMWKOYF1eMn30YD3W6blhaQGlELvYp+Ykxw/asLN2GCdwjEhzlBvZFoVzZ/GRM6Wz0kL0+pzYsqxuclmVtSlbH+UHgaVbxnspQJjEW7FCyrDQgLXBLJTb6puK3EmPu7gnVY3bQZWp4hoGxapUlGGQXQEqOwmQpteThBJc2oT8KnTGmuSmks5bMYFJFVQJJY+a8i3cST5ocGXaMEFggHccfhZxB3kdykAHujN0UbyY0njTOdnZzMC2xGTDAnUlruSyQCwxTi3mB3+KQ5ZKrsi/6R7fPyAVfg9pJL1DxvYxjs5kNP4qTWwUFwKP7NOGZOek2COM283DFKalf7BkObzWp5S3tOAWNuWyus3xIVmu0brYp2dZ5AlPtuaxJX8zvuwSixefBOF3eDPTXZCt7n92RXBVZy1CfmG6d1gUgQNx9ch33x09wpyrzvyURvCCWeKaE5YfJUN2MZztx8pmyAKU1zjpp5mf9jPYNUP1u7atV7kM2HSz2jMLdgNOZ4RqpIr1Ts6TyJtZ9/gE2dhxC1bnVVq9w/0s8M9zDcXjwL3+OabU9OtU/a6vDDw7/lyLer7bQR90gHPUz6sumVvNQNYjCnjMt2Q6QVQZ5g2XSD1Wx4h9oAWWgzEUuRfF/C+W82kv3AJt9EVGZdajCbT/YMwRrP9WjhSc7m0KfYyjiihLEkmhTkPkAssAQwKmiVK3lBQvAtYNR5ZN5AE4Va6v6r/k083vgWYi7u1tT6TabEj2Wy0tdbXmAuYyhf6N7efsSgP6kA2e25F8itGqo3qtFsr6H+kp+fPB9QdfxpjrTj/TMHsaX1AMoZzrptyGUoZQxxgLOAJ8gXqceElSM1WUpl15grhenhvRj4CP95chMkwiQBFLkhouZUXzRmIVPckO4lJReRtQReF7dZDGcvOFIBEXPqmuKQfIIOzmz/mFQXER5M7mw7qhh+p+0g7/WcpHdH/EIoO1jT+DYWFk7E4oFT8N2iKhS5DDdYEMgqIpsXaxJ8O4JH8IeWPdjQsgstoKpKVIgBE0PrhBrRGyUG1dRKnxRk56VgrmcsxnPZru0K8LiNGiD2IwmZDS8rBGlPdkJJWfMqCMK6p05sxhYy/EH7ZwjxooK6xCSOTL5BqBArOKLE/krnPmys/QQ2xv0ruX8fm8/jbbq+PmcecdNPp0Vu7A7iKJ2Umq4GhLmrE3zCuN3O6HASl+AzhKAINISQRZ/UW+lVbTn6N5ZMZyNgfeP7xK0glALkgs/YC1jnh3w3ci89e/9KpUEcQmg8TRcfXApSxKmupIgdyb8cWtLDkx4P6S041NmshJMEUy8BJSAFSK1g6F2SiS+bBlWZ/LHWSVHuPPvl3YXZDIr4eFwntJopF7xMsg6pMB8BNgHljN7u4qg46ZE7ONoiBFH3JIwJZ7Y18wpAhCTw3J5KoEQee/KtEZeLz9SCEbiBscRRjPGbJzxW3Ca+bPx95UXFP07eKZjB8Jgsh33At4sjxJNIGJEGfpidCiGm8AwZGrPHWi8wZ8sLjJnM+Ud5o7s7giUDJ2Nx2TSIs3P/iRfxfudhqrqh1qk2AmxJ2f3Jsbqk1DjTV9jFY/YYd5VTvRfIcSNxpnFktT9l994561q2vkCAFMOCic+XmhfsVKQtZ2pQrOVjeuEoLCqcpO4P7g/VIyRnEKShN3oMhsgUR3d+wTgs9H8H0UQMTdEgV5oEbVEcc72VGJ4/UBnsJnWZIyd/++yeO2ZeTJZniBS/yiRzXu4Kv9t2ACdDLbjYPxpTvJwSJTMxwlmCCON+AR7IRjmSBsMclKQ6D3eUYHHhFPx7xfextGw2RNWXlEzDTQNmYaJ7KPzc/HhoqyoLBvOkqYnu+wkKM6UjKTYpwj9oZbvvuYpa83qq9Cv+EJWUOwQDGFm+s3wBlpTNYKzTOBwRNa6PfI5mhsAlouQlY0Pp3hbRzzDTpx2n8C41aap/FCb6hsOZdUPl3daDuOv4M6mAiNlO3gwnLuRV2RWupsjnTcwy8C9SkvnyVb9ldA1BSIh9UfFkXMYbKZN8I+B30pJbUpxaUMf1fXvbYWw6sxc7eGKsi2FmuZcBu5m+UfRdKjGHfsgwToEOXsqew4sbCeUJZ/AVLHUPKFV6Ubbrx2tIQu54lqXzL/tTGSjKX7m9EmXijdQB9OlLGFd0cNkM0Z1u5AFpRAIocqFa1vjk3kHRJmMngpSpwrYjOFVmUxBv8XJFM4yLVmketCcCUx9fpgRQ+tGycjoMcvsgrVtpyK/vy1wBhDEzKYr5o95mYY63TC2202QPIUKyCoo7ewp3TNPFa06rRV0+aCRW5UDz9RaJ4ZLHZEDeqqwfZBFO3V4XpyyTeTGIq4RnwaJmhnz4fdrKYFviSiqgEYOSwpQtUJk/l/w2v9+x0jx7okjTSaaCZkt8zJKh6dI/q696PWGbYY6+cJYhACko23nnJBqR1/g5VK3V5jwUYKqV1ZP6luXrbZp+deP0dcYtbGGWqYcApFAZRcQ3sNYyHaTmW5p4CZXLxhLryJucKCNoZsy3ABYWuy7X9fjDtAkhCSwoh0VFWcW6fmvyIU3XHxZecjEv/ObUAFMQ8hZt0NH9IEGXMtv7LQlro6//O8iBe1aD66HeGDdJPKsATEBU/42rrKNoHt3HxVxZL2R5BZ3GCoowfZUsBfwVfujoIA2yo20gMzV0618JeFs3Y8IL6fs9fZDzf5e1YqHmVi86AAAAAElFTkSuQmCC'/>"
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
