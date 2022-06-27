define(function() {
  return {
    signOutCallback : null,
    isSignoutVisible : true,
    compPreShow : function(){
      this.setActions();
      this.view.imgSignOut.src="signout.png";
    },
    setActions : function(){
      this.view.flxSignOut.onClick = this.onSignOut;
      this.view.btnSignOut.onClick = this.onSignOut;
      this.view.flxSignOutMobile.onClick = this.onSignOut;
    },
    onSignOut : function(){
      if(this.signOutCallback!== null){
        this.signOutCallback();
      }
    },
    onBreakpointChange: function (event, width) {
      if (width === 640){
//         this.view.lblHeaderMobile.isVisible = true;
        this.view.flxBottomMain.width = "100%";
        this.view.flxTopMain.width = "100%";
        this.view.flxOnboarding.isVisible = true; // this.view.flxOnboarding.isVisible = false; 
        this.view.imgLogo.isVisible = true; // this.view.imgLogo.isVisible = false;
        this.view.flxTop.isVisible = true; //this.view.flxTop.isVisible = false;
//         this.view.flxSignOutMobile.isVisible = this.isSignoutVisible;
//         this.view.flxSignOut.isVisible = false;
//         this.view.btnSignOut.isVisible = false;
//         this.view.flxSignOut.right = "20dp";
//         this.view.btnSignOut.right = "20dp";
        this.view.imgLogo.left = "10dp";
        this.view.flxOnboarding.left = "5dp";
      }
      else if (width === 1024){
//        this.view.lblHeaderMobile.isVisible = false;
        this.view.flxBottomMain.width = "100%";
         this.view.flxTopMain.width = "100%";
        this.view.flxOnboarding.isVisible = true;
        this.view.imgLogo.isVisible = true;
        this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = false;
//         this.view.flxSignOut.isVisible = this.isSignoutVisible;
//         this.view.btnSignOut.isVisible = this.isSignoutVisible;
//         this.view.imgLogo.left = "31dp";
//         this.view.flxSignOut.right = "24dp";
//         this.view.btnSignOut.right = "24dp";
        this.view.flxOnboarding.left = "83dp";
        this.view.imgLogo.left = "83dp";
      }
      else if(width === 1366) {
//         this.view.lblHeaderMobile.isVisible = false;
        this.view.flxBottomMain.width = "100%";
         this.view.flxTopMain.width = "100%";
        this.view.flxOnboarding.isVisible = true;
        this.view.imgLogo.isVisible = true;
        this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = false;
//         this.view.flxSignOut.isVisible = this.isSignoutVisible;
//         this.view.btnSignOut.isVisible = this.isSignoutVisible;
        this.view.imgLogo.left = "83dp";
//         this.view.flxSignOut.right = "83dp";
//         this.view.btnSignOut.right = "83dp";
        this.view.flxOnboarding.left = "83dp";
        
      }
      else{
        this.view.flxTopMain.width = "1140px";
        this.view.flxBottomMain.width = "1140px";
      //  this.view.flxTop.centerX = "50%";
       // this.view.flxBottom.centerX = "50%";
//         this.view.lblHeaderMobile.isVisible = false;
        this.view.flxOnboarding.isVisible = true;
        this.view.imgLogo.isVisible = true;
        this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = false;
//         this.view.flxSignOut.isVisible = this.isSignoutVisible;
//         this.view.btnSignOut.isVisible = this.isSignoutVisible;
        this.view.imgLogo.left = "83dp";
//         this.view.flxSignOut.right = "83dp";
//         this.view.btnSignOut.right = "83dp";
        this.view.flxOnboarding.left = "83dp";
      }
    },
    hideSigOut : function(width){
      this.isSignoutVisible = false;
      if(width === 640){
        this.view.flxSignOutMobile.isVisible = false;
      }
      else{
        this.view.flxSignOut.isVisible = false;
        this.view.btnSignOut.isVisible = false;
      }
    },
    showSignOut: function(width){
      this.isSignoutVisible = true;
      if(width === 640){
        this.view.flxSignOutMobile.isVisible = true;
      }
      else{
        this.view.flxSignOut.isVisible = true;
        this.view.btnSignOut.isVisible = true;
      }
    }
  };
});