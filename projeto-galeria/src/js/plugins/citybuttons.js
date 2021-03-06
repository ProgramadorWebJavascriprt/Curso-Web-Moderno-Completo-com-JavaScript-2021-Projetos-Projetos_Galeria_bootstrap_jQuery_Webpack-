import $ from 'jquery'
import { onLoadHTmlSuccess } from '../core/includes'
const duration = 30
 function filterBycity(city){   
     $('[wm-city]').each(function(i, e){
        const isTarget = $(this).attr('wm-city') === city  || city === null
        if(isTarget){
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else{ 
            $(this).fadeOut(duration, () =>{
                $(this).parent()
            } )
        }
     })      

}
$.fn.citybuttons = function(){
   
const cities = new Set
$('[wm-city]').each(function(i, e){
    cities.add($(e).attr('wm-city')) 
})
const btns = Array.from(cities).map(city => {
    const btn = $ ('<button>')
    .addClass(['btn, btn-info']).html(city)
    btn.click(e => filterBycity(city))
    return btn 

})
const btnAll = $('<button>')
 .addClass(['btn', 'btn-info', 'active']).html(Todas)
 btnAll.click(e=> filterBycity(null))
 btns.push(btnAll)

 const btnGroup = $ ('<div>').addClass(['btn-group'])
 btnGroup.append(btns)
 $(this).html(btnGroup)
 return this
}
onLoadHTmlSuccess(function(){
     $('[ wm-city-buttons ]').citybuttons()
})





