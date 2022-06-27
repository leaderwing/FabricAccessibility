define(function() {
  return {
    signOutCallback : null,
    isSignoutVisible : true,
    compPreShow : function(){
      this.setActions();
      this.view.imgSignOut.src="signout.png";
      this.hideSigOut(640);
      this.hideSigOut(1111);
      this.accessibilityConfigurations();
    },
    accessibilityConfigurations: function() {
      this.view.accessibilityConfig = {
      "a11yARIA": {
        "role": "banner"  
      }
      };
     
      this.view.imgSignOut.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": -1  
        }
      };
      this.view.imgLogOut.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": -1  
        }
      };
      this.view.FlexGroup0if2a45911a0041.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
      this.view.FlexGroup0if2a45911a0041.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
       this.view.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
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
//     onBreakpointChange: function (event, width) {
// //       alert("onBreakpointChange: " + width);
//       if (width === 640){
// //        this.view.lblHeaderMobile.isVisible = true;
//         this.view.flxBottomMain.width = "100%";
//         this.view.flxTopMain.width = "100%";
//         this.view.flxOnboarding.isVisible = true;
//         this.view.imgLogo.isVisible = true;
//         this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = this.isSignoutVisible;
//         this.view.flxSignOut.isVisible = false;
//         this.view.btnSignOut.isVisible = false;
//         this.view.flxSignOut.right = "20dp";
//         this.view.btnSignOut.right = "20dp";
//       }
//       else if (width === 1024){
//         this.view.lblHeaderMobile.isVisible = false;
//         this.view.flxBottomMain.width = "100%";
//         this.view.flxTopMain.width = "100%";
//         this.view.flxOnboarding.isVisible = true;
//         this.view.imgLogo.isVisible = true;
//         this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = false;
//         this.view.flxSignOut.isVisible = this.isSignoutVisible;
//         this.view.btnSignOut.isVisible = this.isSignoutVisible;
//         this.view.imgLogo.left = "89dp";
//         this.view.flxSignOut.right = "24dp";
//         this.view.btnSignOut.right = "24dp";
//         this.view.flxOnboarding.left = "83dp";
//       }
//       else if(width === 1366) {
//         this.view.lblHeaderMobile.isVisible = false;
//         this.view.flxBottomMain.width = "100%";
//         this.view.flxTopMain.width = "100%";
//         this.view.flxOnboarding.isVisible = true;
//         this.view.imgLogo.isVisible = true;
//         this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = false;
//         this.view.flxSignOut.isVisible = this.isSignoutVisible;
//         this.view.btnSignOut.isVisible = this.isSignoutVisible;
//         this.view.imgLogo.left = "110dp";
//         this.view.flxSignOut.right = "83dp";
//         this.view.btnSignOut.right = "83dp";
//         this.view.flxOnboarding.left = "110dp";
//       }
      
//         else if(width >= 1366){
//         this.view.flxTopMain.width = "1200px";
//         this.view.flxBottomMain.width = "1200px";
//         this.view.flxTop.centerX = "50%";
//         this.view.flxBottom.centerX = "50%";
//         this.view.lblHeaderMobile.isVisible = false;
//         this.view.flxOnboarding.isVisible = true;
//         this.view.imgLogo.isVisible = true;
//         this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = false;
//         this.view.flxSignOut.isVisible = this.isSignoutVisible;
//         this.view.btnSignOut.isVisible = this.isSignoutVisible;
//         this.view.imgLogo.left = "10%";
//         this.view.flxSignOut.right = "83dp";
//         this.view.btnSignOut.right = "83dp";
//         this.view.flxOnboarding.left = "10%";
// //         alert("else 1366: " + width);
//       }
      
//       else{
//         this.view.flxTopMain.width = "100%";
//         this.view.flxBottomMain.width = "100%";
// //          this.view.flxTop.centerX = "50%";
// //         this.view.flxBottom.centerX = "50%";
//         this.view.lblHeaderMobile.isVisible = false;
//         this.view.flxOnboarding.isVisible = true;
//         this.view.imgLogo.isVisible = true;
//         this.view.flxTop.isVisible = true;
//         this.view.flxSignOutMobile.isVisible = false;
//         this.view.flxSignOut.isVisible = this.isSignoutVisible;
//         this.view.btnSignOut.isVisible = this.isSignoutVisible;
//         this.view.imgLogo.left = "83dp";
//         this.view.flxSignOut.right = "83dp";
//         this.view.btnSignOut.right = "83dp";
//         this.view.flxOnboarding.left = "83dp";
// //         alert("else last: " + width);
//       }

//       this.hideSigOut(640);
//       this.hideSigOut(1111);
//     },
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
    },
    
  };
});