define(function() {
  var skins = {
    tbxSkin: "txtNoBorder15",
    separator: "flxSeparator",
    errorSep: "flxSeparatorError",
    placeholder: "lblPlaceholder15",
    title: "lblTitle15"
  };
  var animatePlaceholderUp = function() {     
    var scope = this;
    this.view.lblAnimatedKA.animate(
      kony.ui.createAnimation({
        "100": {
          "bottom": "31dp",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.15
      },{
        "animationEnd" : function () {
          scope.view.lblAnimatedKA.skin = skins.title;
        }
      }
    );
  };

  var animatePlaceholderDown = function() {
    var scope = this;
    this.view.lblAnimatedKA.animate(
      kony.ui.createAnimation({
        "100": {
          "bottom": "11dp",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.15
      },{
        "animationEnd" : function () {
          scope.view.lblAnimatedKA.skin = skins.placeholder;
        }
      }
    );
  };

  
  var errorHandler = function() {
    this.errorCounter++;
    if (this.notifyByMessage) {
      this.view.lblErrorMsgKA.setVisibility(true);
    }

    if (this.notifyByLine) {
      this.view.flxUnderlineKA.skin = skins.errorSep;
      this.view.flxUnderlineKA.height = "1"; 
    }
  };

  return {    

    initialize: function() {      
      var self = this;
      this.notifyByMessage = true;
      this.notifyByLine = true;
      this.errorCounter = 0;
      var textBox = this.view.tbxAnimatedKA;
      textBox.onBeginEditing = function() {
        if (self.errorCounter > 0) {
          self.view.lblErrorMsgKA.setVisibility(false);
          self.view.flxUnderlineKA.skin = skins.separator;
          self.view.flxUnderlineKA.height = "2";
          self.errorCounter--;
        }
        animatePlaceholderUp.call(self);
      };
      textBox.onEndEditing = function() {
        if (textBox.text.length === 0) {
          animatePlaceholderDown.call(self);
        }else{
          animatePlaceholderUp.call(self);
        }
        if (self.eventCallback) {
          self.eventCallback();
        }
      };
    },
    
    

    getText: function() {
      return this.view.tbxAnimatedKA.text;
    },
    clear: function (){
      this.setText("");
    },
    setText: function(text) {
      if (text != "" && text != null && text != undefined) {
        animatePlaceholderUp.call(this);
        this.view.tbxAnimatedKA.text = text;
      } else {
        animatePlaceholderDown.call(this);
        this.view.tbxAnimatedKA.text = "";
      }
    },
    setCallback: function(callback) {
      this.eventCallback = callback;
    },

    setErrorNotificationFlags: function(notifyByMessage, notifyByLine) {
      this.notifyByMessage = notifyByMessage;
      this.notifyByLine = notifyByLine;
    },

    onError: function() {
      errorHandler.call(this);
    },

    subscribe: function(observer) {
      if (observer instanceof Observer) {
        observer.register(this.view.id, errorHandler.bind(this));
      }
    },

    unsubscribe: function(observer) {
      if (observer instanceof Observer) {
        observer.unregister(this.view.id);
      }
    },
    clear: function() {
      this.view.tbxAnimatedKA.text = undefined;
    },
    onBreakpointChange : function(event, width){
      if (width <= 640) {
        skins.tbxSkin = "txtNoBorder13";
        skins.title = "lblTitle13";
        skins.placeholder = "lblPlaceholder13";
        if (this.view.lblAnimatedKA.skin === "lblPlaceholder13" || this.view.lblAnimatedKA.skin === "lblPlaceholder15") {
          this.view.lblAnimatedKA.skin = skins.placeholder;
        } else{
          this.view.lblAnimatedKA.skin = skins.title;
        }
        this.view.tbxAnimatedKA.skin = skins.tbxSkin;
      } else{
        skins.tbxSkin = "txtNoBorder15";
        skins.title = "lblTitle15";
        skins.placeholder = "lblPlaceholder15";
        if (this.view.lblAnimatedKA.skin === "lblPlaceholder13" || this.view.lblAnimatedKA.skin === "lblPlaceholder15") {
          this.view.lblAnimatedKA.skin = skins.placeholder;
        } else{
          this.view.lblAnimatedKA.skin = skins.title;
        }
        this.view.tbxAnimatedKA.skin = skins.tbxSkin;
      }
      this.view.forceLayout();
    }
  };
});