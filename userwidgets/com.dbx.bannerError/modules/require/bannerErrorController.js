define(function(){
  return {
    postShowFunc: function() {
      this.view.imgError.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": -1  
        }
      };
      this.view.imgErrorCross.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": -1  
        }
      };
    },
  }
});