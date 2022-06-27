define({ 
  preshow: function(){
    kony.application.destroyForm("frmIdentityDetails");
    kony.application.destroyForm("frmPersonalInfo");
    kony.application.destroyForm("frmProductSelection");
    /*this.view.rtxESignAgreements.onClick =  this.showAgreement;
    commented out for diff approach*/
    document.querySelectorAll('img[tabindex="-1"]').forEach(function(elem){elem.setAttribute("alt","");});
	document.querySelectorAll('ul[role="grid"]').forEach(function(elem){elem.setAttribute("tabindex","-1");});
    
    document.querySelectorAll("#esignanchor")[0].addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        kony.application.openURL("https://apply.usbank.com/api/documents/disclosures/ESIGN_Consent_Agreement_Auth.pdf");
      }
    });
    
    document.querySelectorAll('label').forEach(function(elem){
		if(elem.textContent === ""){
			elem.remove();
		}
	});
    
    var css = 'input[role="link"]:focus { outline: -webkit-focus-ring-color auto 1px!important; outline-color: -webkit-focus-ring-color!important; outline-style: auto!important; outline-width: 1px!important; }';
    css = css+ 'input[kwidgettype="Button"]:focus { outline: -webkit-focus-ring-color auto 1px!important; outline-color: -webkit-focus-ring-color!important; outline-style: auto!important; outline-width: 1px!important; }';
    var style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    this.accessibilityConfigurations();

    ///////////////////////////
    makeIdUnique("flexcontainer_wrapper");  
    makeIdUnique("flxUsefulInfoRow_flxUsefulInfoRow");
    makeIdUnique("flxUsefulInfoRow_lblInfo");
    makeIdUnique("flxUsefulInfoRow_lblDot");
    makeIdUnique("flxUsefulInfoHeader_flxUsefulInfoHeader");
    makeIdUnique("flxUsefulInfoHeader_lblInfoSectionHeader");
    document.querySelector("meta[name='viewport']").setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=4.0');
  },

  showAgreement: function() {
    kony.application.openURL("https://apply.usbank.com/api/documents/disclosures/ESIGN_Consent_Agreement_Auth.pdf");
  }, 

  accessibilityConfigurations: function() {
    /*Language of Page*/
    window.document.getElementsByTagName("html")[0].setAttribute("lang", "en");
    document.querySelectorAll("#frmExistingCustomer_flxOptions input[type='button'][kwidgettype='Button'][kformname='frmExistingCustomer']").forEach(function(el) {
      el.style.cssText += "outline-offset: 2px;";
    });
    document.querySelectorAll("#frmExistingCustomer_flxOptions div[class='kcell btnPrimaryActive']").forEach(function(el) {
      el.style.cssText += "overflow: initial!important;";
    });
    document.querySelectorAll("label[kw='Button']").forEach(function(el){el.style.outlineOffset = "4px";});
    this.view.imgNewUser.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.customHeaderNUO.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.customHeaderNUO.flxTop.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.customHeaderNUO.flxTopMain.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };

    this.view.customHeaderNUO.imgLogo.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.customfooter.lblCopyright.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    /*this.view.rtxESignAgreements.accessibilityConfig = {
      "a11yARIA": {
        "tabindex": 0  
      }
    }; */
    this.view.imgExistingUser.accessibilityConfig = {
      "a11yLabel":"Logo for Existing Customer",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.usefulInfo.accessibilityConfig = {
      "a11yARIA": {
        "role": "complementary",
        "tabindex": -1
      }
    };

    this.view.flxMain.accessibilityConfig = {
      "a11yARIA": {
        "role": "main",
        "tabindex": -1
      }
    };
    this.view.f2.accessibilityConfig = {
      "a11yARIA": {
        "role": "contentinfo",
        "tabindex": -1
      }
    };
    this.view.lblContentHeader.accessibilityConfig = {
      "a11yARIA": {
        "role": "heading",
        "aria-level": "1",
        "tabindex": -1
      }
    };
    this.view.lblQuestion.accessibilityConfig = {
      "a11yARIA": {
        "role": "complementary",
        "tabindex": -1
      }
    };
    this.view.lblNotes2.accessibilityConfig = {
      "a11yARIA": {
        "role": "complementary",
        "tabindex": -1
      }
    };
    this.view.lblNewUser2.accessibilityConfig = {
      "a11yARIA": {
        "role": "heading",
        "aria-level": "2",
        "tabindex": -1
      }
    };
    this.view.usefulInfo.lblHeader.accessibilityConfig = {
      "a11yARIA": {
        "role": "complementary",
        "tabindex": -1
      }
    };

    this.view.usefulInfo.lblHeader.accessibilityConfig = {
      "a11yARIA": {
        "role": "complementary",
        "tabindex": -1
      }
    };


    this.view.lblExistingUser2.accessibilityConfig = {
      "a11yARIA": {
        "role": "heading",
        "aria-level": "2",
        "tabindex": -1
      }
    };    
  },
});