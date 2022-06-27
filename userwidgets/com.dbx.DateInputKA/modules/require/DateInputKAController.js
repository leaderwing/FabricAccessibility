define({
    // call this code in form postShow 
    // this.view.componentName.postShow(formName,componentName);
    cursorPos: 0,
    tbxId: null,
    format: "MM/DD/YYYY",
    isddmmyyyy: 0,
    isGerman: 0,
    pattern: "[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]",
    validDateExample: "99/99/9999",
    firstSeperatorPos: null,
    secondSeperatorPos: null,
    setText: function(text) {
        if (this.tbxId == null) {
            kony.log("textbox id is null");
            return;
        }
        document.getElementById(this.tbxId).value = text;
        document.getElementById(this.tbxId + 'Mask').innerHTML = "<i>" + text + "</i>";
    },
    getText: function() {
        return document.getElementById(this.tbxId).value;
    },
    setFormat: function(newFormat) {
        this.format = newFormat;
        var newPattern = "";
        var newValidDateExample = "";
        for (var i = 0, length1 = newFormat.length; i < length1; i++) {
            if (newFormat[i] != '/' && newFormat[i] != '-') {
                newPattern = newPattern + "[0-9]";
                newValidDateExample = newValidDateExample + "9";
            } else {
                newPattern = newPattern + newFormat[i];
                newValidDateExample = newValidDateExample + newFormat[i];
            }
        }
        this.pattern = newPattern;
        this.validDateExample = newValidDateExample;
    },
    postShow: function(formName, componentName) {
        scope = this;
        isFirstPosUpdated = false;
        if (formName == undefined || componentName == undefined) {
            return;
        }
        for (let i = 0; i < this.format.length; i++) {
            if (/\/|-/.test(this.format[i])) {
                if (isFirstPosUpdated) {
                    this.secondSeperatorPos = i + 1;
                } else {
                    this.firstSeperatorPos = i + 1;
                    isFirstPosUpdated = true;
                }
            }
        }
        this.tbxId = formName + "_" + componentName + "_tbxInputKA"
        document.getElementById(this.tbxId).setAttribute("placeholder", scope.format);
        document.getElementById(this.tbxId).setAttribute("class", "maskedDBX");
        document.getElementById(this.tbxId).setAttribute("pattern", scope.pattern);
        document.getElementById(this.tbxId).setAttribute("data-valid-example", scope.validDateExample);
        var InputMask = function(opts) {
            if (opts && opts.maskedDBX) {
                // Make it easy to wrap this plugin and pass elements instead of a selector
                opts.maskedDBX = typeof opts.maskedDBX === string ? document.querySelectorAll(opts.maskedDBX) : opts.maskedDBX;
            }

            if (opts) {
                this.opts = {
                    maskedDBX: opts.maskedDBX || document.querySelectorAll(this.d.maskedDBX),
                    mNum: opts.mNum || this.d.mNum,
                    mChar: opts.mChar || this.d.mChar,
                    error: opts.onError || this.d.onError
                }
            } else {
                this.opts = this.d;
                this.opts.maskedDBX = document.querySelectorAll(this.opts.maskedDBX);
            }

            this.refresh(true);
        };

        var inputMask = {

            // Default Values
            d: {
                maskedDBX: '.maskedDBX',
                mNum: 'XdDmMyY9_',
                mChar: 'c',
                onError: function() {}
            },

            refresh: function(init) {
                var t, parentClass;

                if (!init) {
                    this.opts.maskedDBX = document.querySelectorAll(this.opts.maskedDBX);
                }

                for (i = 0; i < this.opts.maskedDBX.length; i++) {
                    t = this.opts.maskedDBX[i]
                    parentClass = t.parentNode.getAttribute('class');

                    if (!parentClass || (parentClass && parentClass.indexOf('shellDBX') === -1)) {
                        this.createshellDBX(t);
                        this.activateMasking(t);
                    }
                }
            },

            // replaces each maskedDBX t with a shall containing the t and it's mask.
            createshellDBX: function(t) {
                var wrap = document.createElement('span'),
                    mask = document.createElement('span'),
                    emphasis = document.createElement('i'),
                    tClass = t.getAttribute('class'),
                    pTxt = t.getAttribute('placeholder'),
                    placeholder = document.createTextNode(pTxt);

                t.setAttribute('maxlength', placeholder.length);
                t.setAttribute('data-placeholder', pTxt);
                t.removeAttribute('placeholder');


                if (!tClass || (tClass && tClass.indexOf('maskedDBX') === -1)) {
                    t.setAttribute('class', tClass + ' maskedDBX');
                }

                mask.setAttribute('aria-hidden', 'true');
                mask.setAttribute('id', t.getAttribute('id') + 'Mask');
                mask.appendChild(emphasis);
                mask.appendChild(placeholder);

                wrap.setAttribute('class', 'shellDBX');
                wrap.appendChild(mask);
                t.parentNode.insertBefore(wrap, t);
                wrap.appendChild(t);
            },

            setValueOfMask: function(e) {
                var value = e.target.value,
                    placeholder = e.target.getAttribute('data-placeholder');

                return "<i>" + value + "</i>" + placeholder.substr(value.length);
            },

            // add event listeners
            activateMasking: function(t) {
                var that = this;
                if (t.addEventListener) { // remove "if" after death of IE 8
                    t.addEventListener('keyup', function(e) {
                        that.handleValueChange.call(that, e);
                    }, false);
                } else if (t.attachEvent) { // For IE 8
                    t.attachEvent('onkeyup', function(e) {
                        e.target = e.srcElement;
                        that.handleValueChange.call(that, e);
                    });
                }
            },

            handleValueChange: function(e) {
                var id = e.target.getAttribute('id');
                var change_in_middle = false;
                if (e.target.value == document.querySelector('#' + id + 'Mask i').innerHTML) {
                    return; // Continue only if value hasn't changed
                }
                if (e.target.value[e.target.value.length - 1] == document.querySelector('#' + id + 'Mask i').innerHTML[document.querySelector('#' + id + 'Mask i').innerHTML.length - 1]) {
                    change_in_middle = true;
                    scope.cursorPos = document.getElementById(id).selectionStart;
                    if (e.target.value.length > document.querySelector('#' + id + 'Mask i').innerHTML.length) {
                        if (scope.cursorPos == scope.firstSeperatorPos) {
                            scope.cursorPos = scope.firstSeperatorPos + 1;
                        } else if (scope.cursorPos == scope.secondSeperatorPos) {
                            scope.cursorPos = scope.secondSeperatorPos + 1;
                        }
                    }

                }

                if (scope.shouldMaskDigits) {
                    document.getElementById(id).value = this.handleCurrentValue(e).replace(/[0-9]/g, "*");
                } else {
                    document.getElementById(id).value = this.handleCurrentValue(e);
                }


                document.getElementById(id + 'Mask').innerHTML = this.setValueOfMask(e);
                if (change_in_middle) {
                    document.getElementById(id).selectionStart = scope.cursorPos;
                    document.getElementById(id).selectionEnd = scope.cursorPos;
                }
            },

            handleCurrentValue: function(e) {
                var isCharsetPresent = e.target.getAttribute('data-charset'),
                    placeholder = isCharsetPresent || e.target.getAttribute('data-placeholder'),
                    value = e.target.value,
                    l = placeholder.length,
                    newValue = '',
                    i, j, isInt, isLetter, strippedValue;

                // strip special characters
                strippedValue = isCharsetPresent ? value.replace(/\W/g, "") : value.replace(/\D/g, "");

                for (i = 0, j = 0; i < l; i++) {
                    isInt = !isNaN(parseInt(strippedValue[j]));
                    isLetter = strippedValue[j] ? strippedValue[j].match(/[A-Z]/i) : false;
                    matchesNumber = this.opts.mNum.indexOf(placeholder[i]) >= 0;
                    matchesLetter = this.opts.mChar.indexOf(placeholder[i]) >= 0;
                    if ((matchesNumber && isInt) || (isCharsetPresent && matchesLetter && isLetter)) {
                        newValue += strippedValue[j++];
                    } else if ((!isCharsetPresent && !isInt && matchesNumber) || (isCharsetPresent && ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))) {
                        //error handling function
                        return newValue;
                    } else {
                        newValue += placeholder[i];
                    }
                    // break if no characters left and the pattern is non-special character
                    if (strippedValue[j] == undefined) {
                        break;
                    }
                }
                if (e.target.getAttribute('data-valid-example')) {
                    return this.validateProgress(e, newValue);
                }
                return newValue;
            },

            validateProgress: function(e, value) {
                var validExample = e.target.getAttribute('data-valid-example'),
                    pattern = new RegExp(e.target.getAttribute('pattern')),
                    placeholder = e.target.getAttribute('data-placeholder'),
                    l = value.length,
                    testValue = '';

                //convert to months
                if (l == 1 && placeholder.toUpperCase().substr(0, 2) == 'MM') {
                    if (value > 1 && value < 10) {
                        value = '0' + value;
                    }
                    return value;
                }
                // test the value, removing the last character, until what you have is a submatch
                for (i = l; i >= 0; i--) {
                    testValue = value + validExample.substr(value.length);
                    if (pattern.test(testValue)) {
                        return value;
                    } else {
                        value = value.substr(0, value.length - 1);
                    }
                }

                return value;
            }
        };

        for (var property in inputMask) {
            if (inputMask.hasOwnProperty(property)) {
                InputMask.prototype[property] = inputMask[property];
            }
        }

        //  Declaritive initalization
        (function() {
            new InputMask();

        })();

    },

    //Backporting functions
    setDateFormat: function(format) {
        this.setFormat(format);

        if (format === "MM/DD/YYYY" || format === "DD/MM/YYYY" || format === "MM.DD.YYYY" || format === "DD.MM.YYYY" || format === "MM-DD-YYYY" || format === "DD-MM-YYYY") {
            this.isGerman = 0;
            if (format === "DD/MM/YYYY" || format === "DD.MM.YYYY" || format === "DD-MM-YYYY") this.isddmmyyyy = 1;
            else this.isddmmyyyy = 2;
        } else if (format === "YYYY/MM/DD" || format === "YYYY/DD/MM" || format === "YYYY.MM.DD" || format === "YYYY.DD.MM" || format === "YYYY-MM-DD" || format === "YYYY-DD-MM") {
            console.log("German date format");
            if (format === "YYYY/DD/MM" || format === "YYYY.DD.MM" || format === "YYYY-DD-MM") this.isddmmyyyy = 0;
            else
                this.isddmmyyyy = 3;
            this.isGerman = 1;
        }
    },
    setDate: function(text) {
        this.setText(text);
    },
    getDate: function() {
        date = document.getElementById(this.tbxId).value;

        var date, valid;
        if (date.length==10) {
            if (this.isGerman === 1){
                //TODO
            }

            if (this.isddmmyyyy === 1) {
                valid = this.isValidDate(date.substr(0, 2), date.substr(3, 2), date.substr(6, 4));
            } else if (this.isddmmyyyy === 0) {
                valid = this.isValidDate(date.substr(5, 2), date.substr(8, 2), date.substr(0, 4));
            } else if (this.isddmmyyyy === 2) {
                valid = this.isValidDate(date.substr(3, 2), date.substr(0, 2), date.substr(6, 4));
            } else
                valid = this.isValidDate(date.substr(8, 2), date.substr(5, 2), date.substr(0, 4));
            if (valid === false) return "";
            else return date;
        } else console.log("Invalid date");
        return "";
    },
    daysInMonth: function(m, y) {
        switch (m) {
            case 1:
                return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
            case 8:
            case 3:
            case 5:
            case 10:
                return 30;
            default:
                return 31
        }
    },
    isValidDate: function(d, m, y) {
        m = parseInt(m, 10) - 1;
        return m >= 0 && m < 12 && d > 0 && d <= this.daysInMonth(m, y);
    },
    onTextChange: function(callback) {
        this.view.tbxInputKA.onTextChange = callback;
    }
});