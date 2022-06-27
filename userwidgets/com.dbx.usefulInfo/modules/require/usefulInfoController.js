define(function(){
  return {
  compPreShow : function(){
      this.accessibilityConfigurations();
    },
    accessibilityConfigurations: function() {
      this.view.accessibilityConfig = {
      "a11yARIA": {
        "role": "complementary",
        "tabindex": -1 
      }
    };
//       this.view.segUsefulInfo.tmpUsefulInfoHeader.lblInfoSectionHeader.accessibilityConfig = {
//       "a11yARIA": {
//         "role": "complementary",
//         "aria-level": "2"
//       }
//     };
  },
}
});