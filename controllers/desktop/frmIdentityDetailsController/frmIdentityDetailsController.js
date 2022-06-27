define({
  onNavigate:function(){
    var d1 = [{rowLabel: "Personal Information", rowStatus: "inProgress", currentRow: true}, {rowLabel: "Product Selection", rowStatus: "incomplete", currentRow: false}, {rowLabel: "Verification", rowStatus: "incomplete", currentRow: false}, {rowLabel: "Submit Application", rowStatus: "incomplete", currentRow: false}] ;
    var d2 = {lableStep: "", labelStatus: "Application Number: F8VYD4N", lableStartDate: "Application Started On:  2020-10-08"};
    this.view.Roadmap.setData(d1,d2)
  },
  preShowForm: function () {
//     this.view.f1.accessibilityConfig = {
//       "a11yARIA": {
//         "role": "main"
//       }
//     };
     this.view.IdentityDetails.atbxTINNumber.tbxAnimatedKA.accessibilityConfig = {
      "a11yLabel":"Tax Identification Number"
    };
     this.view.IdentityDetails.issueDateComponent.tbxDateInputKA.accessibilityConfig = {
      "a11yLabel":"Issue Date. Optional Field"
    };
     this.view.IdentityDetails.expiryDateComponent.tbxDateInputKA.accessibilityConfig = {
      "a11yLabel":"Expiration Date"
    };
     this.view.IdentityDetails.atbxIdNumber.tbxAnimatedKA.accessibilityConfig = {
      "a11yLabel":"ID Number"
    };
    /* this.view.flxRoadmap.accessibilityConfig = {
      "a11yHidden": true
    }*/
//      this.view.UserInformationNUO.filterDropdown.tbxDropdownKA.accessibilityConfig = {
//       "a11yLabel":"Enter the Country Code"
//     };
//      this.view.UserInformationNUO.atxtPhoneNumber.tbxAnimatedKA.accessibilityConfig = {
//       "a11yLabel":"Enter the Phone Number"
//     };
//      this.view.YesNoOptionChoser.flxYes.accessibilityConfig = {
//       "a11yLabel":"Yes Button"
//     };
//      this.view.YesNoOptionChoser.flxNo.accessibilityConfig = {
//       "a11yLabel":"No Button"
//     };
    this.view.customHeaderNUO.accessibilityConfig = {
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
     this.view.IdentityDetails.lblHeader.accessibilityConfig = {
      "a11yARIA": {
        "role": "heading",
        "aria-level": "2",
        "tabindex": -1
      }
    };
     this.view.IdentityDetails.lblSubHeaderTitle.accessibilityConfig = {
      "a11yARIA": {
        "role": "heading",
        "aria-level": "3",
        "tabindex": -1
      }
    };
    
      this.view.IdentityDetails.lblSubHeaderTitle1.accessibilityConfig = {
      "a11yARIA": {
        "role": "heading",
        "aria-level": "3",
        "tabindex": -1
      }
    };
    
    this.view.IdentityDetails.lblSubHeaderTitle3.accessibilityConfig = {
      "a11yARIA": {
        "role": "heading",
        "aria-level": "3",
        "tabindex": -1
      }
    };
        document.querySelectorAll('label').forEach(function(elem){
      if(elem.textContent === ""){
        elem.remove();
      }
    });
  },
  postShowFunc: function() {
    document.querySelectorAll('img[tabindex="-1"]').forEach(function(el){el.setAttribute("alt","")});
	document.querySelectorAll('img[id="flxRoadmapRowContainer_imgDottedLine"]').forEach(function(elem){elem.setAttribute("alt","");elem.setAttribute("tabindex","-1");});
    document.querySelectorAll('img#frmIdentityDetails_Roadmap_imgDropdown').forEach(function(el){el.setAttribute("alt","");el.setAttribute("tabindex","-1");});
    document.querySelectorAll('ul[role="grid"]').forEach(function(elem){elem.setAttribute("tabindex","-1");});
    document.querySelectorAll("label[kw='Button']").forEach(function(el){el.style.outlineOffset = "4px";});
     ///////////////////////////////
    makeIdUnique("flexcontainer_wrapper");
     makeIdUnique("flxRoadmapRowContainer_flxRoadmapRowContainer");
    makeIdUnique("flxRoadmapRowContainer_flxCurrentRowIndicator");
    makeIdUnique("flxRoadmapRowContainer_flxRowContent");
    makeIdUnique("flxRoadmapRowContainer_flxRowCircle");
    makeIdUnique("flxRoadmapRowContainer_lblRowNumber");
    makeIdUnique("flxRoadmapRowContainer_lblRowName");
    makeIdUnique("flxRoadmapRowContainer_imgDottedLine_span");
    makeIdUnique("flxRoadmapRowContainer_imgDottedLine");
    makeIdUnique("CopyflxDropdownKA_CopyflxDropdownKA");
    makeIdUnique("CopyflxDropdownKA_btnRowClick");
    makeIdUnique("CopyflxDropdownKA_flxCountry");
    makeIdUnique("CopyflxDropdownKA_lblCountryNameKA");
    makeIdUnique("CopyflxDropdownKA_lblLeftBracketKA");
    makeIdUnique("CopyflxDropdownKA_lblCountryCodeKA");
    makeIdUnique("CopyflxDropdownKA_lblRightBracketKA");
  }
});