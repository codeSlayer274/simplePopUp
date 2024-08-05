let openClose = true;
function showDiv() {
    if(openClose){
        document.getElementById("mainDiv").classList.add("changeMainDivColor");
        openClose = false;
    }
    else {
        document.getElementById("mainDiv").classList.remove("changeMainDivColor");
        openClose = true;
    }


}
