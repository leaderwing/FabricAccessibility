define(function () {
	var sampleData = {
			title: "Important information about procedures for opening a new account :",
			titlei18n: "kony.nuo.VerifyPhoneNumber.ImportantInfo",
			body: "To Help the government fight the funding of terrorism and money laundering activites, Federal law requires all financial institutions to obtain, verify and record information that identifies each person who opens an account. In the same instances, we may use outside sources to confirm the information provided by you. The information you provide is protected by our privacy policy and Federal Law.<br>What this means for you: by clicking continue, you authorize us to collect your name, address, date of birth, ID and other information that will allow us to identify you.",
			bodyi18n: ""
		};
	return {
		/**
		 * sets the text to the title and body of the component
		 * call the following in the form controller
		 * this.view.<Component Instance ID>.setData(data);
		 * @param {Object} data
		 */
		setData: function (data) {
			if (data) {
				if (data.title) {
					this.view.lblHeading.text = data.title;
				}
				if (data.titlei18n) {
					this.view.lblHeading.i18n_text = data.titlei18n;
				}
				if (data.body) {
					this.view.rtxInfo.text = data.body;
				}
				if (data.bodyi18n) {
					this.view.rtxInfo.i18n_text = data.bodyi18n;
				}
				this.view.lblHeading.accessibilityConfig = {
					"a11yLabel": this.view.lblHeading.text
				};
				this.view.rtxInfo.accessibilityConfig = {
					"a11yLabel": this.view.rtxInfo.text
				};
			}
		}
	};
});
