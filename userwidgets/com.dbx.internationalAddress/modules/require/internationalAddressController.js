define(function () {
  var isAnimating = [false, false, false, false, false, false];
  var changeContinueButtonState = function(){};
  var skinsDW = {
		tbxSkin: "tbxTransparent",
		separator: "flxSeparator",
		errorSep: "flxSeparatorError",
		placeholder: "lblPlaceholder15",
		label: "lblTitle15"
	};
	var skinsM = {
		tbxSkin: "tbxTransparent",
		separator: "flxSeparator",
		errorSep: "flxSeparatorError",
		placeholder: "lblPlaceholder13",
		label: "lblTitle13"
	};
  var skins = {
    tbxSkin: "tbxTransparent",
    separator: "flxSeparator",
    errorSep: "flxSeparatorError",
    placeholder: "lblPlaceholder15",
    label: "lblTitle15"
  };
  var animationObjToTop = kony.ui.createAnimation({
    "100": {
      "top": "20dp",
      "stepConfig": {
        "timingFunction": kony.anim.EASE
      }
    }
  });
  var animationObjToBottom = kony.ui.createAnimation({
    "100": {
      "top": "40dp",
      "stepConfig": {
        "timingFunction": kony.anim.EASE
      }
    }
  });
  var animationConfig = {
    "delay": 0,
    "iterationCount": 1,
    "fillMode": kony.anim.FILL_MODE_FORWARDS,
    "duration": 0.2
  };
  var countrySegData = [];
  var stateSegData = [];
  var errorComp;
  return {
    initialize : function(callback){
      //this.view.doLayout = onLayoutDone.bind(this);
      changeContinueButtonState = callback;
    },
    mapErrorComp: function(errorWidget){
      errorComp = errorWidget;
    },
    addressPreShow: function () {
      this.setSkins();
      this.setActions();
    },
    setSkins: function () {
			//line1 
			this.view.tbxAddressLine1.skin = skins.tbxSkin;
			this.view.tbxAddressLine2.skin = skins.tbxSkin;
			this.view.tbxCountry.skin = skins.tbxSkin;
			this.view.tbxState.skin = skins.tbxSkin;
			this.view.tbxCity.skin = skins.tbxSkin;
			this.view.tbxZipCode.skin = skins.tbxSkin;
			if (this.getAddressLine1() === "") {
				this.view.lblAddressLine1.skin = skins.placeholder;
			} else {
				this.view.lblAddressLine1.skin = skins.label;
			}
			// line2
			if (this.getAddressLine2() === "") {
				this.view.lblAddressLine2.skin = skins.placeholder;
			} else {
				this.view.lblAddressLine2.skin = skins.label;
			}
			//country
			if (this.getCountry() === "") {
				this.view.lblCountry.skin = skins.placeholder;
			} else {
				this.view.lblCountry.skin = skins.label;
			}
			//state
			if (this.getState() === "") {
				this.view.lblState.skin = skins.placeholder;
			} else {
				this.view.lblState.skin = skins.label;
			}
			//city
			if (this.getCity() === "") {
				this.view.lblCity.skin = skins.placeholder;
			} else {
				this.view.lblCity.skin = skins.label;
			}
			//zipcode
			if (this.getZipCode() === "") {
				this.view.lblZipCode.skin = skins.placeholder;
			} else {
				this.view.lblZipCode.skin = skins.label;
			}
		},
    setPlaceholderSkin: function () {
      this.view.lblAddressLine1.skin = skins.placeholder;
      this.view.lblAddressLine2.skin = skins.placeholder;
      this.view.lblCountry.skin = skins.placeholder;
      this.view.lblState.skin = skins.placeholder;
      this.view.lblCity.skin = skins.placeholder;
      this.view.lblZipCode.skin = skins.placeholder;
    },
    setActiveSkin: function () {
      this.view.lblAddressLine1.skin = skins.label;
      this.view.lblAddressLine2.skin = skins.label;
      this.view.lblCountry.skin = skins.label;
      this.view.lblState.skin = skins.label;
      this.view.lblCity.skin = skins.label;
      this.view.lblZipCode.skin = skins.label;
    },
    setActions: function () {
      var scope = this;
      //animate to top animations
      this.view.tbxAddressLine1.onTouchStart = function () {
        scope.animateToTop(0, scope.view.lblAddressLine1);
        changeContinueButtonState();
      };
      this.view.tbxAddressLine2.onTouchStart = function () {
        scope.animateToTop(1, scope.view.lblAddressLine2);
        changeContinueButtonState();
      };
      this.view.tbxCountry.onTouchStart = function () {
        scope.animateToTop(2, scope.view.lblCountry);
        scope.filterCountryData();
        changeContinueButtonState();
      };
      this.view.tbxState.onTouchStart = function () {
        scope.animateToTop(3, scope.view.lblState);
        scope.filterStateData();
        changeContinueButtonState();
      };
      this.view.tbxCity.onTouchStart = function () {
        scope.animateToTop(4, scope.view.lblCity);
        changeContinueButtonState();
      };
      this.view.tbxZipCode.onTouchStart = function () {
        scope.animateToTop(5, scope.view.lblZipCode);
        changeContinueButtonState();
      };
      this.view.tbxAddressLine1.onBeginEditing = function () {
        scope.animateToTop(0, scope.view.lblAddressLine1);
        changeContinueButtonState();
      };
      this.view.tbxAddressLine2.onBeginEditing = function () {
        scope.animateToTop(1, scope.view.lblAddressLine2);
        changeContinueButtonState();
      };
      this.view.tbxCountry.onBeginEditing = function () {
        scope.animateToTop(2, scope.view.lblCountry);
        scope.filterCountryData();
        changeContinueButtonState();
      };
      this.view.tbxState.onBeginEditing = function () {
        scope.animateToTop(3, scope.view.lblState);
        scope.filterStateData();
        changeContinueButtonState();
      };
      this.view.tbxCity.onBeginEditing = function () {
        scope.animateToTop(4, scope.view.lblCity);
        changeContinueButtonState();
      };
      this.view.tbxZipCode.onBeginEditing = function () {
        scope.animateToTop(5, scope.view.lblZipCode);
        changeContinueButtonState();
      };
      this.view.tbxCountry.onKeyUp = function () {
        scope.animateToTop(2, scope.view.lblCountry);
        scope.filterCountryData();
        changeContinueButtonState();
      };
      this.view.tbxState.onKeyUp = function () {
        scope.animateToTop(3, scope.view.lblState);
        scope.filterStateData();
        changeContinueButtonState();
      };
      //animate to bottom animations
      this.view.tbxAddressLine1.onDone = function () {
        scope.animateToBottom(0, scope.view.lblAddressLine1, scope.view.tbxAddressLine1);
        changeContinueButtonState();
      };
      this.view.tbxAddressLine2.onDone = function () {
        scope.animateToBottom(1, scope.view.lblAddressLine2, scope.view.tbxAddressLine2);
        changeContinueButtonState();
      };
      this.view.tbxCountry.onDone = function () {
        if (scope.view.segCountry.data.length != 0) {
          scope.view.segCountry.selectedIndex = [0, 0];
          scope.view.segCountry.onRowClick();
        }
        scope.animateToBottom(2, scope.view.lblCountry, scope.view.tbxCountry);
        changeContinueButtonState();
      };
      this.view.tbxState.onDone = function () {
        if (scope.view.segState.data.length != 0) {
          scope.view.segState.selectedIndex = [0, 0];
          scope.stateRowClicked();
        }
        scope.animateToBottom(3, scope.view.lblState, scope.view.tbxState);
        changeContinueButtonState();
      };
      this.view.tbxCity.onDone = function () {
        scope.animateToBottom(4, scope.view.lblCity, scope.view.tbxCity);
        changeContinueButtonState();
      };
      this.view.tbxZipCode.onDone = function () {
        scope.animateToBottom(5, scope.view.lblZipCode, scope.view.tbxZipCode);
        changeContinueButtonState();
      };
      this.view.tbxAddressLine1.onEndEditing = function () {
        scope.animateToBottom(0, scope.view.lblAddressLine1, scope.view.tbxAddressLine1);
        changeContinueButtonState();
      };
      this.view.tbxAddressLine2.onEndEditing = function () {
        scope.animateToBottom(1, scope.view.lblAddressLine2, scope.view.tbxAddressLine2);
        changeContinueButtonState();
      };
      this.view.tbxCountry.onEndEditing = function () {
        kony.timer.schedule("mytimerCountry", scope.selectCountryOnlyOption, 0.2, false);
        changeContinueButtonState();
      };
      this.view.tbxState.onEndEditing = function () {
        kony.timer.schedule("mytimerState", scope.selectStateOnlyOption, 0.2, false);
        changeContinueButtonState();
      };
      this.view.tbxCity.onEndEditing = function () {
        scope.animateToBottom(4, scope.view.lblCity, scope.view.tbxCity);
        changeContinueButtonState();
      };
      this.view.tbxZipCode.onEndEditing = function () {
        scope.animateToBottom(5, scope.view.lblZipCode, scope.view.tbxZipCode);
        changeContinueButtonState();
      };
      //row on click
      //this.view.segCountry.onRowClick = this.countryRowClicked;
      this.view.segState.onRowClick = this.stateRowClicked;
    },
		selectCountryOnlyOption: function () {
			if (this.view.segCountry.data.length === 1) {
				this.view.segCountry.selectedIndex = [0, 0];
				this.countryRowClicked();
			} else {
				this.animateToBottom(2, this.view.lblCountry, this.view.tbxCountry);
				this.view.flxDropdownCountryKA.setVisibility(false);
			}
			kony.timer.cancel("mytimerCountry");
		},
    getSelectedCountryCode: function(){
      var country = this.getCountry();
      var selectedCountryCode = country;
      if(Array.isArray(countrySegData) && countrySegData.length > 0) {
        var len = countrySegData.length;
        country = country +"";
        country = country.trim().toLowerCase();
        for(var i=0; i<len; i++) {
          if(country === countrySegData[i].lblCountryNameKA.trim().toLowerCase()) {
            selectedCountryCode = countrySegData[i].country_code;
            break;
          }
        }
      }
      return selectedCountryCode;
    },
		selectStateOnlyOption: function () {
			if (this.view.segState.data.length === 1) {
				this.view.segState.selectedIndex = [0, 0];
				this.stateRowClicked();
			} else {
				this.animateToBottom(3, this.view.lblState, this.view.tbxState);
				this.view.flxDropdownState.setVisibility(false);
			}
			kony.timer.cancel("mytimerState");
		},
    setCountryRowClickCallback: function(rowClickCallback){
      this.view.segCountry.onRowClick = rowClickCallback;
    },
    setStateRowClickCallback: function(rowClickCallback) {
      this.view.segState.onRowClick = rowClickCallback;
    },
    animateToTop: function (animNo, widgetToAnimate) {
      //       alert("animate called for : " + animNo + " , " + widgetToAnimate.id);
      if(animNo === 4)
        {
            this.view.flxDropdownState.setVisibility(false);
            this.view.forceLayout();
        }
      if (!isAnimating[animNo]) {
        isAnimating[animNo] = true;
        widgetToAnimate.animate(animationObjToTop, animationConfig, {
          "animationEnd": function () {
            isAnimating[animNo] = false;
            widgetToAnimate.skin = skins.label;
          }
        });
      }
    },
    animateToBottom: function (animNo, widgetToAnimate, tbxWidget) {
      if (!isAnimating[animNo] && tbxWidget.text === "") {
        isAnimating[animNo] = true;
        widgetToAnimate.animate(animationObjToBottom, animationConfig, {
          "animationEnd": function () {
            isAnimating[animNo] = false;
            widgetToAnimate.skin = skins.placeholder;
          }
        });
      }
    },
    setDataToCountryDropdown: function (data) {
      countrySegData = data;
      this.view.segCountry.widgetDataMap = {
        flxDropdownKA: "flxDropdownKA",
        lblCountryNameKA: "lblCountryNameKA",
        btnRowClick: "btnRowClick"
      };
      this.view.segCountry.setData(countrySegData);
    },
    sortByPrefix: function(data, input) {
      var resultData = [];
      /**
       * prefix data 
       */
      var ignoreData = [];
      for (var i=0; i < data.length; i++) {
        if (data[i].lblCountryNameKA.toLowerCase().startsWith(input)) {
          resultData.push(data[i]);
          ignoreData.push(true);
        } else {
          ignoreData.push(false);
        }
      }
      // sort among the prefixes
      resultData.sort();
      /**
       * parse the ignoreData and add the necesary elements
       */
      for (var i=0; i < ignoreData.length; i++) {
        if (!ignoreData[i]) {
          resultData.push(data[i]);
        }
      }
      return resultData;
    },
    orderData: function(data, codeKey, input) {
      if(data.length == 0) return data;
      var resultData = [];
      var ignoreIndex = [];
      for (var i=0; i<data.length; i++) {
        if (data[i][codeKey].toLowerCase() === input.toLowerCase()) {
          resultData.push(data[i]);
          ignoreIndex.push(true);
        } else {
          ignoreIndex.push(false);
        }
      }

      for (var i=0; i<ignoreIndex.length; i++) {
        if(!ignoreIndex[i]) {
          resultData.push(data[i]);
        }
      }
      return resultData;
    },
    filterCountryData: function () {
      var input = this.view.tbxCountry.text.toLowerCase();
      if (input.length < 1) {
        this.view.flxDropdownCountryKA.setVisibility(false);
        return;
      }
      this.view.flxDropdownCountryKA.setVisibility(true);
      var reg = new RegExp(input);
      var data = countrySegData.filter(function (country) {
        return country.lblCountryNameKA.toLowerCase().startsWith(input) || country.country_code.toLowerCase().startsWith(input);
      });
      data = this.orderData(data, "country_code", input);
      this.view.segCountry.setData(data);
      if (data.length > 0) {
        if (data.length === 1) {
          this.view.flxDropdownCountryKA.height = "40dp";
        } else if (data.length === 2) {
          this.view.flxDropdownCountryKA.height = "80dp";
        } else {
          this.view.flxDropdownCountryKA.height = "120dp";
        }
        //errorComp.hideError();
        this.view.flxSeparator3.skin = skins.separator;
        this.view.flxInvalidCountry.setVisibility(false);
        this.view.segCountry.setVisibility(true);
      } else {
        this.view.flxDropdownCountryKA.height = "120dp";
        this.view.flxSeparator3.skin = skins.errorSep;
        //errorComp.showError("enter a valid country");
        this.view.flxInvalidCountry.setVisibility(true);
        this.view.segCountry.setVisibility(false);
      }
      this.view.forceLayout();
    },
    countryRowClicked: function () {
      var selRow = this.view.segCountry.selectedRowItems[0];
      this.view.tbxCountry.text = selRow.lblCountryNameKA;
      this.view.flxDropdownCountryKA.setVisibility(false);
    },
    setDataToStateDropdown: function (data) {
      stateSegData = data;
      this.view.segState.widgetDataMap = {
        flxDropdownKA: "flxDropdownKA",
        lblCountryNameKA: "lblCountryNameKA",
        btnRowClick: "btnRowClick"
      };
      this.view.segState.setData(stateSegData);
    },
    filterStateData: function () {
      var input = this.view.tbxState.text.toLowerCase();
      if (input.length < 1) {
        this.view.flxDropdownState.setVisibility(false);
        return;
      }
      this.view.flxDropdownCountryKA.setVisibility(false);
      this.view.flxDropdownState.setVisibility(true);
      var reg = new RegExp(input);
      var data = stateSegData.filter(function (state) {
        return state.lblCountryNameKA.toLowerCase().startsWith(input) || state.state_code.toLowerCase().startsWith(input);
      });
      data = this.orderData(data, "state_code", input);
      this.view.segState.setData(data);
      if (data.length > 0) {
        if (data.length === 1) {
          this.view.flxDropdownState.height = "40dp";
        } else if (data.length === 2) {
          this.view.flxDropdownState.height = "80dp";
        } else {
          this.view.flxDropdownState.height = "120dp";
        }
        //errorComp.hideError();
        this.view.flxSeparator4.skin = skins.separator;
        this.view.flxInvalidState.setVisibility(false);
        this.view.segState.setVisibility(true);
      } else {
        this.view.flxDropdownState.height = "120dp";
        this.view.flxSeparator4.skin = skins.errorSep;
        //errorComp.showError("enter a valid state");
        this.view.flxInvalidState.setVisibility(true);
        this.view.segState.setVisibility(false);
      }
      this.view.forceLayout();
    },
    stateRowClicked: function () {
      var selRow = this.view.segState.selectedRowItems[0];
      this.view.tbxState.text = selRow.lblCountryNameKA;
      this.view.flxDropdownState.setVisibility(false);
    },
    getSelectedStateCode: function(){
      var state = this.getState();
      var selectedStateCode = state;
      if(Array.isArray(stateSegData) && stateSegData.length > 0) {
        var len = stateSegData.length;
        state = state +"";
        state = state.trim().toLowerCase();
        for(var i=0; i<len; i++) {
          if(state === stateSegData[i].lblCountryNameKA.trim().toLowerCase()) {
            selectedStateCode = stateSegData[i].state_code;
            break;
          }
        }
      }
      return selectedStateCode;
    },
    getAddressLine1: function () {
      return this.view.tbxAddressLine1.text;
    },
    getAddressLine2: function () {
      return this.view.tbxAddressLine2.text;
    },
    getCountry: function () {
      return this.view.tbxCountry.text;
    },
    getState: function () {
      return this.view.tbxState.text;
    },
    getCity: function () {
      return this.view.tbxCity.text;
    },
    getZipCode: function () {
      return this.view.tbxZipCode.text;
    },
    getAddress: function () {
      if (this.getAddressLine2() != "") {
        return (this.getAddressLine1() + ", " + this.getAddressLine2() + ", " + this.getCity() + ", " + this.getState() + ", " + this.getCountry() + ", " + this.getZipCode());
      }
      return (this.getAddressLine1() + ", " + this.getCity() + ", " + this.getState() + ", " + this.getCountry() + ", " + this.getZipCode());
    },
    setAddressLine1: function (newAdd) {
      this.animateToTop(0, this.view.lblAddressLine1);
      this.view.tbxAddressLine1.text = newAdd;
    },
    setAddressLine2: function (newAdd) {
      this.animateToTop(1, this.view.lblAddressLine2);
      this.view.tbxAddressLine2.text = newAdd;
    },
    setCountry: function (newAdd) {
      this.animateToTop(2, this.view.lblCountry);
      this.view.tbxCountry.text = newAdd;
    },
    setState: function (newAdd) {
      this.animateToTop(3, this.view.lblState);
      this.view.tbxState.text = newAdd;
    },
    setCity: function (newAdd) {
      this.animateToTop(4, this.view.lblCity);
      this.view.tbxCity.text = newAdd;
    },
    setZipCode: function (newAdd) {
      this.animateToTop(5, this.view.lblZipCode);
      this.view.tbxZipCode.text = newAdd;
    },
    clear : function(){
      this.view.tbxAddressLine1.text = "";
      this.animateToBottom(0, this.view.lblAddressLine1, this.view.tbxAddressLine1);
      this.view.tbxAddressLine2.text = "";
      this.animateToBottom(1, this.view.lblAddressLine2, this.view.tbxAddressLine2);
      this.view.tbxCountry.text = "";
      this.animateToBottom(2, this.view.lblCountry, this.view.tbxCountry);
      this.view.tbxState.text = "";
      this.animateToBottom(3, this.view.lblState, this.view.tbxState);
      this.view.tbxCity.text = "";
      this.animateToBottom(4, this.view.lblCity, this.view.tbxCity);
      this.view.tbxZipCode.text = "";
      this.animateToBottom(5, this.view.lblZipCode, this.view.tbxZipCode);
    },
    onBreakpointChange: function (event, width) {
			kony.print("address bp change : " + width);
			var mobileGutterSpace = "2.5%";
			var desktopGutterSpace = "30dp";
			var desktopWidgetSpace = "15dp";
			if (width === 640) {
				skins = skinsM;
				this.view.flxCountryAndState.height = "140dp";
				this.view.flxCountry.width = "100%";
				this.view.flxState.top = "70dp";
				this.view.flxState.width = "100%";
				this.view.flxCityAndZipCode.height = "140dp";
				this.view.flxTbxCity.width = "100%";
				this.view.flxTbxZipCode.top = "70dp";
				this.view.flxTbxZipCode.width = "100%";

				this.view.lblAddressLine1.left = mobileGutterSpace;
				this.view.lblAddressLine1.right = mobileGutterSpace;
				this.view.tbxAddressLine1.left = mobileGutterSpace;
				this.view.tbxAddressLine1.right = mobileGutterSpace;
				this.view.flxSeparator1.left = mobileGutterSpace;
				this.view.flxSeparator1.right = mobileGutterSpace;

				this.view.lblAddressLine2.left = mobileGutterSpace;
				this.view.lblAddressLine2.right = mobileGutterSpace;
				this.view.tbxAddressLine2.left = mobileGutterSpace;
				this.view.tbxAddressLine2.right = mobileGutterSpace;
				this.view.flxSeparator2.left = mobileGutterSpace;
				this.view.flxSeparator2.right = mobileGutterSpace;

				this.view.lblCountry.left = mobileGutterSpace;
				this.view.lblCountry.right = mobileGutterSpace;
				this.view.tbxCountry.left = mobileGutterSpace;
				this.view.tbxCountry.right = mobileGutterSpace;
				this.view.flxSeparator3.left = mobileGutterSpace;
				this.view.flxSeparator3.right = mobileGutterSpace;
				this.view.flxDropdownCountryKA.left = mobileGutterSpace;
				this.view.flxDropdownCountryKA.right = mobileGutterSpace;

				this.view.lblState.left = mobileGutterSpace;
				this.view.lblState.right = mobileGutterSpace;
				this.view.tbxState.left = mobileGutterSpace;
				this.view.tbxState.right = mobileGutterSpace;
				this.view.flxSeparator4.left = mobileGutterSpace;
				this.view.flxSeparator4.right = mobileGutterSpace;
				this.view.flxDropdownState.left = mobileGutterSpace;
				this.view.flxDropdownState.right = mobileGutterSpace;

				this.view.lblCity.left = mobileGutterSpace;
				this.view.lblCity.right = mobileGutterSpace;
				this.view.tbxCity.left = mobileGutterSpace;
				this.view.tbxCity.right = mobileGutterSpace;
				this.view.flxSeparator5.left = mobileGutterSpace;
				this.view.flxSeparator5.right = mobileGutterSpace;

				this.view.lblZipCode.left = mobileGutterSpace;
				this.view.lblZipCode.right = mobileGutterSpace;
				this.view.tbxZipCode.left = mobileGutterSpace;
				this.view.tbxZipCode.right = mobileGutterSpace;
				this.view.flxSeparator6.left = mobileGutterSpace;
				this.view.flxSeparator6.right = mobileGutterSpace;

				this.view.lblAddressTnC.left = mobileGutterSpace;
				this.view.lblAddressTnC.right = mobileGutterSpace;
				this.view.flxTnCSeparator.left = mobileGutterSpace;
				this.view.flxTnCSeparator.right = mobileGutterSpace;

			} else {
				skins = skinsDW
				this.view.flxCountryAndState.height = "70dp";
				this.view.flxCountry.width = "50%";
				this.view.flxState.top = "0dp";
				this.view.flxState.width = "50%";
				this.view.flxCityAndZipCode.height = "70dp";
				this.view.flxTbxCity.width = "50%";
				this.view.flxTbxZipCode.top = "0dp";
				this.view.flxTbxZipCode.width = "50%";

				this.view.lblAddressLine1.left = desktopGutterSpace;
				this.view.lblAddressLine1.right = desktopGutterSpace;
				this.view.tbxAddressLine1.left = desktopGutterSpace;
				this.view.tbxAddressLine1.right = desktopGutterSpace;
				this.view.flxSeparator1.left = desktopGutterSpace;
				this.view.flxSeparator1.right = desktopGutterSpace;

				this.view.lblAddressLine2.left = desktopGutterSpace;
				this.view.lblAddressLine2.right = desktopGutterSpace;
				this.view.tbxAddressLine2.left = desktopGutterSpace;
				this.view.tbxAddressLine2.right = desktopGutterSpace;
				this.view.flxSeparator2.left = desktopGutterSpace;
				this.view.flxSeparator2.right = desktopGutterSpace;

				this.view.lblCountry.left = desktopGutterSpace;
				this.view.lblCountry.right = desktopWidgetSpace;
				this.view.tbxCountry.left = desktopGutterSpace;
				this.view.tbxCountry.right = desktopWidgetSpace;
				this.view.flxSeparator3.left = desktopGutterSpace;
				this.view.flxSeparator3.right = desktopWidgetSpace;
				this.view.flxDropdownCountryKA.left = desktopGutterSpace;
				this.view.flxDropdownCountryKA.right = desktopWidgetSpace;

				this.view.lblState.left = desktopWidgetSpace;
				this.view.lblState.right = desktopGutterSpace;
				this.view.tbxState.left = desktopWidgetSpace;
				this.view.tbxState.right = desktopGutterSpace;
				this.view.flxSeparator4.left = desktopWidgetSpace;
				this.view.flxSeparator4.right = desktopGutterSpace;
				this.view.flxDropdownState.left = desktopWidgetSpace;
				this.view.flxDropdownState.right = desktopGutterSpace;

				this.view.lblCity.left = desktopGutterSpace;
				this.view.lblCity.right = desktopWidgetSpace;
				this.view.tbxCity.left = desktopGutterSpace;
				this.view.tbxCity.right = desktopWidgetSpace;
				this.view.flxSeparator5.left = desktopGutterSpace;
				this.view.flxSeparator5.right = desktopWidgetSpace;

				this.view.lblZipCode.left = desktopWidgetSpace;
				this.view.lblZipCode.right = desktopGutterSpace;
				this.view.tbxZipCode.left = desktopWidgetSpace;
				this.view.tbxZipCode.right = desktopGutterSpace;
				this.view.flxSeparator6.left = desktopWidgetSpace;
				this.view.flxSeparator6.right = desktopGutterSpace;

				this.view.lblAddressTnC.left = desktopGutterSpace;
				this.view.lblAddressTnC.right = desktopGutterSpace;
				this.view.flxTnCSeparator.left = desktopGutterSpace;
				this.view.flxTnCSeparator.right = desktopGutterSpace;
			}
			this.setSkins();
		}
  };
});