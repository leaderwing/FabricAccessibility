define(function() {
  var skins = {
    selectedSkin: "flxBtnSelected",
    UnselectedSkin: "flxBtnUnselected",
    disablesSkin : "flxBtnDisabled"
  };
  var errorComp;
  return {
    callback : null,
    selectedKey : null,
    mapErrorComp: function(errorWidget){
      errorComp = errorWidget;
    },
    compPreShow: function () {
      this.setActions();
      this.setDefaultSkins();
      /*To show and hide error(if any) use the below functions
          errorComp.hideError();
         errorComp.showError("select something"); */
      this.accessibilityconfigurations();
    },
    accessibilityconfigurations:function() {
      this.view.flxButtons.accessibilityConfig = {
        "a11yARIA": {
          "role": "radiogroup"
        }
      };
      this.view.flxYes.accessibilityConfig = {
        "a11yARIA": {
          "role": "radio",
          "aria-checked": "false",
        }
      };
      this.view.flxNo.accessibilityConfig = {
        "a11yARIA": {
          "role": "radio",
          "aria-checked": "false",
        }
      };
         this.view.flxButtons.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
          this.view.imgtickNo.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
       this.view.imgtickYes.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    },
    setActions: function () {
      var scope = this;
      this.view.flxYes.onClick = function(){
        scope.onOptionSelection(1);
//         scope.view.flxYes.accessibilityConfig = {
//           "a11yARIA": {
//             "role": "radio",
//             "aria-checked": "true",
//             "tabindex": "0"
//           }
//         };
//         scope.view.flxNo.accessibilityConfig = {
//           "a11yARIA": {
//             "role": "radio",
//             "aria-checked": "false",
//           }
//         };
      };
      this.view.flxNo.onClick = function(){
        scope.onOptionSelection(0);
//         scope.view.flxYes.accessibilityConfig = {
//           "a11yARIA": {
//             "role": "radio",
//             "aria-checked": "false",
//           }
//         };
//         scope.view.flxNo.accessibilityConfig = {
//           "a11yARIA": {
//             "role": "radio",
//             "aria-checked": "true",
//           }
//         };
      };
    },
    onOptionSelection : function(opt){
      this.setDefaultSkins();
      if(opt === 1){
        this.view.flxYes.skin = skins.selectedSkin;
        this.view.imgtickYes.isVisible = true;
        this.selectedKey = kony.i18n.getLocalizedString("kony.nuo.common.Yes");
      }
      else{
        this.view.flxNo.skin = skins.selectedSkin;
        this.view.imgtickNo.isVisible = true;
        this.selectedKey = kony.i18n.getLocalizedString("kony.nuo.common.No");
      }
      if(this.callback!== null){
        this.callback(this.selectedKey);
      }
    },
    setDefaultSkins : function(){
      this.view.flxYes.skin = skins.UnselectedSkin;
      this.view.flxNo.skin = skins.UnselectedSkin;
      this.view.imgtickYes.isVisible = false;
      this.view.imgtickNo.isVisible = false;
      //this.view.lblYes.toolTip=kony.i18n.getLocalizedString("kony.nuo.common.Yes");
      //this.view.lblNo.toolTip =kony.i18n.getLocalizedString("kony.nuo.common.No");
      this.selectedKey = null;
      this.view.imgtickYes.src = "tickmark.png";
      this.view.imgtickNo.src = "tickmark.png";
      this.view.flxYes.setEnabled(true);
      this.view.flxNo.setEnabled(true);
    },
    onBreakpointChange: function (event, width) {
      if (width === 640) {
        this.view.flxNo.left = "10dp";
      }
      else{
        this.view.flxNo.left = "20dp";
      }
    },
    setSelectedKey : function(option){
      if(option){
        option = option.toLowerCase();
      }
      if(option === "yes"){
        this.onOptionSelection(1);
      }
      else if(option === "no"){
        this.onOptionSelection(0);
      }
    },
    getSelectedKey : function(){
      return this.selectedKey;
    },
    //key1 and key2 should be i18n keys
    setButtonKeys : function(yesText,noText){
      this.view.lblYes.text = kony.i18n.getLocalizedString(yesText);
      this.view.lblNo.text = kony.i18n.getLocalizedString(noText);
    },
    // Please call form level forceLayout after calling this function
    setDisabledBtns : function(opt){
      this.view.flxYes.skin = skins.disablesSkin;
      this.view.flxNo.skin = skins.disablesSkin;
      this.view.flxYes.setEnabled(false);
      this.view.flxNo.setEnabled(false);
      this.view.imgtickYes.src = "tickmarkdisabled.png";
      this.view.imgtickNo.src = "tickmarkdisabled.png";
      if(opt === kony.i18n.getLocalizedString("kony.nuo.common.Yes")){
        this.view.imgtickYes.isVisible = true;
        this.view.imgtickNo.isVisible = false;
      }
      else if(opt === kony.i18n.getLocalizedString("kony.nuo.common.No")){
        this.view.imgtickYes.isVisible = false;
        this.view.imgtickNo.isVisible = true;
      }
      else{
        this.selectedKey = null;
        this.view.imgtickYes.isVisible = false;
        this.view.imgtickNo.isVisible = false;
      }
    },
  };
});