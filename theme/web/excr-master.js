const shopFloorPages = Object.freeze({
  EPROCEDURE: "e-procedure"
});

updatePageStyle();

function updatePageStyle() {
    let zoomscaling = "100%";
    let scrollbar = "thin";
    let pageTitle= "";
    var form = mx.ui.getContentForm();
    if (form) {
       pageTitle = form.title.toLowerCase();
    }
    if(Object.values(shopFloorPages).includes(pageTitle))
    {
        zoomscaling = "150%";
        scrollbar = "none";
    }
    document.documentElement.style.setProperty('--zoom-scaling', zoomscaling);
    document.documentElement.style.setProperty('--scrollbar', scrollbar);
}
