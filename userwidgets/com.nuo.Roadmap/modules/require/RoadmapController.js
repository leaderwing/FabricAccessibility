define(function () {
  var responsiveUtils = new ResponsiveUtils();
  var skins = {
    circleIncomplete: "flxInactiveCircleRoadmap",
    circleInProgress: "flxInProgressCircleRoadmap",
    rowNumberIncomplete: "lblTitle15",
    rowNumberInProgress: "lblWhite15",
    currentRow: "flxInProgressRowRoadmap",
    rowDone: "lblPlaceholder15",//"lblLink15",
    rowIncomplete: "lblPlaceholder15",
    rowInProgress: "lblTitle15",
    shadowBox: "flxShadowGrey",
    shodowMobile: "flxShadowBlue",
    headerSmallLabel: "lblBody13",
    headerMediumLabel: "lblBody15",
    headerLargeLabel: "lblTitle17"
  }
  var i18ns = {
    inProgress: "Application: In Progress",
    notApplicable: "Application Status - Step 1/5"
  }
  var images = {
    dropdownup: "dropdowniconup.png",
    dropdowndown: "dropdowndown.png",
    notApplicable: "notApplicable.png"
  }
  return {
    preshow: function () {
      this.view.segSections.widgetDataMap = {
        "imgRowDone": "imgRowDone",
        "lblRowNumber": "lblRowNumber",
        "flxCurrentRowIndicator": "flxCurrentRowIndicator",
        "flxRowCircle": "flxRowCircle",
        "lblRowName": "lblRowName",
        "lblInProgress": "lblInProgress",
        "imgDottedLine": "imgDottedLine",
        "flxRowContent": "flxRowContent"
      };
      this.view.flxDropdown.onClick = this._dropdownControl;
      //this.view.imgDropdown.onClick = this._dropdownControl;
      //this.view.imgDropdown.onTouchEnd = this._dropdownControl;
      this.view.flxHeaderLabels.left = "20dp";
      this.view.lblApplicationStatus.textCopyable=true;
      this.view.accessibilityConfig = {
        "a11yARIA": {
          "role": "complementary",
          "tabindex": -1  
        }
      };
      this.view.imgDropdown.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": -1  
        }
      };
    },
	postShowRoadMap: function() {
      //var scope = this;
      document.querySelectorAll("img[kmasterid='Roadmap'][id*='Roadmap_imgDropdown']").forEach(
        function(el){
          //el.onclick = scope._dropdownControl();
          //el.addEventListener('click', scope._dropdownControl);
          el.setAttribute("alt","");
          el.setAttribute("tabindex","-1");
        }
      );
      document.querySelectorAll("div[kmasterid='Roadmap'][id*='Roadmap_flxDropdown']").forEach(
        function(el){
          //el.onclick = scope._dropdownControl();
          //el.addEventListener('click', scope._dropdownControl);
          el.setAttribute("aria-label","Click to toggle progress bar list");
          el.setAttribute("role","button");
          el.setAttribute("tabindex","0");
        }
      );
    },
    _dropdownControl: function () {
      let width = kony.application.getCurrentBreakpoint()
      if (this.view.flxSegment.isVisible) {
        this.view.imgDropdown.src = images.dropdowndown
        this.view.flxSegment.setVisibility(false)
        if (width <= 1024) {
          this.view.lblApplicationStartDate.isVisible = true
          this.view.flxHeader.bottom = "50dp"
        //  alert("flxHeader");
        }
      } else {
        this.view.imgDropdown.src = images.dropdownup
        this.view.flxSegment.setVisibility(true)
        if (width <= 1024) {
          this.view.lblApplicationStartDate.isVisible = true
          this.view.flxHeader.bottom = "50dp"
      //    alert("flxHeader1");
        }
      }
      this.view.forceLayout()
    },

    /**
     * Sets data in the component
     * @param {array} data - [{
     *	 "rowLabel": <str>,
     *   "rowStatus": <"done","inProgress","incomplete","notApplicable">, // default: "incomplete"
     *   "currentRow": bool, // defalut: false
     *		"onClick": <function> // default: undefined
     * }]
     *
     * @param {json} headerData - {
     * "lableStep": <str>,
     * "labelStatus": <str>,
     * "lableStartDate": <str>
     * }
     */
    setData: function (data, headerData) {
      let rows = []
      let currentRow = -1
      for (let i = 0; i < data.length; i++) {
        rows.push(this._getRowData(data[i], i + 1))
        if (data[i]["currentRow"])
          currentRow = i
      }
      rows[0]["imgDottedLine"] = {
        isVisible: false
      }
      if (currentRow >= 0) {
        rows[currentRow]["flxCurrentRowIndicator"] = {
          skin: skins.currentRow
        }
        rows[currentRow]["flxRowContent"] = {
          top: "0dp"
        }
        rows[currentRow]["height"] = "55dp"
      }
      this.view.lblApplicationStep.text = headerData["lableStep"]
      this.view.lblApplicationStatus.text = headerData["labelStatus"]
      this.view.lblApplicationStartDate.text = headerData["lableStartDate"]
      this.view.segSections.setData(rows)
    },

    /**
     *	Get row data json for give type of row
     * @param {json} rowData - the data to be filled in row
     * @param {int} rowNumber - the position of the row
     */
    _getRowData: function (rowData, rowNumber) {
      switch (rowData.rowStatus) {
        case "done":
          return this._getDoneRow(rowData)
        case "inProgress":
          return this._getInProgressRow(rowData, rowNumber)
        case "notApplicable":
          return this._getNotApplicableRow(rowData, rowNumber)
        default:
          return this._getIncompleteRow(rowData, rowNumber)
      }
    },

    /**
     * @param {json} data: data for done row
     */
    _getDoneRow: function (data) {
      let rowData = {}
      rowData["lblRowName"] = {
        text: data["rowLabel"],
        skin: skins.rowDone
      }
      rowData["imgRowDone"] = {
        src: "numeringdone.png",
        isVisible: true
      }
      rowData["lblRowNumber"] = ""
      rowData["flxRowCircle"] = {
        skin: "slFbox"
      }
      // rowData["lblRowName"] = data["rowLabel"]
      rowData["lblInProgress"] = ""
      rowData["flxCurrentRowIndicator"] = {
        skin: "slFbox",
      }
      rowData["imgDottedLine"] = {
        isVisible: true
      }
      rowData["flxRowContent"] = {
        top: "5dp"
      }
      rowData["onClick"] = data["onClick"]
      return rowData
    },

    /**
     * @param {json} data: data for in progress row
     */
    _getInProgressRow: function (data, rowNumber) {
      let rowData = {}
      rowData["lblRowName"] = {
        text: data["rowLabel"],
        skin: skins.rowInProgress
      }
      rowData["imgRowDone"] = {
        isVisible: false
      }
      rowData["lblRowNumber"] = rowNumber + "";
      rowData["flxRowCircle"] = {
        skin: skins.circleInProgress
      }
      // rowData["lblRowName"] = data["rowLabel"]
      rowData["lblInProgress"] = "In Progress"
      rowData["flxCurrentRowIndicator"] = {
        skin: "slFbox"
      }
      rowData["imgDottedLine"] = {
        isVisible: true
      }
      rowData["flxRowContent"] = {
        top: "5dp"
      }
      rowData["onClick"] = data["onClick"]
      return rowData
    },

    /**
     * @param {json} data: data for not applicable row
     */
    _getNotApplicableRow: function (data, rowNumber) {
      let rowData = {}
      rowData["lblRowName"] = {
        text: data["rowLabel"],
        skin: skins.rowInProgress
      }
      rowData["imgRowDone"] = {
        src: images.notApplicable,
        isVisible: true
      }
      rowData["lblRowNumber"] = ""
      rowData["flxRowCircle"] = {
        skin: "slFbox"
      }
      // rowData["lblRowName"] = data["rowLabel"]
      rowData["lblInProgress"] = kony.i18n.getLocalizedString(i18ns.notApplicable)
      rowData["flxCurrentRowIndicator"] = {
        skin: "slFbox"
      }
      rowData["imgDottedLine"] = {
        isVisible: true
      }
      rowData["flxRowContent"] = {
        top: "5dp"
      }
      rowData["onClick"] = data["onClick"]
      return rowData
    },

    /**
     * @param {json} data: data for incomplete row
     */
    _getIncompleteRow: function (data, rowNumber) {
      let rowData = {}
      rowData["lblRowName"] = {
        text: data["rowLabel"],
        skin: skins.rowIncomplete
      }

      rowData["imgRowDone"] = {
        isVisible: false
      }
      rowData["lblRowNumber"] = {
        text: rowNumber+"",
        skin: skins.rowNumberIncomplete
      }
      rowData["flxRowCircle"] = {
        skin: skins.circleIncomplete
      }
      // rowData["lblRowName"] = data["rowLabel"]
      rowData["lblInProgress"] = ""
      rowData["flxCurrentRowIndicator"] = {
        skin: "slFbox",
      }
      rowData["imgDottedLine"] = {
        isVisible: true
      }
      rowData["flxRowContent"] = {
        top: "5dp"
      }
      rowData["onClick"] = data["onClick"]
      return rowData
    },


    /**
     * @param {int} width: breakpoint change handler
     */
    onBreakpointChange: function (event, width) {
//       if (width === 640 || responsiveUtils.isMobile) {
//         this.view.skin = skins.shodowMobile
//         this.view.flxDropdown.isVisible = true
//         //this.view.lblApplicationStartDate.isVisible = false
//         this.view.lblApplicationStep.isVisible = true
//         this.view.lblApplicationStatus.skin = skins.headerSmallLabel
//         this.view.lblApplicationStartDate.skin = skins.headerSmallLabel
//         this.view.lblApplicationStatus.top = "0dp"
//         this.view.lblApplicationStartDate.top = "0dp"
//         this.view.flxSegment.isVisible = false
//         this.view.imgDropdown.src = images.dropdowndown
//         this.view.flxHeader.bottom = "10dp"
//       } else if (width === 1024 || responsiveUtils.isTablet) {
//         this.view.skin = skins.shadowBox
//         this.view.lblApplicationStep.isVisible = true
//         //this.view.lblApplicationStartDate.isVisible = false
//         this.view.flxDropdown.isVisible = true
//         this.view.lblApplicationStatus.skin = skins.headerSmallLabel
//         this.view.lblApplicationStartDate.skin = skins.headerSmallLabel
//         this.view.lblApplicationStatus.top = "0dp"
//         this.view.lblApplicationStartDate.top = "0dp"
//         this.view.flxSegment.isVisible = false
//         this.view.imgDropdown.src = images.dropdowndown
//         this.view.flxHeader.bottom = "10dp"
//       } else {
//         this.view.skin = skins.shadowBox
//         this.view.lblApplicationStatus.isVisible = true
//         this.view.lblApplicationStep.isVisible = true
//         //this.view.lblApplicationStartDate.isVisible = true
//         this.view.lblApplicationStatus.skin = skins.headerMediumLabel
//         this.view.lblApplicationStartDate.skin = skins.headerMediumLabel
//         this.view.lblApplicationStartDate.bottom = "0dp"
//         this.view.flxDropdown.isVisible = true
//         this.view.flxSegment.isVisible = true
//         this.view.flxHeader.bottom = "10dp"
//       }

//       this.view.forceLayout()
    }
  };
});