

const PunctRemoved = (a) => {
    const result=a.replace(/[.,\\/#!$%^&\\*;:{}=\-_`~()]/g," ");
  return result
   
 }
export default PunctRemoved
