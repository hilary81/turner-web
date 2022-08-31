

function PunctRemoved(a){
    // eslint-disable-next-line no-useless-escape
    const result=a.replace(/[.,\/#!$%^&\\*;:{}=\-_`~()]/g," ");
  return result
   
 }
module.exports=PunctRemoved;
