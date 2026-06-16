/*
Function: annotateSPC(var1, var2, var3)
Description: To display SPC Data Value Annotation page when data point clicked 
Usages: EXSM_InlineSPC.SNIP_SPCChart
*/
function annotateSPC(var1, var2, var3) {
    let replaceVar2 = var2.replace(/\|/g, ";");
    window.parent.document.querySelector(".spcDataPointId").firstElementChild.value = var1 + '_' + replaceVar2 + '_' +var3;
    window.parent.document.getElementsByClassName('mx-name-annotateButton')[0].click();
}