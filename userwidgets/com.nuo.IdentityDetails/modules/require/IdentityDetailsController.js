define(function() {
  var isAnimating = [false, false, false];
  var changeContinueButtonState = function(){};
  var skins = {
    tbxSkin: "tbxTransparent",
    separator: "flxSeparator",
    errorSep: "flxSeparatorError",
    placeholder: "sknlbla0a0a015px",
    title: "lblTitle15"
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
  var idTypeSegData = [];
  var checkBoxActive = "checkbox_active.png";
  var checkBoxInActive = "checkbox_inactive.png";
  var sameAsPrimaryCallback = function(){

  };
	return {
    initialize : function(callback){
      this.view.atbxIdNumber.initialize();
      this.view.atbxTINNumber.initialize();
      changeContinueButtonState = callback;
    },
      identityPreShow: function () {
      this.setActions();
    },
      identityPostShow: function() {
        this.view.lblHeader.accessibilityConfig = {
          "a11yARIA": {
            "role": "heading",
            "aria-level": "2",
        "tabindex": -1
          }
        };
        this.view.lblSubHeaderTitle.accessibilityConfig = {
          "a11yARIA": {
            "role": "heading",
            "aria-level": "3",
        "tabindex": -1
          }
        };
        this.view.lblSubHeaderTitle1.accessibilityConfig = {
          "a11yARIA": {
            "role": "heading",
            "aria-level": "3",
        "tabindex": -1
          }
        };
        this.view.lblSubHeaderTitle3.accessibilityConfig = {
          "a11yARIA": {
            "role": "heading",
            "aria-level": "3",
        "tabindex": -1
          }
        };
        this.view.segIdentityType.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": 0
        }

      };
      },
    setActions: function () {
      var scope = this;
      scope.view.flxCheckBoxContainer.onClick = function(){
        var imageWidget = scope.view.imgCheckBox;
        if(scope.view.imgCheckBox.src === checkBoxActive) {
          imageWidget.src = checkBoxInActive;
        } else {
          imageWidget.src = checkBoxActive;
        }
        sameAsPrimaryCallback(imageWidget.src === checkBoxInActive);
      };
	  this.view.tbxCountry.onTouchStart = function () {
        scope.animateToTop(0, scope.view.lblCountry);
        scope.filterCountryData();
      };
      this.view.tbxState.onTouchStart = function () {
        scope.animateToTop(1, scope.view.lblState);
        scope.filterStateData();
      };
      this.view.tbxIDType.onTouchStart = function () {
        scope.animateToTop(2, scope.view.lblIDType);
        scope.showIdentityData();
        changeContinueButtonState();
      };
 	  this.view.tbxCountry.onBeginEditing = function () {
        scope.animateToTop(0, scope.view.lblCountry);
        scope.filterCountryData();
      };
      this.view.tbxState.onBeginEditing = function () {
        scope.animateToTop(1, scope.view.lblState);
        scope.filterStateData();
      };
      this.view.tbxIDType.onBeginEditing = function () {
        scope.animateToTop(2, scope.view.lblIDType);
        scope.showIdentityData();
        scope.view.flxSeparator1.skin = skins.separator;
        changeContinueButtonState();
      };
	  this.view.tbxCountry.onKeyUp = function () {
        scope.animateToTop(0, scope.view.lblCountry);
        scope.filterCountryData();
      };
      this.view.tbxState.onKeyUp = function () {
        scope.animateToTop(1, scope.view.lblState);
        scope.filterStateData();
      };
      this.view.tbxIDType.onKeyUp = function () {
        scope.animateToTop(2, scope.view.lblIDType);
        scope.showIdentityData();
        scope.view.flxSeparator1.skin = skins.separator;
       	changeContinueButtonState();
      };
   	  this.view.tbxCountry.onDone = function () {
        if (scope.view.segCountry.data.length != 0) {
          scope.view.segCountry.selectedIndex = [0, 0];
          scope.view.segCountry.onRowClick();
        }
        scope.animateToBottom(0, scope.view.lblCountry, scope.view.tbxCountry);
      };
      this.view.tbxState.onDone = function () {
        if (scope.view.segState.data.length != 0) {
          scope.view.segState.selectedIndex = [0, 0];
          scope.stateRowClicked();
        }
        scope.animateToBottom(1, scope.view.lblState, scope.view.tbxState);
      };
      this.view.tbxIDType.onDone = function () {
        if (scope.view.segIdentityType.data.length != 0) {
          scope.view.segIdentityType.selectedIndex = [0, 0];
          scope.idTypeRowClicked();
        }
        scope.animateToBottom(2, scope.view.lblIDType, scope.view.tbxIDType);
        scope.view.flxSeparator1.skin = skins.separator;
        scope.hideIdentityData(); 
        changeContinueButtonState();
      };
	  this.view.tbxCountry.onEndEditing = function () {
        kony.timer.schedule("mytimerCountry", scope.selectCountryOnlyOption, 0.2, false);
      };
      this.view.tbxState.onEndEditing = function () {
        kony.timer.schedule("mytimerState", scope.selectStateOnlyOption, 0.2, false);
      };
      this.view.tbxIDType.onEndEditing = function () {
        kony.timer.schedule("mytimerIDType", scope.idTypeEndEditing, 0.2, false);
      };
      this.view.segState.onRowClick = this.stateRowClicked;
      this.view.segIdentityType.onRowClick = this.idTypeRowClicked;
      changeContinueButtonState();
	},
      
    selectCountryOnlyOption: function () {
      if (this.view.tbxCountry.text !== "" && this.view.segCountry.data.length === 1) {
        this.view.segCountry.selectedIndex = [0, 0];
        this.countryRowClicked();
      } else {
        this.animateToBottom(0, this.view.lblCountry, this.view.tbxCountry);
        this.view.flxDropdownCountryKA.setVisibility(false);
      }
      kony.timer.cancel("mytimerCountry");
    },
    selectStateOnlyOption: function () {
      if (this.view.tbxState !== "" && this.view.segState.data.length === 1) {
        this.view.segState.selectedIndex = [0, 0];
        this.stateRowClicked();
      } else {
        this.animateToBottom(1, this.view.lblState, this.view.tbxState);
        this.view.flxDropdownState.setVisibility(false);
      }
      kony.timer.cancel("mytimerState");
    },
    checkDropdown: function(){
      if(document.querySelectorAll("#frmIdentityDetails_IdentityDetails_segIdentityType input#CopyflxDropdownKA_btnRowClick:focus").length <1) {
        //console.log(document.querySelectorAll("#frmIdentityDetails_IdentityDetails_segIdentityType input#CopyflxDropdownKA_btnRowClick:focus"));
		this.animateToBottom(2, this.view.lblIDType, this.view.tbxIDType);
        //this.hideIdentityData();
        kony.timer.cancel("myDropdownTimer");
      }
      //console.log(document.querySelectorAll(':focus')[0]);
    },
    idTypeEndEditing: function(){
      //this.hideIdentityData();
      kony.timer.schedule("myDropdownTimer", this.checkDropdown, 0.5, true);
      kony.timer.cancel("mytimerIDType");
    },
    setCheckBoxImage: function(bool) {
      this.view.imgCheckBox.src = (bool) ? checkBoxActive : checkBoxInActive;
    },
    setCountryRowClickCallback: function(rowClickCallback){
      this.view.segCountry.onRowClick = rowClickCallback;
    },
    setStateRowClickCallback: function(rowClickCallback) {
      this.view.segState.onRowClick = rowClickCallback;
    }, 
    setIDTypeRowClickCallback: function(rowClickCallback) {
      this.view.segIdentityType.onRowClick = rowClickCallback;
    },
    animateToTop: function (animNo, widgetToAnimate) {
      if (!isAnimating[animNo]) {
        isAnimating[animNo] = true;
        widgetToAnimate.animate(animationObjToTop, animationConfig, {
          "animationEnd": function () {
            isAnimating[animNo] = false;
            widgetToAnimate.skin = skins.title;
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
    onBreakpointChange: function(event, width){
      if(!width){
        width = kony.application.getCurrentBreakpoint();
      }
      if (this.view.tbxCountry.text != "") {
        this.view.lblCountry.top = "20dp";
        this.view.lblCountry.skin = skins.title;
      }else{
        this.view.lblCountry.top = "40dp";
        this.view.lblCountry.skin = skins.placeholder;
      }
      if (this.view.tbxState.text != "") {
        this.view.lblState.top = "20dp";
        this.view.lblState.skin = skins.title;
      }else{
        this.view.lblState.top = "40dp";
        this.view.lblState.skin = skins.placeholder;
      }
      if(width == 640){
        this.view.lblHeader.skin = "lblTitle15";
      }
      else{
        this.view.lblHeader.skin = "lblTitle17";
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
    showIdentityData: function(){
      this.view.flxDropdownIdentityType.setVisibility(true);
    },
    hideIdentityData: function(){
      this.view.flxDropdownIdentityType.setVisibility(false);
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
    setDataToIDTypeDropdown: function (data) {
      idTypeSegData = data;
      this.view.segIdentityType.widgetDataMap = {
        flxDropdownKA: "flxDropdownKA",
        lblCountryNameKA: "lblCountryNameKA",
        btnRowClick: "btnRowClick"
      };
      this.view.segIdentityType.setData(idTypeSegData);
    },
    idTypeRowClicked: function () {
      //alert("cliecked seg");
      this.animateToTop(2, this.view.lblIDType);
      var selRow = this.view.segIdentityType.selectedRowItems[0];
      this.view.tbxIDType.text = selRow.lblCountryNameKA;
      this.hideIdentityData();
    },
    getCountry: function () {
      return this.view.tbxCountry.text;
    },
    getState: function () {
      return this.view.tbxState.text;
    },
    getIDType: function () {
      return this.view.tbxIDType.text;
    },
    setCountry: function (newAdd) {
      this.animateToTop(0, this.view.lblCountry);
      this.view.tbxCountry.text = newAdd;
    },
    setState: function (newAdd) {
      this.animateToTop(1, this.view.lblState);
      this.view.tbxState.text = newAdd;
    },
    setIDType: function (newAdd) {
      this.animateToTop(2, this.view.lblIDType);
      this.view.tbxIDType.text = newAdd;
    },
    setVisibilityOfSameAsPrimaryApplicant: function(bool) {
      this.view.flxSameAsPrimaryApplicantWrapper.setVisibility(bool);
    },
    setSameAsPrimaryApplicantOnClickCallback: function(callback) {
      sameAsPrimaryCallback = callback;
    }
	};
});