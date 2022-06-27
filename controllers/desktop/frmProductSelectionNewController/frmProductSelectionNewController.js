define({
  totalList: {
    "productsFromDashboard": [],
    "SAVINGS.ACCOUNTS": [
      {
        "lblProductTitle": "Prime Saving Account",
        //"lblProductDescription": "Prime Savings Account gives you an edge in the way you bank. Benefits of the Prime Savings Account include enhanced transaction limits and free checkbooks",
        "lblProductDescription": "Prime Savings Account gives you an edge in the way you bank.",
        "productID": "SAVINGS.PRIME.INFINITY",
        "productGroupId": "SAVINGS.ACCOUNTS",
        "currencyId": "USD",
        "productGroupName": "Savings Accounts",
        "flxCheckBox": {
          "accessibilityConfig" : {
            "a11yLabel": "checkbox to select prime saving account",
            "a11yARIA": {
              "role": "checkbox",
              "tabindex": 0
            }
          }
        },
        "imgCheckBox": {
          "src": "checkbox_activewhite.png"
        },
        "btnKnowMore": {
          "text": "Know More"
        },
        "flxMain": {
          "skin": "flxBlueBgwithBlueBorder4px"
        },
        "imgProduct": {
          "src": "credit_cards@2x.png"
        }
      },
      {
        "lblProductTitle": "Salary Saving Account",
        //"lblProductDescription": "Savings Account is uniquely design for you to achieve your financial goals. We provide the optimum solution for you to manage your money efficiently",
        "lblProductDescription": "Savings Account is uniquely design for you to achieve your financial goals.",
        "productID": "SAVINGS.SALARY.INFINITY",
        "productGroupId": "SAVINGS.ACCOUNTS",
        "currencyId": "USD",
        "productGroupName": "Savings Accounts",
        "flxCheckBox": {
          "accessibilityConfig" : {
            "a11yLabel": "checkbox to select salary saving account",
            "a11yARIA": {
              "role": "checkbox",
              "tabindex": 0
            }
          }
        },
        "imgCheckBox": {
          "src": "checkbox_inactive.png"
        },
        "btnKnowMore": {
          "text": "Know More"
        },
        "flxMain": {
          "skin": "flxWhiteBgwithBorder"
        },
        "imgProduct": {
          "src": "menu_pay_a_person.png"
        }
      },
      {
        "lblProductTitle": "Standard Saving Account",
        //"lblProductDescription": "The Standard Savings Account simplifies banking for the independent women of today. Benefits of the Women’s Savings Account include low opening deposit and attractive interest rate",
        "lblProductDescription": "The Standard Savings Account simplifies banking for the independent women of today.",
        "productID": "SAVINGS.STANDARD.INFINITY",
        "productGroupId": "SAVINGS.ACCOUNTS",
        "currencyId": "USD",
        "productGroupName": "Savings Accounts",
        "flxCheckBox": {
          "accessibilityConfig" : {
            "a11yLabel": "checkbox to select standard saving account",
            "a11yARIA": {
              "role": "checkbox",
              "tabindex": 0
            }
          }
        },
        "imgCheckBox": {
          "src": "checkbox_inactive.png"
        },
        "btnKnowMore": {
          "text": "Know More"
        },
        "flxMain": {
          "skin": "flxWhiteBgwithBorder"
        },
        "imgProduct": {
          "src": "business_banking@2x.png"
        }
      }
    ],
    "CURRENT.ACCOUNTS": [
      {
        "lblProductTitle": "Advanced Checking Account",
        //"lblProductDescription": "Easily manage your everyday spending, whatever your needs, with one of our checking accounts. You’ll also be able to take advantage of all the rewards and benefits you get as our customer",
        "lblProductDescription": "Easily manage your everyday spending, whatever your needs, with one of our checking accounts.",
        "productID": "ADVANCED.CHECKING.ACCOUNT",
        "productGroupId": "CURRENT.ACCOUNTS",
        "currencyId": "USD",
        "productGroupName": "Current Accounts",
        "flxCheckBox": {
          "accessibilityConfig" : {
            "a11yLabel": "checkbox to select advanced checking account",
            "a11yARIA": {
              "role": "checkbox",
              "tabindex": 0
            }
          }
        },
        "imgCheckBox": {
          "src": "checkbox_inactive.png"
        },
        "btnKnowMore": {
          "text": "Know More"
        },
        "flxMain": {
          "skin": "flxWhiteBgwithBorder"
        },
        "imgProduct": {
          "src": "credit_cards@2x.png"
        }
      },
      {
        "lblProductTitle": "Basic Checking Account",
        //"lblProductDescription": "The basic checking account that comes with standard benefits like a debit card that doubles as an ATM card. It also gives you full access to Online Banking, a suite of tools and apps that make it easy to track all your transaction and more",
        "lblProductDescription": "The basic checking account that comes with standard benefits like a debit card that doubles as an ATM card.",
        "productID": "BASIC.CHECKING.ACCOUNT",
        "productGroupId": "CURRENT.ACCOUNTS",
        "currencyId": "USD",
        "productGroupName": "Current Accounts",
        "flxCheckBox": {
          "accessibilityConfig" : {
            "a11yLabel": "checkbox to select basic checking account",
            "a11yARIA": {
              "role": "checkbox",
              "tabindex": 0
            }
          }
        },
        "imgCheckBox": {
          "src": "checkbox_inactive.png"
        },
        "btnKnowMore": {
          "text": "Know More"
        },
        "flxMain": {
          "skin": "flxWhiteBgwithBorder"
        },
        "imgProduct": {
          "src": "business_banking@2x.png"
        }
      },
      {
        "lblProductTitle": "Preferred Checking Account",
        //"lblProductDescription": "Best for the customers who want to earn interest, Higher account balances and customers who have a Mortgage",
        "lblProductDescription": "Best for the customers who want to earn interest,",
        "productID": "PREFERRED.CHECKING.ACCOUNT",
        "productGroupId": "CURRENT.ACCOUNTS",
        "currencyId": "USD",
        "productGroupName": "Current Accounts",
        "flxCheckBox": {
          "accessibilityConfig" : {
            "a11yLabel": "checkbox to select preferred checking account",
            "a11yARIA": {
              "role": "checkbox",
              "tabindex": 0
            }
          }
        },
        "imgCheckBox": {
          "src": "checkbox_inactive.png"
        },
        "btnKnowMore": {
          "text": "Know More"
        },
        "flxMain": {
          "skin": "flxWhiteBgwithBorder"
        },
        "imgProduct": {
          "src": "menu_pay_a_person.png"
        }
      }
    ]
  },
  
  
  onNavigate:function(){
    var d1 = [{rowLabel: "Personal Information", rowStatus: "done", currentRow: true}, {rowLabel: "Product Selection", rowStatus: "inProgress", currentRow: false}, {rowLabel: "Verification", rowStatus: "incomplete", currentRow: false}, {rowLabel: "Submit Application", rowStatus: "incomplete", currentRow: false}] ;
    var d2 = {lableStep: "", labelStatus: "Application Number: F8VYD4N", lableStartDate: "Application Started On:  2020-10-08"};
    this.view.Roadmap.setData(d1,d2)
    //this.invokeProductSelectionComponent();
  },

  testingFunc:function(){
    alert('hiko')
  },

  postShowFunc: function() {
    var a = window.document.querySelectorAll("img#flxRoadmapRowContainer_imgDottedLine");
    for(var i=0;i<a.length;i++) {
      a[i].setAttribute('tabindex',-1);
      a[i].setAttribute('alt',"");
    }

    //this.view.LandingPageProducts.knowMoreClick(this.testingFunc);

    var b = window.document.querySelectorAll("img#flxproductSelection_imgProduct");
    for(var i=0;i<b.length;i++) {
      b[i].setAttribute('tabindex',-1);
      b[i].setAttribute('alt',"");
    }
    document.querySelectorAll("#flxRoadmapRowContainer_imgRowDone").forEach(
      function(elem) {
        elem.setAttribute("tabindex","-1");
        elem.setAttribute("alt","");
      }
    );
    document.querySelectorAll("#frmProductSelectionNew_selectProducts1_imgDropDown").forEach(
      function(elem) {
        elem.setAttribute('tabindex','-1');
        elem.setAttribute('alt','');
      }
    );
    document.querySelectorAll("#frmProductSelectionNew_selectProducts2_imgDropDown").forEach(
      function(elem) {
        elem.setAttribute('tabindex','-1');
        elem.setAttribute('alt','');
      }
    );
    document.querySelectorAll("#frmProductSelectionNew_LandingPageProducts_imgDropDown").forEach(
      function(elem) {
        elem.setAttribute('tabindex','-1');
        elem.setAttribute('alt','');
      }
    );
    document.querySelectorAll("div#flxproductSelection_flxCheckBox").forEach(
      function(elem) {
        elem.setAttribute("tabindex","0");
        elem.onclick = function(el) {
          el.currentTarget.closest("div#flxproductSelection_flxproductSelection").click();
        }
      }
    );
    document.querySelectorAll('img[tabindex="-1"]').forEach(function(el){el.setAttribute("alt","");});
    document.querySelectorAll('img#frmProductSelectionNew_Roadmap_imgDropdown').forEach(function(el){el.setAttribute("alt","");el.setAttribute("tabindex","-1");});
    document.querySelectorAll('img#frmPersonalInfod_Roadmap_imgDropdown').forEach(function(el){el.setAttribute("alt","");});
    document.querySelectorAll('ul[role="grid"]').forEach(function(elem){elem.removeAttribute("tabindex");});
	document.querySelectorAll('ul[role="grid"] li').forEach(function(elem){elem.removeAttribute("tabindex");});
	document.querySelectorAll('ul[role="grid"] li label[kwp*="btnKnowMore"]').forEach(function(elem){elem.setAttribute("tabindex","0");});
    document.querySelectorAll('ul[role="grid"] li [kwp*="flxCheckBox"]').forEach(function(elem){elem.setAttribute("tabindex","0");});
    document.querySelectorAll("label[kw='Button']").forEach(function(el){el.style.outlineOffset = "4px";});
    document.querySelectorAll('[kwp="frmProductSelectionNew_customHeaderNUO_imgLogo"] img').forEach(function(el){el.setAttribute("tabindex","-1");el.setAttribute("alt","");});
	
    this.a11yFunction();

    makeIdUnique("flexcontainer_wrapper");
    makeIdUnique("flxRoadmapRowContainer_flxRoadmapRowContainer");
    makeIdUnique("flxRoadmapRowContainer_flxCurrentRowIndicator");
    makeIdUnique("flxRoadmapRowContainer_flxRowContent");
    makeIdUnique("flxRoadmapRowContainer_flxRowCircle");
    makeIdUnique("flxRoadmapRowContainer_lblRowNumber");
    makeIdUnique("flxRoadmapRowContainer_lblRowName");
    makeIdUnique("flxRoadmapRowContainer_imgDottedLine_span");
    makeIdUnique("flxRoadmapRowContainer_imgDottedLine");
    makeIdUnique("flxproductSelection_flxproductSelection");
    makeIdUnique("flxproductSelection_flxMain");
    makeIdUnique("flxproductSelection_imgProduct_span");
    makeIdUnique("flxproductSelection_imgProduct");
    makeIdUnique("flxproductSelection_flxProductDetails");
    makeIdUnique("flxproductSelection_lblProductTitle");
    makeIdUnique("flxproductSelection_lblProductDescription");
    makeIdUnique("flxproductSelection_btnKnowMore");
    makeIdUnique("flxproductSelection_flxCheckBox");
    makeIdUnique("flxproductSelection_imgCheckBox_span");
    makeIdUnique("flxproductSelection_imgCheckBox");
  },
  a11yFunction: function() {
    /*this.view.flxRoadmap.accessibilityConfig = {
      "a11yHidden": true
    }*/
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
  },

  invokeProductSelectionComponent: function() {
    this.view.flxAdditionalProductsContainer.removeAll();
    for (var i = 1; i <= 2; i++) {
      var productSelection = new com.dbx.selectProductsV2({
        "clipBounds": false,
        "id": "selectProducts" + i,
        "isVisible": true,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "zIndex": 1
      }, {}, {});
      this.view.flxAdditionalProductsContainer.add(productSelection);
      // var name = this.context.Accounts[i - 1];
      var name = "SAVINGS.ACCOUNTS";
      if (i==1){
        name = "SAVINGS.ACCOUNTS";
      }
      else{
        name = "CURRENT.ACCOUNTS";
      }
      var title = name;
      var otherData = {};
      var value = title.replace(".", " ");
      otherData.headerText =(this.totalList[name].length>0)?this.totalList[name][0].productGroupName:value;
      productSelection.setSegData(this.totalList[name], otherData);
      productSelection.showProductOptions();       

    }
    this.view.forceLayout();
    this.view.LandingPageProducts.isVisible=false;
    this.view.flxContent.accessibilityConfig = {
      "a11yARIA": {
        "role": "main",
        "tabindex": -1
      }
    }
  },

});