// segunda-feira,03/01/2022 as 14:00:00 h+|-
import $, { param } from 'jquery' 

 const loadHTmlSuccessCallbacks = []
 export function onLoadHTmlSuccess(callback){
     if(!loadHTmlSuccessCallbacks.includes(callback)){
        loadHTmlSuccessCallbacks.push(callback)
      }
    }
function LoadIncludes(parent){
    if(!parent) parent= 'body'
    $(parent).find('[wm-include]').each(function(i, e )
    {
  const url = $(e).attr('wm-include')
      $.ajax({
           url,
           success(data){
               $(e).html(data) 
               $(e).removeAttr('wm-include')
               loadHTmlSuccessCallbacks.forEach(callback => callback(data))
               LoadIncludes(e)
             
                

           }  
      })
    })
}
LoadIncludes()