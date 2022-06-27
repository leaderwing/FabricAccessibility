define(function() {
    return {
        PENDING_STATUS: 1,
        IN_PROGRESS_STATUS: 2,
        COMPLETED_STATUS: 3,
        ERROR: 4,
        preshow: function() {
            this.view.flxHeader.onClick = function() {}
            var widgetDataMap = {
                "flxSegWrapper": "flxSegWrapper",
                "lblNumber": "lblNumber",
                "lblTitle": "lblTitle",
                "lblStatus": "lblStatus",
                "imgTick": "imgTick",
                "imgDottedUpper": "imgDottedUpper",
                "imgDottedLower": "imgDottedLower"
            };
        },
        setCurrentStateAsFailure: function(data, currentSubstate) {
            var newData = [];
            var currentStateData = {};
            for (var i = 0; i < data.length; i++) {
                if (data[i].completionStatus == true) {
                    currentStateData = this.getDataForStatus(data[i], this.COMPLETED_STATUS);
                } else if (data[i].completionStatus == false) {
                    if (data[i].subStateKey == currentSubstate) {
                        currentStateData = this.getDataForStatus(data[i], this.ERROR);
                    } else {
                        currentStateData = this.getDataForStatus(data[i], this.PENDING_STATUS);
                    }
                }
                currentStateData.imgDottedUpper = "dottedlinecut.png";
                currentStateData.imgDottedLower = "dottedlinecut.png";
                currentStateData.lblTitle.text = data[i].trackerName;
                currentStateData.lblNumber.text = "" + (i + 1);
                newData.push(currentStateData);
            }
            newData[0].imgDottedUpper = "";
            newData[newData.length - 1].imgDottedLower = "";
            this.view.segRoadmap.setData(newData);
        },
        setCurrentStateAsSuccess: function(data, currentSubstate) {
            var newData = [];
            var currentStateData = {};
            for (var i = 0; i < data.length; i++) {
                if (data[i].completionStatus == true) {
                    currentStateData = this.getDataForStatus(data[i], this.COMPLETED_STATUS);
                } else if (data[i].completionStatus == false) {
                    if (data[i].subStateKey == currentSubstate) {
                        currentStateData = this.getDataForStatus(data[i], this.COMPLETED_STATUS);
                    } else {
                        currentStateData = this.getDataForStatus(data[i], this.PENDING_STATUS);
                    }
                }
                currentStateData.imgDottedUpper = "dottedlinecut.png";
                currentStateData.imgDottedLower = "dottedlinecut.png";
                currentStateData.lblTitle.text = data[i].trackerName;
                currentStateData.lblNumber.text = "" + (i + 1);
                newData.push(currentStateData);
            }
            newData[0].imgDottedUpper = "";
            newData[newData.length - 1].imgDottedLower = "";
            this.view.segRoadmap.setData(newData);
        },
        setPreviousStateAsFailure: function(data, currentSubstate) {
            var newData = [];
            var currentStateData = {};
            var previousStateVisited = false;
            for (var i = 0; i < data.length; i++) {
                if (data[i].completionStatus == true) {
                    currentStateData = this.getDataForStatus(data[i], this.COMPLETED_STATUS);
                } else if (data[i].completionStatus == false) {
                    if (previousStateVisited == false) {
                        var previousSubState = this.getDataForStatus(newData[newData.length - 1], this.ERROR);
                        previousSubState.lblTitle.text = newData[newData.length - 1].trackerName;
                        previousSubState.lblNumber.text = "" + (newData.length);
                        newData[newData.length - 1] = previousSubState;
                        previousStateVisited = true;
                    }
                    if (data[i].subStateKey == currentSubstate) {
                        currentStateData = this.getDataForStatus(data[i], this.COMPLETED_STATUS);
                    } else {
                        currentStateData = this.getDataForStatus(data[i], this.PENDING_STATUS);
                    }
                }
                currentStateData.imgDottedUpper = "dottedlinecut.png";
                currentStateData.imgDottedLower = "dottedlinecut.png";
                currentStateData.lblTitle.text = data[i].trackerName;
                currentStateData.lblNumber.text = "" + (i + 1);
                newData.push(currentStateData);
            }
            newData[0].imgDottedUpper = "";
            newData[newData.length - 1].imgDottedLower = "";
            this.view.segRoadmap.setData(newData);
        },
        setRoadmapStatus: function(data, currentSubstate) {
            var newData = [];
            var currentStateData = {};
            for (var i = 0; i < data.length; i++) {
                if (data[i].completionStatus == true) {
                    if (data[i].subStateKey == currentSubstate) {
                        currentStateData = this.getDataForStatus(data[i], this.IN_PROGRESS_STATUS);
                    } else {
                        currentStateData = this.getDataForStatus(data[i], this.COMPLETED_STATUS);
                    }
                } else if (data[i].completionStatus == false) {
                    if (data[i].subStateKey == currentSubstate) {
                        currentStateData = this.getDataForStatus(data[i], this.IN_PROGRESS_STATUS);
                    } else {
                        currentStateData = this.getDataForStatus(data[i], this.PENDING_STATUS);
                    }
                }
                currentStateData.imgDottedUpper = "dottedlinecut.png";
                currentStateData.imgDottedLower = "dottedlinecut.png";
                currentStateData.lblTitle.text = data[i].trackerName;
                currentStateData.lblNumber.text = "" + (i + 1);
                newData.push(currentStateData);
            }
            newData[0].imgDottedUpper = "";
            newData[newData.length - 1].imgDottedLower = "";
            this.view.segRoadmap.setData(newData);
        },
        getDataForStatus: function(data, status) {
            var json = data;
            if (status == this.PENDING_STATUS) {
                json.imTick = "";
                json.lblStatus = "";
                json.flxSegWrapper = {
                    "skin": "slFbox"
                };
                json.lblTitle = {
                    "skin": "sknLblRoadmapTitlePending"
                };
                json.lblNumber = {
                    "skin": "sknLblRoadmapNumberInActive"
                };
            } else if (status == this.IN_PROGRESS_STATUS) {
                json.imgTick = "";
                json.lblStatus = "In Progress";
                json.flxSegWrapper = {
                    "skin": "sknFlxRoadmapBackground"
                };
                json.lblTitle = {
                    "skin": "lblTitleBold15"
                };
                json.lblNumber = {
                    "skin": "sknLblRoadmapNumberActive"
                };
            } else if (status == this.COMPLETED_STATUS) {
                json.imgTick = "success_icon.png";
                json.lblStatus = "";
                json.flxSegWrapper = {
                    "skin": "slFbox"
                };
                json.lblTitle = {
                    "skin": "lblTitleBold15"
                };
                json.lblNumber = {
                    isVisible: false
                };
            } else if (status == this.ERROR) {
                json.imgTick = "process_rejected_icon.png";
                json.lblStatus = "";
                json.flxSegWrapper = {
                    "skin": "slFbox"
                };
                json.lblNumber = {
                    isVisible: false
                }
                json.lblTitle = {
                    "skin": "lblTitleBold15"
                };
            }
            return json;
        },
        AdjustScreen: function() {},
        updateResponsiveView: function(AdjustScreenCallback) {
            var breakpoint = kony.application.getCurrentBreakpoint();
            if (breakpoint == 640 || breakpoint == 1024) {
                this.view.flxHeader.onClick = this.expandCollapse;
                this.view.lblImgChevron.isVisible = true;
                this.view.height = "57dp";
                this.view.lblImgChevron.text = "O";
            } else {
                this.view.flxHeader.onClick = null;
                this.view.lblImgChevron.isVisible = false;
                this.view.height = "540px";//"preferred";
            }
            AdjustScreenCallback();
            this.AdjustScreen = AdjustScreenCallback;
        },
        expandCollapse: function() {
            if (this.view.height === "57dp") {
                this.expand();
            } else {
                this.collapse();
            }
            this.AdjustScreen();
        },
        collapse: function() {
            var scope = this;
            this.view.height = "57dp";
            this.view.lblImgChevron.text = "O";
        },
        expand: function() {
            var scope = this;
            this.view.height = "540px";//"preferred";
            this.view.lblImgChevron.text = "P";
        }
    };
});