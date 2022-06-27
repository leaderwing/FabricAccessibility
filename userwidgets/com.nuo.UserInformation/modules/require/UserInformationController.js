define(function () {
  return {
    preShow: function() {
      this.view.atbxLastNameOld.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "Last Name"
      };
      this.view.atbxEmailOld.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "email"
      };
      this.view.atbxSSN.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "ssn"
      };
      this.view.atbxAddressLine1.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "address line 1"
      };
      this.view.atbxAddressLine2.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "address line 2"
      };
      this.view.atbxCountry.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "country"
      };
      this.view.atbxState.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "state"
      };
      this.view.atbxCity.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "city"
      };
      this.view.atbxZipcode.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "zipcode"
      };
      this.view.atxtCountryCode.tbxAnimatedKA.accessibilityConfig = {
        "a11yLabel": "country code"
      };
    }
  }
});