/* 
Add onBreakpoint of component in form's onBreakpointChange function
*/

define(function() {
  var animDuration = 0.2;
  var segTemplate = "flxproductSelection";
  var skins = {
    "selectedTemplateFlex" : "flxBlueBgwithBlueBorder4px",
    //"normalTemplateFlex" : "flxGreyBgwithBorder4Px"
    "normalTemplateFlex" : "flxWhiteBgwithBorder"
  };
  return {
    rowClickCallback : null,
    isOptionsExpanded:true,
    setRowClickCallback:function(callback){
      this.rowClickCallback = callback;
    },
    compPreShow : function(){      
      this.view.flxDropDown.onClick = this.AnimateSeg;
      this.view.segProductOptions.onRowClick = this.toggleCheckbox;
    },
    compPostShow: function() {
      this.view.imgDropDown.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": -1
        }
      };

      this.view.segProductOptions.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": -1
        }
      };
      var scope = this;
      window.document.querySelectorAll("[kwp*='selectProducts1_flxDropDown']").forEach(
        function(element) {
          element.setAttribute('tabindex', '0');
          element.setAttribute('role', 'button');
          element.setAttribute('aria-label', 'button for dropdown options');
          element.onclick = function() {
            scope.AnimateSeg;
            document.querySelectorAll("#frmProductSelectionNew_selectProducts1_imgDropDown").forEach(
              function(elem) {
                elem.setAttribute('tabindex','-1');
                elem.setAttribute('alt','');
              }
            );
          }
        }
      );
      window.document.querySelectorAll("[kwp*='selectProducts2_flxDropDown']").forEach(
        function(element) {
          element.setAttribute('tabindex', '0');
          element.setAttribute('role', 'button');
          element.setAttribute('aria-label', 'button for dropdown options');
          element.onclick = function() {
            scope.AnimateSeg;
            document.querySelectorAll("#frmProductSelectionNew_selectProducts1_imgDropDown").forEach(
              function(elem) {
                elem.setAttribute('tabindex','-1');
                elem.setAttribute('alt','');
              }
            );
          }
        }
      );
      window.document.querySelectorAll("img#flxproductSelection_imgCheckBox").forEach(
        function(elem) {
          elem.setAttribute('tabindex',-1);
          elem.setAttribute('alt',"");
        }
      );
      var b = window.document.querySelectorAll("img#flxproductSelection_imgProduct");
      for(var i=0;i<b.length;i++) {
        b[i].setAttribute('tabindex',-1);
        b[i].setAttribute('alt',"");
      }
    },
    showNoProducts : function(){
      this.view.flxSegContainer.isVisible = false;
      this.view.flxNoProductsSelected.isVisible = true;
    },
    hideNoProducts : function(){
      this.view.flxSegContainer.isVisible = true;
      this.view.flxNoProductsSelected.isVisible = false;
    },
    onBreakpointChange : function(event, width){
      if(width === 640){
        this.view.flxSelectProduct.left = "10dp";
        this.view.flxSelectProduct.right = "10dp";
        segTemplate = "flxProductSelectionMobile";
      }
      else if(width === 1024){
        this.view.flxSelectProduct.left = "20dp";
        this.view.flxSelectProduct.right = "20dp";
        segTemplate = "flxproductSelection";
      }
      else{
        this.view.flxSelectProduct.left = "30dp";
        this.view.flxSelectProduct.right = "30dp";
        segTemplate = "flxproductSelection";
      }
      var data = this.view.segProductOptions.data;
      for(var i=0; i < data.length; i++){
        data[i].template = segTemplate;
      }
      this.view.segProductOptions.setData(data);
    },
    AnimateSeg : function(){
      //var idSegment = "frmProductSelectionNew_"+ this.view.id +"_segProductOptions";
      //var dropdownTabIndexZeroElements = document.querySelectorAll("#"+ idSegment +" #flxproductSelection_flxCheckBox");
      //var dropdownKnowMoreElements = document.querySelectorAll("#"+ idSegment +" #flxproductSelection_btnKnowMore");
      var dropdownTabIndexZeroElements = document.querySelectorAll("[kwp*='flxproductSelection_flxCheckBox']");
      var dropdownKnowMoreElements = document.querySelectorAll("[kwp*='flxproductSelection_btnKnowMore']");
      if(this.isOptionsExpanded === false){
        this.animShowProductOptions(); 
        this.compPostShow();
        dropdownTabIndexZeroElements.forEach(
          function(elem) {
            elem.setAttribute('tabindex', '0');
          }
        );
        dropdownKnowMoreElements.forEach(
          function (elem) {
            elem.setAttribute('tabindex', '0');
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
      }
      else {
        this.animHideProductOptions(); 
        this.compPostShow(); 
        dropdownTabIndexZeroElements.forEach(
          function(elem) {
            elem.setAttribute('tabindex', '-1');
          }
        );
        dropdownKnowMoreElements.forEach(
          function (elem) {
            elem.setAttribute('tabindex', '-1');
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
      }
    },
    animHideProductOptions : function(){
      var scope = this;
      this.view.flxSelectProduct.animate(
        kony.ui.createAnimation({
          "0": {
            //"height": "545px",//"preferred",
            "height": "555px",//"preferred",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
          },
          "100": {
            "height": "50dp",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": animDuration
        },{
          "animationEnd" : function () {
            scope.view.imgDropDown.src = "dropdowndown.png";
            scope.isOptionsExpanded = false;

          }
        }
      );
    },
    animShowProductOptions : function(){
      var scope = this;
      this.view.flxSelectProduct.animate(
        kony.ui.createAnimation({
          "0": {
            "height": "50dp",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
          },
          "100": {
            "height": "555px",//"preferred",
            //"height": "602px",//"preferred",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": animDuration
        },{
          "animationEnd" : function () {
            scope.view.imgDropDown.src = "dropdowniconup.png";
            scope.isOptionsExpanded = true;
          }
        }
      );
    },
    hideProductOptions : function(){
      this.view.flxSelectProduct.height = "50dp";
      this.view.imgDropDown.src = "dropdowndown.png";
      this.isOptionsExpanded = false;
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
    },
    showProductOptions : function(){
      this.view.flxSelectProduct.height = "555px",//"preferred";
        //this.view.flxSelectProduct.height = "603px",//"preferred";
        this.view.imgDropDown.src = "dropdowniconup.png";
      this.isOptionsExpanded = true;
      this.view.flxSelectProduct.forceLayout();
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
    },
    onKnowMoreClick:function(event, context){
      //console.log(event);
      //console.log(context);
      var data = this.view.segProductOptions.data;
      //var rowIndex = this.view.segProductOptions.selectedRowIndex[1];
      var rowIndex = context.rowIndex;
      switch(rowIndex){
        case 0:
          if(data[rowIndex].btnKnowMore.text =="Know More"){
            data[rowIndex].btnKnowMore = {"text": "Show Less","onclick" : this.onKnowMoreClick};
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Prime Savings Account gives you an edge in the way you bank. Benefits of the Prime Savings Account include enhanced transaction limits and free checkbooks";
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)+20;
          }else{
            data[rowIndex].btnKnowMore = {"text": "Know More","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Prime Savings Account gives you an edge in the way you bank."
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)-20;
          }
          break;
        case 1:
          if(data[rowIndex].btnKnowMore.text =="Know More"){
            data[rowIndex].btnKnowMore = {"text": "Show Less","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Savings Account is uniquely design for you to achieve your financial goals. We provide the optimum solution for you to manage your money efficiently.";
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)+20;
          }else{
            data[rowIndex].btnKnowMore = {"text": "Know More","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Savings Account is uniquely design for you to achieve your financial goals."
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)-20;
          }
          break;
        case 2:
          if(data[rowIndex].btnKnowMore.text =="Know More"){
            data[rowIndex].btnKnowMore = {"text": "Show Less","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "The Standard Savings Account simplifies banking for the independent women of today. Benefits of the Women’s Savings Account include low opening deposit and attractive interest rate";
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)+20;
          }else{
            data[rowIndex].btnKnowMore = {"text": "Know More","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "The Standard Savings Account simplifies banking for the independent women of today."
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)-20;
          }
          break;
        case 3:
          if(data[rowIndex].btnKnowMore.text =="Know More"){
            data[rowIndex].btnKnowMore = {"text": "Show Less","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Easily manage your everyday spending, whatever your needs, with one of our checking accounts. You’ll also be able to take advantage of all the rewards and benefits you get as our customer";
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)+20;
          }else{
            data[rowIndex].btnKnowMore = {"text": "Know More","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Easily manage your everyday spending, whatever your needs, with one of our checking accounts."
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)-20;
          }
          break;
        case 4:
          if(data[rowIndex].btnKnowMore.text =="Know More"){
            data[rowIndex].btnKnowMore = {"text": "Show Less","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "The basic checking account that comes with standard benefits like a debit card that doubles as an ATM card. It also gives you full access to Online Banking, a suite of tools and apps that make it easy to track all your transaction and more";
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)+20;
          }else{
            data[rowIndex].btnKnowMore = {"text": "Know More","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "The basic checking account that comes with standard benefits like a debit card that doubles as an ATM card."
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)-20;
          }
          break;
        case 5:
          if(data[rowIndex].btnKnowMore.text =="Know More"){
            data[rowIndex].btnKnowMore = {"text": "Show Less","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Best for the customers who want to earn interest, Higher account balances and customers who have a Mortgage";
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)+20;
          }else{
            data[rowIndex].btnKnowMore = {"text": "Know More","onclick" : this.onKnowMoreClick}
            data[rowIndex].btnKnowMore.onClick = this.onKnowMoreClick;
            data[rowIndex].lblProductDescription = "Best for the customers who want to earn interest,"
            this.view.flxSelectProduct.height =   parseInt(this.view.flxSelectProduct.height)-20;
          }
          break;
      }

      //alert('hi')
      //        data[rowIndex].btnKnowMore.onClick = function(){
      //            if(rowIndex==0){
      //              data[rowIndex].lblProductDescription = "XYZ"
      //            }
      //       }
      this.view.segProductOptions.setDataAt(data[rowIndex], rowIndex, 0);
      //this.view.forceLayout();
    },

    toggleCheckbox : function(){
      //To set fromComp to selected seg by dev team in the form controller
      var data = this.view.segProductOptions.data;
      var rowIndex = this.view.segProductOptions.selectedRowIndex[1];
      if(data[rowIndex].imgCheckBox.src === "checkbox_activewhite.png"){
        data[rowIndex].flxMain.skin = skins.normalTemplateFlex;
        data[rowIndex].imgCheckBox.src = "checkbox_inactive.png";
      }else{
        data[rowIndex].flxMain.skin = skins.selectedTemplateFlex;
        data[rowIndex].imgCheckBox.src = "checkbox_activewhite.png";
      }
      //       data[rowIndex].btnKnowMore.onClick = function(){
      //            if(rowIndex==0){
      //              data[rowIndex].lblProductDescription = "XYZ"
      //            }
      //       }
      this.view.segProductOptions.setDataAt(data[rowIndex], rowIndex, 0);//(data);
      if(this.rowClickCallback !== null){
        this.rowClickCallback();
      }
      var b = window.document.querySelectorAll("img#flxproductSelection_imgProduct");
      for(var i=0;i<b.length;i++) {
        b[i].setAttribute('tabindex',-1);
        b[i].setAttribute('alt',"");
      }
      document.querySelectorAll("div#flxproductSelection_flxCheckBox").forEach(
        function(elem) {
          elem.setAttribute("tabindex","0");
          elem.onclick = function(el) {
            el.currentTarget.closest("div#flxproductSelection_flxproductSelection").click();
          }
        }
      );
      document.querySelectorAll("img#flxproductSelection_imgCheckBox").forEach(
        function(elem) {
          elem.setAttribute('tabindex','-1');
          elem.setAttribute('alt','');
        }
      );
    },
    getSelectedProducts : function(){  
      var data = this.view.segProductOptions.data;
      var selectedIndices=[];
      for(var i=0;i<data.length;i++){
        if(data[i].imgCheckBox.src === "checkbox_activewhite.png"){
          selectedIndices.push(i);
        }
      }
      return selectedIndices;
    },
    setSelectedProducts : function(selectedIndices){
      this.deSelectAll();
      var data = this.view.segProductOptions.data;
      for(var i=0;i<data.length;i++){
        for(var j=0;j<selectedIndices.length;j++){
          if(i===selectedIndices[j]){
            data[i].imgCheckBox.src = "checkbox_activewhite.png";
            data[i].flxMain = {};
            data[i].flxMain.skin =  skins.selectedTemplateFlex;
          }
        }
      }
      this.view.segProductOptions.setData(data);
    },
    setSegData : function(data,otherData){
      if(otherData){
        if(otherData.headerText){
          this.view.lblProductName.text = otherData.headerText;
        }
        if(otherData.headerTexti18n){
          this.view.lblProductName.i18n_text = otherData.headerTexti18n;
        }
      }
      for(var i=0;i<data.length;i++){
        //data[i].imgCheckBox = {"src" :data[i].imgCheckBox.src, "onclick" : this.toggleCheckbox};
        //data[i].btnKnowMore = {"text" :data[i].btnKnowMore.text, "onclick" : this.onKnowMoreClick};
        data[i].btnKnowMore.onClick = this.onKnowMoreClick;
        data[i].template = segTemplate;
      }
      this.view.segProductOptions.widgetDataMap = {
        "btnKnowMore": "btnKnowMore", 
        "flxCheckBox": "flxCheckBox", 
        "flxMain": "flxMain", 
        "flxProductDetails": "flxProductDetails", 
        "flxproductSelection": "flxproductSelection", 
        "imgCheckBox": "imgCheckBox", 
        "imgProduct": "imgProduct", 
        "lblProductDescription": "lblProductDescription", 
        "lblProductTitle": "lblProductTitle"
      }; 
      this.view.segProductOptions.setData(data);
      this.view.segProductOptions.height = "555px";//"preferred";
      //this.view.segProductOptions.height = "604px";//"preferred";

      this.showProductOptions();
      this.view.forceLayout();

    },
    getSegData : function(){
      var data = this.view.segProductOptions.data;
      return data;
    },
    deSelectAll : function(){
      var segData = this.view.segProductOptions.data;
      for(var i=0;i<segData.length;i++){
        segData[i].imgCheckBox.src = "checkbox_inactive.png";
        segData[i].flxMain.skin =  skins.normalTemplateFlex;
      }
      this.view.segProductOptions.setData(segData);
    },
  };
});