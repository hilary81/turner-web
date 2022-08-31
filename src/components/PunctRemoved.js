

function PunctRemoved(a){
    const result=a.replace(/[.,\\/#!$%^&\\*;:{}=\-_`~()]/g," ");
  return result
   
 }
module.exports=PunctRemoved;
