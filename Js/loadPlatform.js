function checkBroswerPlatform(){
    const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobile/));
    if (isMobile != false){
        console.log("mobile detected");
        document.location='mobile.html';
    } else{
        document.location='desktop.html';
    }
}