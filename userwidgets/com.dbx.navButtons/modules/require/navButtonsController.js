define(function () {
	var responsiveUtils = new ResponsiveUtils();
	return {
		setData : function(data){
			if (data.btnPrimary) {
				if (data.btnPrimary.text) {
					this.view.btnPrimary.text = data.btnPrimary.text;
				}
				if (data.btnPrimary.texti18n) {
					this.view.btnPrimary.i18n_text = data.btnPrimary.texti18n;
				}
				if (data.btnPrimary.onClickCallback) {
					this.view.btnPrimary.onClick = data.btnPrimary.onClickCallback;
				}
				if (data.btnPrimary.isVisible) {
					this.view.btnPrimary.isVisible = data.btnPrimary.isVisible;
				}
				this.view.btnPrimary.accessibilityConfig = {
                    "a11yLabel": this.view.btnPrimary.text
                };
			} else{
				this.view.btnPrimary.isVisible = false;
			}
			if (data.btnSecondary1) {
				if (data.btnSecondary1.text) {
					this.view.btnSecondary1.text = data.btnSecondary1.text;
				}
				if (data.btnSecondary1.texti18n) {
					this.view.btnSecondary1.i18n_text = data.btnSecondary1.texti18n;
				}
				if (data.btnSecondary1.onClickCallback) {
					this.view.btnSecondary1.onClick = data.btnSecondary1.onClickCallback;
				}
				if (data.btnSecondary1.isVisible) {
					this.view.btnSecondary1.isVisible = data.btnSecondary1.isVisible;
				}
				this.view.btnSecondary1.accessibilityConfig = {
                    "a11yLabel": this.view.btnSecondary1.text
                };
			} else{
				this.view.btnSecondary1.isVisible = false;
			}
			if (data.btnSecondary2) {
				if (data.btnSecondary2.text) {
					this.view.btnSecondary2.text = data.btnSecondary2.text;
				}
				if (data.btnSecondary2.texti18n) {
					this.view.btnSecondary2.i18n_text = data.btnSecondary2.texti18n;
				}
				if (data.btnSecondary2.onClickCallback) {
					this.view.btnSecondary2.onClick = data.btnSecondary2.onClickCallback;
				}
				if (data.btnSecondary2.isVisible) {
					this.view.btnSecondary2.isVisible = data.btnSecondary2.isVisible;
				}
				this.view.btnSecondary2.accessibilityConfig = {
                    "a11yLabel": this.view.btnSecondary2.text
                };
			} else{
				this.view.btnSecondary2.isVisible = false;
			}
		},
		onBreakpointChange: function (eventObject, width) {
			if (width <= 640 || responsiveUtils.isMobile) {
				/*this.view.btnPrimary.top = "10dp";
				this.view.btnPrimary.right = "20dp";
				this.view.btnPrimary.left = "20dp";
				this.view.btnPrimary.width = "";
				this.view.btnSecondary1.top = "70dp";
				this.view.btnSecondary1.right = "20dp";
				this.view.btnSecondary1.left = "20dp";
				this.view.btnSecondary1.width = "";
				this.view.btnSecondary2.top = "130dp";
				this.view.btnSecondary2.right = "20dp";
				this.view.btnSecondary2.left = "20dp";
				this.view.btnSecondary2.width = ""; */
                this.view.btnPrimary.top = "10dp";
				this.view.btnPrimary.right = "20dp";
				this.view.btnPrimary.left = "";
				this.view.btnPrimary.width = "90dp";
				this.view.btnSecondary1.top = "10dp";
				this.view.btnSecondary1.right = "130dp";
				this.view.btnSecondary1.left = "";
				this.view.btnSecondary1.width = "90dp";
				this.view.btnSecondary2.top = "10dp";
				this.view.btnSecondary2.right = "240dp";
				this.view.btnSecondary2.left = "";
				this.view.btnSecondary2.width = "90dp";
			} else {
				this.view.btnPrimary.top = "10dp";
				this.view.btnPrimary.right = "30dp";
				this.view.btnPrimary.left = "";
				this.view.btnPrimary.width = "150dp";
				this.view.btnSecondary1.top = "10dp";
				this.view.btnSecondary1.right = "200dp";
				this.view.btnSecondary1.left = "";
				this.view.btnSecondary1.width = "150dp";
				this.view.btnSecondary2.top = "10dp";
				this.view.btnSecondary2.right = "370dp";
				this.view.btnSecondary2.left = "";
				this.view.btnSecondary2.width = "150dp";
			}
		},
      accessibilitconfigurations: function() {
        this.view.flxButtons.accessibilityConfig = {
          "a11yARIA": {
            "role": "navigation",
            "tabindex": -1
          }
        };
      } 
	};
});