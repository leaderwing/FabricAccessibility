define({ 
  onNavigate:function(){
    var d1 = [{rowLabel: "Personal Information", rowStatus: "inProgress", currentRow: true}, {rowLabel: "Product Selection", rowStatus: "incomplete", currentRow: false}, {rowLabel: "Verification", rowStatus: "incomplete", currentRow: false}, {rowLabel: "Submit Application", rowStatus: "incomplete", currentRow: false}] ;
    var d2 = {lableStep: "", labelStatus: "Application Number: F8VYD4N", lableStartDate: "Application Started On:  2020-10-08"};
    this.view.Roadmap.setData(d1,d2);
  },
  preShowForm: function () {
    this.view.f1.accessibilityConfig = {
      "a11yARIA": {
        "role": "main",
        "tabindex": -1
      }
    };
    /* this.view.flxRoadmap.accessibilityConfig = {
      "a11yHidden": true
    } */
    this.view.UserInformationNUO.atbxFirstName.tbxAnimatedKA.accessibilityConfig = {
      "a11yLabel":"First Name"
    };
    this.view.UserInformationNUO.atbxLastName.tbxAnimatedKA.accessibilityConfig = {
      "a11yLabel":"Last Name"
    };
    this.view.UserInformationNUO.DateInput.tbxDateInputKA.accessibilityConfig = {
      "a11yLabel":"Date of Birth"
    };
    this.view.UserInformationNUO.atbxEmail.tbxAnimatedKA.accessibilityConfig = {
      "a11yLabel":"Email Address"
    };
    this.view.UserInformationNUO.filterDropdown.tbxDropdownKA.accessibilityConfig = {
      "a11yLabel":"Country Code"
    };
    this.view.UserInformationNUO.atxtPhoneNumber.tbxAnimatedKA.accessibilityConfig = {
      "a11yLabel":"Phone Number"
    };
    //      this.view.YesNoOptionChoser.flxYes.accessibilityConfig = {
    //       "a11yLabel":"Yes Button"
    //     };
    //      this.view.YesNoOptionChoser.flxNo.accessibilityConfig = {
    //       "a11yLabel":"No Button"
    //     };
    //      this.view.flxHeader.accessibilityConfig = {
    //       "a11yLabel":"",
    //       "a11yARIA": {
    //         "tabindex": -1  
    //       }
    //     };
    //      this.view.customHeaderNUO.accessibilityConfig = {
    //       "a11yLabel":"",
    //       "a11yARIA": {
    //         "tabindex": -1  
    //       }
    //     };
    //     this.view.customHeaderNUO.flxTop.accessibilityConfig = {
    //       "a11yLabel":"",
    //       "a11yARIA": {
    //         "tabindex": -1  
    //       }
    //     };
    //     this.view.customHeaderNUO.flxTopMain.accessibilityConfig = {
    //       "a11yLabel":"",
    //       "a11yARIA": {
    //         "tabindex": -1  
    //       }
    //     };
    this.view.flxHeader.accessibilityConfig = {
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
    this.view.flxMainScroll.accessibilityConfig = {
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
    this.view.f1.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.UserInformationNUO.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.UserInformationNUO.YesNoOptionChoser.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.UserInformationNUO.YesNoOptionChoser.flxButtons.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };
    this.view.UserInformationNUO.flxCoApplicantOptionChooser.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };

    this.view.UserInformationNUO.lblCoApplicant.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };

    this.view.flxMainScroll.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };

    this.view.UserInformationNUO.lblSubHeaderTitle1.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };

    this.view.customHeaderNUO.accessibilityConfig= {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };


    this.view.lblHeader.accessibilityConfig = {
      "a11yARIA": {
        "role": "complementary",
        "aria-level": "1",
        "tabindex": -1 
      }
    };

    this.view.customfooter.lblCopyright.accessibilityConfig = {
      "a11yLabel":"",
      "a11yARIA": {
        "tabindex": -1  
      }
    };

  },
  postShowFunc: function() {
    document.querySelectorAll('img[tabindex="-1"]').forEach(function(el){el.setAttribute("alt","")});
    document.querySelectorAll('img[id="flxRoadmapRowContainer_imgDottedLine"]').forEach(function(elem){elem.setAttribute("alt","");elem.setAttribute("tabindex","-1");});
    document.querySelectorAll('img#frmPersonalInfod_Roadmap_imgDropdown').forEach(function(el){el.setAttribute("alt","");el.setAttribute("tabindex","-1");});
    document.querySelectorAll('ul[role="grid"]').forEach(function(elem){elem.setAttribute("tabindex","-1");});
    document.querySelectorAll("label[kw='Button']").forEach(function(el){el.style.outlineOffset = "4px";});
    //document.querySelectorAll("input[kw='TextBox2']").forEach(function(el){el.style.outlineOffset = "4px";});

    makeIdUnique("flexcontainer_wrapper");
    makeIdUnique("flxRoadmapRowContainer_flxRoadmapRowContainer");
    makeIdUnique("flxRoadmapRowContainer_flxRowContent");
    makeIdUnique("flxRoadmapRowContainer_flxCurrentRowIndicator");
    makeIdUnique("flxRoadmapRowContainer_flxRowCircle");
    makeIdUnique("flxRoadmapRowContainer_lblRowNumber");
    makeIdUnique("flxRoadmapRowContainer_lblRowName");
    makeIdUnique("flxRoadmapRowContainer_imgDottedLine_span");
    makeIdUnique("flxRoadmapRowContainer_imgDottedLine");
    makeIdUnique("flxDropdownKA_flxDropdownKA");
    makeIdUnique("flxDropdownKA_flxCountry");
    makeIdUnique("flxDropdownKA_lblCountryNameKA");
    makeIdUnique("flxDropdownKA_lblLeftBracketKA");
    makeIdUnique("flxDropdownKA_lblCountryCodeKA");
    makeIdUnique("flxDropdownKA_lblRightBracketKA");
    document.querySelectorAll('label').forEach(function(elem){
      if(elem.textContent === ""){
        elem.remove();
      }
    });
  }
});