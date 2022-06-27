define(function () {
  var isAnimating = [false, false, false, false, false, false];
  var onLayoutDone = function() {
      initCloseListHandlers(this);
  };
  var changeContinueButtonState = function(){};
  var initCloseListHandlers = function(controller) {
        var closeList = function() {
            dismissVisibilityOfSuggestions.call(controller);
        };
        var handleFormClick = function(event) {
            closeList();
        };
        var currForm = document.querySelector("[id^=frm]");
        currForm.addEventListener("click", handleFormClick, false);
   };
  var dismissVisibilityOfSuggestions = function() {
        this.view.flxAddressPopup.setVisibility(false);
        this.view.flxDropdownState.setVisibility(false);
  };
  var skins = {
    tbxSkin: "tbxTransparent",
    separator: "flxSeparator",
    errorSep: "flxSeparatorError",
    placeholder: "sknlbla0a0a015px",
    label: "lblBody15"
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
  var errorComp;
  return {
    initialize : function(callback){
      this.view.doLayout = onLayoutDone.bind(this);
      changeContinueButtonState = callback;
    },
    mapErrorComp: function(errorWidget){
      errorComp = errorWidget;
    },
    addressPreShow: function () {
      this.setPlaceholderSkin();
      this.setActions();
    },
    setPlaceholderSkin: function () {
      this.view.lblAddressLine1.skin = skins.placeholder;
      this.view.lblAddressLine2.skin = skins.placeholder;
      this.view.lblState.skin = skins.placeholder;
      this.view.lblCity.skin = skins.placeholder;
      this.view.lblZipCode.skin = skins.placeholder;
    },
    setActiveSkin: function () {
      this.view.lblAddressLine1.skin = skins.label;
      this.view.lblAddressLine2.skin = skins.label;
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
      this.view.tbxState.onTouchStart = function () {
        scope.animateToTop(3, scope.view.lblState);
        //scope.filterStateData();
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
      this.view.tbxState.onBeginEditing = function () {
        scope.animateToTop(3, scope.view.lblState);
        //scope.filterStateData();
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
      this.view.tbxState.onKeyUp = function () {
        scope.animateToTop(3, scope.view.lblState);
        //scope.filterStateData();
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
      this.view.tbxState.onDone = function () {
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
      this.view.tbxState.onEndEditing = function () {
        scope.animateToBottom(3, scope.view.lblState, scope.view.tbxState);
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
    filterStateData: function () {
      
    },
    stateRowClicked: function () {
     
    },
    getAddressLine1: function () {
      return this.view.tbxAddressLine1.text;
    },
    getAddressLine2: function () {
      return this.view.tbxAddressLine2.text;
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
        return (this.getAddressLine1() + ", " + this.getAddressLine2() + ", " + this.getCity() + ", " + this.getState() + ", " + this.getZipCode());
      }
      return (this.getAddressLine1() + ", " + this.getCity() + ", " + this.getState() + ", " + this.getZipCode());
    },
    setAddressLine1: function (newAdd) {
      this.animateToTop(0, this.view.lblAddressLine1);
      this.view.tbxAddressLine1.text = newAdd;
    },
    setAddressLine2: function (newAdd) {
      this.animateToTop(1, this.view.lblAddressLine2);
      this.view.tbxAddressLine2.text = newAdd;
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
  };
});