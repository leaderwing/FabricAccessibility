define([], function() {
  //var orientationHandler = new OrientationHandler2();
  var responsiveUtils = new ResponsiveUtils();
  var skinsDW = {
    "link": "btnLink15",
    "copyright": "lblBody13"
  };
  var skinsM = {
    "link": "btnLink13",
    "copyright": "lblBody11"
  };
  return {
    postshow : function(){

    },
    preShowfunction: function() {
      this.view.flxFooterMain.accessibilityConfig = {
          "a11yARIA": {
            "role": "contentinfo",
            "tabindex": -1
          }
        };
      this.view.btnContactUs.accessibilityConfig = {
          "a11yARIA": {
            "role": "link",
            "tabindex": 0
          }
        };
      this.view.btnPrivacy.accessibilityConfig = {
          "a11yARIA": {
            "role": "link",
            "tabindex": 0
          }
        };
      this.view.btnTermsAndConditions.accessibilityConfig = {
          "a11yARIA": {
            "role": "link",
            "tabindex": 0
          }
        };
      this.view.btnFaqs.accessibilityConfig = {
          "a11yARIA": {
            "role": "link",
            "tabindex": 0
          }
        };
      
    },
    onBreakpointChange: function (event, width) {
			var skinJSON = {};
			//if(width==640 || orientationHandler.isMobile){
			if (width <= 640 || responsiveUtils.isMobile) {
// 				this.view.flxFooterMenu.layouttype = 1;
//                 this.view.flxDesktopLinks.isVisible = false;
//                 this.view.btnContactUs.left = "";
// 				this.view.btnContactUs.centerX = "50%";
// 				this.view.width = "100%";
// 				this.view.flxFooterMenu.left = "";
// 				this.view.flxFooterMenu.centerX = "50%";
// 				this.view.lblCopyright.centerX = "50%";
// 				this.view.lblCopyright.left = "";
// 				this.view.lblCopyright.contentAlignment = 5;
// 				skinJSON = skinsM;
               this.view.btnContactUs.skin = "btnLink13";
               this.view.btnPrivacy.skin = "btnLink13";
               this.view.btnTermsAndConditions.skin = "btnLink13";
               this.view.btnFaqs.skin = "btnLink13";
              
               this.view.flxVBar2.left='5dp';
               this.view.btnPrivacy.left='5dp';
              this.view.flxVBar3.left='5dp';
              this.view.btnTermsAndConditions.left='5dp';
              this.view.flxVBar4.left='5dp';
              this.view.btnFaqs.left='5dp';
              this.view.forceLayout();
			}
			//else if(width==1024 || orientationHandler.isTablet){
			else if (width === 1024 || responsiveUtils.isTablet) {
// 				this.view.flxFooterMenu.layouttype = 2;
//                 this.view.flxDesktopLinks.isVisible = true;
//                 this.view.btnContactUs.left = "0dp";
//                 this.view.btnContactUs.centerX = "";
// 				this.view.width = "100%";
// 				this.view.flxFooterMenu.left = "3%";
// 				this.view.flxFooterMenu.centerX = "";
// 				this.view.lblCopyright.centerX = "";
// 				this.view.lblCopyright.left = "3%";
// 				this.view.lblCopyright.contentAlignment = 4;
// 				skinJSON = skinsDW;
               this.view.btnContactUs.skin = "btnLink15";
               this.view.btnPrivacy.skin = "btnLink15";
               this.view.btnTermsAndConditions.skin = "btnLink15";
               this.view.btnFaqs.skin = "btnLink15";
              
              this.view.flxVBar2.left='20dp';
               this.view.btnPrivacy.left='20dp';
              this.view.flxVBar3.left='20dp';
              this.view.btnTermsAndConditions.left='20dp';
              this.view.flxVBar4.left='20dp';
              this.view.btnFaqs.left='20dp';
              this.view.forceLayout();
			} else if (width === 1366) {
// 				this.view.flxFooterMenu.layouttype = 2;
//                this.view.flxDesktopLinks.isVisible = true;
//                this.view.btnContactUs.left = "0dp";
// 				this.view.btnContactUs.centerX = "";
// 				this.view.width = "100%";
// 				this.view.flxFooterMenu.left = "83dp";
// 				this.view.flxFooterMenu.centerX = "";
// 				this.view.lblCopyright.centerX = "";
// 				this.view.lblCopyright.left = "83dp";
// 				this.view.lblCopyright.contentAlignment = 4;
// 				skinJSON = skinsDW;
               this.view.btnContactUs.skin = "btnLink15";
               this.view.btnPrivacy.skin = "btnLink15";
               this.view.btnTermsAndConditions.skin = "btnLink15";
               this.view.btnFaqs.skin = "btnLink15";
              
              this.view.flxVBar2.left='20dp';
               this.view.btnPrivacy.left='20dp';
              this.view.flxVBar3.left='20dp';
              this.view.btnTermsAndConditions.left='20dp';
              this.view.flxVBar4.left='20dp';
              this.view.btnFaqs.left='20dp';
              this.view.forceLayout();
			} else {
// 				this.view.flxFooterMenu.layouttype = 2;
//                  this.view.flxDesktopLinks.isVisible = true;
//                 this.view.btnContactUs.left = "0dp";
// 				this.view.btnContactUs.centerX = "";
// 				this.view.width = "1366dp";
// 				this.view.flxFooterMenu.left = "83dp";
// 				this.view.flxFooterMenu.centerX = "";
// 				this.view.lblCopyright.centerX = "";
// 				this.view.lblCopyright.left = "83dp";
// 				this.view.lblCopyright.contentAlignment = 4;
// 				skinJSON = skinsDW;
      }
//             this.view.centerX = "50%";
// 			this.view.lblCopyright.skin = skinJSON.copyright;
//             this.view.btnContactUs.focusSkin = skinJSON.link;
// 			this.view.btnContactUs.skin = skinJSON.link;
// 			this.view.btnPrivacy.skin = skinJSON.link;
//             this.view.btnPrivacy.focusSkin = skinJSON.link;
// 			this.view.btnTermsAndConditions.skin = skinJSON.link;
//             this.view.btnTermsAndConditions.focusSkin = skinJSON.link;
// 			this.view.btnFaqs.skin = skinJSON.link;
//             this.view.btnFaqs.focusSkin = skinJSON.link;
			this.view.forceLayout();
		},
    setPosition: function(callback){
      this.view.forceLayout();
      var mainheight = 0;
      var screenheight = kony.os.deviceInfo().screenHeight;
      mainheight = this.view.customheader.frame.height + this.view.flxMain.frame.height;
      var diff = screenheight - mainheight;
      if (mainheight < screenheight) {
        diff = diff - this.view.flxFooter.frame.height;
        if (diff > 0) {
          this.view.flxFooter.top = mainheight + diff + "dp";// ViewConstants.POSITIONAL_VALUES.DP;
        } else {
          this.view.flxFooter.top = mainheight + + "dp"; //ViewConstants.POSITIONAL_VALUES.DP;
        }
      } else {
        this.view.flxFooter.top = mainheight +"dp"; // ViewConstants.POSITIONAL_VALUES.DP;
      }
      this.view.forceLayout();

      if(callback!==null || callback!==undefined){
        callback();
      }
    },
    /**
     * sets the min height of the flxMain flex
     * @param {Object} formScope
     */
    setMinHeight: function (mainFlex) {
      if (this.screenHeightGbl === kony.os.deviceInfo().screenHeight) {
        //return if browser is resized horizontally
        return;
      }
      this.screenHeightGbl = kony.os.deviceInfo().screenHeight;
      var minHeight = this.screenHeightGbl - 270;
      if (kony.application.getCurrentBreakpoint() === 640) {
        minHeight = minHeight + 60;
      }
      mainFlex.minHeight = minHeight + "dp";
    },

    /**
        * Method to laad Information Module and show Locate us
        * @memberof customFooterController
        * @param {void}  - None
        * @returns {void} - None. 
        * @throws Exception - None
        */
    showLocateUsPage : function() {
      //       var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      //       locateUsModule.presentationController.showLocateUsPage();
    },

    /**
        * Method to laad Information Module and show FAQs
        * @memberof customFooterController
        * @param {void}  - None
        * @returns {void} - None. 
        * @throws Exception - None
        */
    showFAQs : function(){
      //       var InformationContentModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationContentModule");
      //       InformationContentModule.presentationController.showFAQs();
    },
    /**
        * Method to laad Information Module and show terms and conditions page
        * @memberof customFooterController
        * @param {void}  - None
        * @returns {void} - None. 
        * @throws Exception - None
        */
    showTermsAndConditions:function(){
      //       var termsAndConditionModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TermsAndConditionsModule");
      //       termsAndConditionModule.presentationController.showTermsAndConditions(OLBConstants.TNC_FLOW_TYPES.Footer_TnC);
    },
    /**
        * Method to laad Information Module and show ContactUs Page.
        * @memberof customFooterController
        * @param {void}  - None
        * @returns {void} - None. 
        * @throws Exception - None
        */

    showContactUsPage:function(){
      //       var InformationContentModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationContentModule");
      //       InformationContentModule.presentationController.showContactUsPage();
    },
    /**
        * Method to laad Information Module and show privacy policy page.
        * @memberof customFooterController
        * @param {void}  - None
        * @returns {void} - None. 
        * @throws Exception - None
        */

    showPrivacyPolicyPage:function(){
      //       var InformationContentModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationContentModule");
      //       InformationContentModule.presentationController.showPrivacyPolicyPage();
    }

  };
});