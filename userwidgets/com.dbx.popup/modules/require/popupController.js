define(function() {
  return {
    yesCallback : null,
    noCallback : null,
    mapErrorComp: function(errorWidget){
      errorComp = errorWidget;
    },
    compPreShow: function () {
      this.setActions();
    },
    onBreakpointChange: function (event, width) {
      if (width === 640) {
        this.view.flxPopUp.minHeight = "";
        this.view.flxPopUp.maxWidth = "";
        this.view.flxPopUp.left = "20dp";
        this.view.flxPopUp.right = "20dp";
        this.view.flxButtons.top = "50dp";
        this.view.btnYes.left = "20dp";
        this.view.btnNo.left = "20dp";
        this.view.btnYes.right = "20dp";
        this.view.btnNo.right = "20dp";
        this.view.btnNo.top = "80dp";
        this.view.btnYes.width = "";
        this.view.btnNo.width = "";
      } else {
        this.view.flxPopUp.left = "";
        this.view.flxPopUp.right = "";
        this.view.flxPopUp.minHeight = "250dp";
        this.view.flxPopUp.maxWidth = "500dp";
        this.view.flxButtons.top = "70dp";
        this.view.btnYes.left = "";
        this.view.btnNo.left = "";
        this.view.btnYes.right = "30dp";
        this.view.btnNo.right = "200dp";
        this.view.btnNo.top = "";
        this.view.btnYes.width = "150dp";
        this.view.btnNo.width = "150dp";
      }
    },
    setActions: function () {
      var scope = this;
      this.view.btnYes.onClick = function(){
        scope.onOptionSelection("Yes");
      };
      this.view.btnNo.onClick = function(){
        scope.onOptionSelection("No");
      };
//       this.view.flxClose.onClick = function(){
//         scope.onOptionSelection("No");
//       };
    },
    onOptionSelection : function(opt){
      if(opt === "Yes" && this.yesCallback !==null){
       this.yesCallback();
      }
      else if(opt === "No" && this.noCallback !==null){
        this.noCallback();
      }
    },
    //All the keys to pass to the function should be i18n keys
    SetLabelValues : function(HeaderKey, DescriptionKey, YesButtonKey, NoButtonKey){
      if(HeaderKey!== null && HeaderKey!== undefined)
        this.view.lblHeader.text = kony.i18n.getLocalizedString(HeaderKey);
      if(DescriptionKey!== null && DescriptionKey!== undefined)
        this.view.lblHeader.text = kony.i18n.getLocalizedString(DescriptionKey);
      if(YesButtonKey!== null && YesButtonKey!== undefined)
        this.view.lblHeader.text = kony.i18n.getLocalizedString(YesButtonKey);
      if(NoButtonKey!== null && NoButtonKey!== undefined)
        this.view.lblHeader.text = kony.i18n.getLocalizedString(NoButtonKey);
    },
  };
});