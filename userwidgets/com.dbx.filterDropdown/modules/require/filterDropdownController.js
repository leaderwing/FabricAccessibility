define(function () {
  // var data = [{val : "aaa"},{val : "aab"},{val : "abc"},{val:"bcd"}]
  var responsiveUtils = new ResponsiveUtils();
  var skins = {
    tbxSkin: "tbxTransparent15",
    separator: "flxSeparator",
    errorSep: "lblErrorState",
    placeholder: "lblPlaceholder15",
    title: "lblTitle15"
  };
  var errorComp = null;
  var regexFilter = "^"; //"^" - starts with, "" - contains
  var selRow = null;
  var previousInput = "";
  return {
    isAnimating: false,
    rowClickCallback: null,
    onKeyUpCallback: null,
    optionSelected: false,
    isTextEntered : false,
    segData: [{
      lblCountryNameKA: "India",
      lblLeftBracketKA: "(",
      lblCountryCodeKA: "+91",
      lblRightBracketKA: ")",
      //btnRowClick: "-"
    },
              {
                lblCountryNameKA: "Sri Lanka",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+94",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "United Kingdom",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+44",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "United Arab Emirates",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+971",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Singapore",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+65",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Indonesia",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+62",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "United States",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+1",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "United States Minor Outlying Islands",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+1",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Italy",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+39",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Iran",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+98",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Iraq",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+964",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Ireland",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+353",
                lblRightBracketKA: ")",
                //btnRowClick: "-"

              },
              {
                lblCountryNameKA: "Germany",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+49",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "France",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+33",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Spain",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+34",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Netherlands",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+31",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Greece",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+30",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Portugal",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+351",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Malta",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+356",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Poland",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+48",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Sweden",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+46",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Austria",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+43",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Finland",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+358",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Croatia",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+385",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Belgium",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+32",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Cyprus",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+357",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Denmark",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+45",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Romania",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+40",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Hungary",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+36",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Switzerland",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+41",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Brazil",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+55",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Ukraine",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+380",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },
              {
                lblCountryNameKA: "Afghanistan",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+93",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Albania",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+355",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Algeria",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+213",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "American Samoa",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+684",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Andorra",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+376",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Angola",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+244",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Anguilla",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+264",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Antigua and Barbuda",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+268",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Argentina",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+54",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Armenia",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+374",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Aruba",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+297",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Australia",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+61",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Azerbaijan",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+994",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Bahamas",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+242",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
//                 lblCountryNameKA: "Bahrain",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+973",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Bangladesh",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+880",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Barbados",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+246",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Belarus",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+375",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Belize",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+501",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Benin",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+229",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Bermuda",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+441",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Bhutan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+975",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Bolivia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+591",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Bonaire",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+888",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Bosnia and Herzegovina",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+387",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Botswana",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+267",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Brunei",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+673",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Bulgaria",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+359",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Burkina Faso",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+226",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Burundi",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+257",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Cambodia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+855",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Cameroon",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+237",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Canada",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Cape Verde",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+238",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Cayman Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+345",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Central African Republic",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+236",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Chad",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+235",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Chile",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+56",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "China",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+86",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Christmas Island",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+61",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Cocos (Keeling) Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+61",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Colombia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+57",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Comoros",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+269",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Democratic Republic of the Congo",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+243",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Cook Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+682",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Costa Rica",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+506",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },
//               {
//                 lblCountryNameKA: "Cote D'Ivoire (Ivory Coast)",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+225",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },
//               {
//                 lblCountryNameKA: "Cuba",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+53",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Czech Republic",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+420",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Republic of the Congo",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+242",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Djibouti",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+253",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Dominica",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+767",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Dominican Republic",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Ecuador",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+593",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Egypt",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+20",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "El Salvador",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+503",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Equatorial Guinea",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+240",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Eritrea",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+291",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Estonia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+372",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Ethiopia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+251",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Falkland Islands (Islas Malvinas)",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+500",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Faroe Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+298",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Federated States of Micronesia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+691",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Fiji",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+679",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "French Guiana",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+594",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "French Polynesia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+689",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Gabon",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+241",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Gambia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+220",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Georgia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+995",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Ghana",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+233",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Gibraltar",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+350",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Greenland",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+299",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Grenada",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+473",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Guadeloupe",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+590",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Guam",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Guatemala",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+502",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Guernsey",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1481",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Guinea",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+224",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Guinea-Bissau",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+245",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Guyana",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+592",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Haiti",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+509",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Honduras",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+504",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Hong Kong",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+852",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Iceland",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+354",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Isle of Man",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1624",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Israel",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+972",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Jamaica",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+876",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Japan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+81",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Jersey",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1534",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Jordan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+962",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Kazakhstan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+7",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Kenya",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+254",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Kiribati",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+686",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "North Korea",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+850",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "South Korea",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+82",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Kuwait",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+965",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Kyrgyzstan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+996",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Laos",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+856",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Latvia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+371",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Lebanon",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+961",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Lesotho",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+266",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Liberia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+231",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Libya",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+218",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Liechtenstein",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+423",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Lithuania",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+370",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Luxembourg",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+352",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Macao",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+853",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Macedonia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+389",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Madagascar",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+261",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Malawi",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+265",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Malaysia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+60",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Maldives",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+960",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Mali",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+223",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Marshall Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+692",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Martinique",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+596",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Mauritania",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+222",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Mauritius",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+230",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Mayotte",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+262",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Mexico",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+52",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Moldova",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+373",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Monaco",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+377",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Mongolia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+976",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Montenegro",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+382",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Montserrat",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+664",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Morocco",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+212",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Mozambique",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+258",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Myanmar",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+95",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Namibia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+264",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Nauru",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+674",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Nepal",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+977",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Curaçao",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+599",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "New Caledonia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+687",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "New Zealand",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+64",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Nicaragua",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+505",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Niger",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+227",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Nigeria",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+234",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Niue",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+683",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Norfolk Island",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+672",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Northern Mariana Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+670",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Norway",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+47",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Oman",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+968",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Pakistan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+92",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Palau",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+680",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Palestine",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+970",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Panama",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+507",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Papua New Guinea",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+675",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Paraguay",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+595",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Peru",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+51",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Philippines",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+63",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Pitcairn",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+64",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Puerto Rico",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Qatar",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+974",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Réunion",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+262",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Russia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+7",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Rwanda",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+250",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Saint Barthelemy",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+590",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "South Georgia and the South Sandwich Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+500",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Saint Helena, Ascension and Tristan da Cunha",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+290",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Saint Kitts and Nevis",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+869",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Saint Lucia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+758",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "St. Martin",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+590",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Saint Pierre and Miquelon",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+508",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Saint Vincent and the Grenadines",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+784",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Samoa",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+685",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "San Marino",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+378",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Sao Tome and Principe",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+239",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Saudi Arabia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+966",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Senegal",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+221",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Serbia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+381",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Seychelles",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+248",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Sierra Leone",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+232",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Sint Maarten (Dutch part)",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+1",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Slovakia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+421",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Slovenia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+386",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Solomon Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+677",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Somalia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+252",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "South Africa",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+27",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "South Sudan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+211",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Sudan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+249",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Suriname",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+249",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Svalbard and Jan Mayen",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+47",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Swaziland",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+268",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Syria",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+963",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Taiwan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+886",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Tajikistan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+992",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Tanzania",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+255",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Thailand",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+66",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Timor-Leste ",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+670",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Togo",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+228",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Tokelau",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+690",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Tonga",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+676",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Trinidad and Tobago",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+868",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Tunisia",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+216",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Turkey",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+90",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Turkmenistan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+993",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Turks and Caicos Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+649",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Tuvalu",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+688",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Uganda",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+256",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Uruguay",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+598",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Uzbekistan",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+998",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Vanuatu",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+678",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Venezuela",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+58",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "Vietnam",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+84",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "British Indian Ocean Territory",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+246",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
//                 lblCountryNameKA: "British Virgin Islands",
//                 lblLeftBracketKA: "(",
//                 lblCountryCodeKA: "+284",
//                 lblRightBracketKA: ")",
//                 //btnRowClick: "-"
//               },{
                lblCountryNameKA: "U.S. Virgin Islands",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+1",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Wallis and Futuna",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+681",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Western Sahara",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+212",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Yemen",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+967",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Zambia",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+260",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              },{
                lblCountryNameKA: "Zimbabwe",
                lblLeftBracketKA: "(",
                lblCountryCodeKA: "+263",
                lblRightBracketKA: ")",
                //btnRowClick: "-"
              }
             ],
    setFilterMode: function (mode) {
      //0 - starts with, 1 - contains
      if (mode === 0) {
        regexFilter = "^";
      } else if (mode === 1) {
        regexFilter = "";
      }
    },
    mapErrorComp: function (errorWidget) {
      errorComp = errorWidget;
    },
    setData: function (data) {
      this.setDataToDropdown(data);
    },
    compPreShow: function () {
      
//       this.view.flxDropdownKA.accessibilityConfig = {
//         "a11yLabel": "",
//         "a11yARIA": {
//           "tabindex": 0
//         }

//       };
      
      this.view.segDropdownKA.accessibilityConfig = {
        "a11yLabel": "",
        "a11yARIA": {
          "tabindex": 0
        }

      };


      var scope = this;
      this.setDataToDropdown(this.segData);
      //setting skins
      this.view.tbxDropdownKA.skin = skins.tbxSkin;
      this.view.lblPlaceholder.skin = skins.placeholder;
      this.view.flxSeperatorKA.skin = skins.separator;
      //assigning actions
      this.view.tbxDropdownKA.onKeyUp = function () {
        scope.filterData();
        // 				if (scope.view.tbxDropdownKA.text !== "") {
        // 					scope.isTextEntered = true;
        // 				}else{
        // 					scope.isTextEntered = false;
        // 				}
        if (scope.onKeyUpCallback !== null) {
          scope.onKeyUpCallback();
        }
      };
      this.view.tbxDropdownKA.onTouchStart = function () {
        this.animatePlaceholderToTop();
        
        // 				if (this.view.tbxDropdownKA.text === "") {
        // 					return;
        // 				}
        var data = this.view.segDropdownKA.data;
        if (data.length > 0) {
          this.view.flxDropdownKA.height = Math.min(data.length * 40, 120)+"dp";
          if (errorComp !== null) {
            errorComp.hideError();
          }
          this.view.flxDropdownKA.setVisibility(true);
          this.view.flxSeperatorKA.skin = skins.separator;
          this.view.flxInvalid.setVisibility(false);
          this.view.segDropdownKA.setVisibility(true);
        } else {
          this.view.flxDropdownKA.height = "120dp";
          this.onError("enter correct country name");
          this.view.flxInvalid.setVisibility(true);
          this.view.segDropdownKA.setVisibility(false);
        }
      }.bind(this);
      this.view.segDropdownKA.onRowClick = this.rowClicked;
      this.view.tbxDropdownKA.onBeginEditing = function () {
        //alert("onBeginEditing");
        this.animatePlaceholderToTop();
        if (this.view.tbxDropdownKA.text === "") {
          return;
        }
        var data = this.view.segDropdownKA.data;
        if (data.length > 0) {
          this.view.flxDropdownKA.height = Math.min(data.length * 40, 120)+"dp";
          if (errorComp !== null) {
            errorComp.hideError();
          }
          this.view.flxDropdownKA.setVisibility(true);
          this.view.flxSeperatorKA.skin = skins.separator;
          this.view.flxInvalid.setVisibility(false);
          this.view.segDropdownKA.setVisibility(true);
        } else {
          this.view.flxDropdownKA.height = "120dp";
          this.onError("enter correct country name");
          this.view.flxInvalid.setVisibility(true);
          this.view.segDropdownKA.setVisibility(false);
        }
      }.bind(this);
      this.view.tbxDropdownKA.onEndEditing = function () {
        kony.timer.schedule("mytimer", scope.selectOnlyOption, 0.3, false);
      };
      this.view.segDropdownKA.onTouchEnd = function () {
      
        kony.timer.schedule("mytimer1", scope.selectOnlyOption1, 0.3, false);
      };
      this.view.tbxDropdownKA.onDone = this.onDone;
    },
    onDone: function () {
      //alert("test seg select");
      if (this.view.segDropdownKA.data.length !== 0 && this.view.tbxDropdownKA.text !== "") {
        this.view.segDropdownKA.selectedIndex = [0, 0];
        this.rowClicked();
        this.optionSelected = true;
      }
    },
    selectOnlyOption: function () {
      if (this.view.segDropdownKA.data.length === 1) {
        this.view.segDropdownKA.selectedIndex = [0, 0];
        this.rowClicked();
        this.optionSelected = true;
      } else {
        this.animatePlaceholderToBottom();
        //this.view.flxDropdownKA.setVisibility(false);
      }
      kony.timer.cancel("mytimer");
    },
    
        selectOnlyOption1: function () {
//       if (this.view.segDropdownKA.data.length === 1) {
//         this.view.segDropdownKA.selectedIndex = [0, 0];
//         this.rowClicked();
//         this.optionSelected = true;
//       } else {
        this.animatePlaceholderToBottom();
        //  alert("onTouchEnd");
        //this.view.flxDropdownKA.setVisibility(false);
     // }
      kony.timer.cancel("mytimer1");
    },
    
    animatePlaceholderToTop: function () {
      var scope = this;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.view.lblPlaceholder.animate(
          kony.ui.createAnimation({
            "100": {
              "top": "20dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASE
              }
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.15
          }, {
            "animationEnd": function () {
              scope.view.lblPlaceholder.skin = skins.title;
              scope.isAnimating = false;
            }
          }
        );
      }
    },
    animatePlaceholderToBottom: function () {
      var scope = this;
      //scope.view.flxDropdownKA.setVisibility(false);
      if (this.view.tbxDropdownKA.text === "" && !this.isAnimating) {
        this.isAnimating = true;
        this.view.lblPlaceholder.animate(
          kony.ui.createAnimation({
            "100": {
              "top": "40dp",
              "stepConfig": {
                "timingFunction": kony.anim.EASE
              }
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.15
          }, {
            "animationEnd": function () {
              scope.view.lblPlaceholder.skin = skins.placeholder;
              scope.isAnimating = false;
              //scope.view.flxDropdownKA.setVisibility(false);
              scope.view.forceLayout();
            }
          }
        );
      }
    },
    setDataToDropdown: function (data) {
      if (data !== null && data != undefined) {
        this.segData = data;
      }
      this.view.segDropdownKA.widgetDataMap = {
        flxDropdownKA: "flxDropdownKA",
        lblCountryCodeKA: "lblCountryCodeKA",
        lblCountryNameKA: "lblCountryNameKA",
        lblLeftBracketKA: "lblLeftBracketKA",
        lblRightBracketKA: "lblRightBracketKA",
        btnRowClick: "btnRowClick"
      };
      this.view.segDropdownKA.setData(this.segData);
    },
    filterData: function () {
      this.optionSelected = false;
      this.animatePlaceholderToTop();
      var input = this.view.tbxDropdownKA.text.replace("+", "").toLowerCase();
      if (input.length === 0) {
        this.view.flxDropdownKA.setVisibility(false);
        return;
      }
      this.view.flxDropdownKA.setVisibility(true);
      if (previousInput === input) {
        if (!this.view.flxDropdownKA.isVisible) {
          this.view.flxDropdownKA.setVisibility(true);	
        }
        return;
      }
      previousInput = input;
      var reg = new RegExp(regexFilter + input);
      var data = this.segData.filter(function (country) {
        if (reg.test(country.lblCountryNameKA.toLowerCase()) || reg.test(country.lblCountryCodeKA.replace("+", ""))) {
          return true;
        } else {
          return false;
        }
      });
      this.view.segDropdownKA.setData(data);
      this.view.flxDropdownKA.setVisibility(true);
      if (data.length > 0) {
        this.view.flxDropdownKA.height = Math.min(data.length * 40, 120)+"dp";
        if (errorComp !== null) {
          errorComp.hideError();
        }
        this.view.flxSeperatorKA.skin = skins.separator;
        this.view.flxInvalid.setVisibility(false);
        this.view.segDropdownKA.setVisibility(true);
      } else {
        this.view.flxDropdownKA.height = "120dp";
        this.onError("enter correct country name");
        this.view.flxInvalid.setVisibility(true);
        this.view.segDropdownKA.setVisibility(false);
      }
      this.view.forceLayout();
    },
    onError: function (msg) {
      selRow = null;
      this.view.flxSeperatorKA.skin = skins.errorSep;
      if (errorComp !== null) {
        errorComp.showError(msg);
      }
    },
    rowClicked: function () {
      //alert("test seg select");
      this.animatePlaceholderToTop();
      selRow = this.view.segDropdownKA.selectedRowItems;
      this.view.tbxDropdownKA.text = selRow[0].lblCountryCodeKA;
      this.view.flxDropdownKA.setVisibility(false);
      this.optionSelected = true;
      if (this.rowClickCallback !== null) {
        this.rowClickCallback();
      }
    },
    getSelectedOption: function () {
      return selRow;
    },
    selectOption: function (opt) {
      this.setDataToDropdown();
      this.animatePlaceholderToTop();
      var rowNo = -1;
      for (let i = 0; i < this.segData.length; i++) {
        if (this.segData[i].lblCountryNameKA === opt || this.segData[i].lblCountryCodeKA === opt) {
          rowNo = i;
          break;
        }
      }
      if (rowNo !== -1) {
        this.view.segDropdownKA.selectedIndex = [0, rowNo];
        this.rowClicked();
      }
    },
    onBreakpointChange: function (event, width) {
      if (width === 640 || responsiveUtils.isMobile) {
        skins.tbxSkin = "tbxTransparent13";
        skins.placeholder = "lblPlaceholder13";
        skins.title = "lblTitle13";
        if (this.view.lblPlaceholder.skin === "lblPlaceholder13" || this.view.lblPlaceholder.skin === "lblPlaceholder15") {
          this.view.lblPlaceholder.skin = skins.placeholder;
        } else {
          this.view.lblPlaceholder.skin = skins.title;
        }
      } else {
        skins.tbxSkin = "tbxTransparent15";
        skins.placeholder = "lblPlaceholder15";
        skins.title = "lblTitle15";
        if (this.view.lblPlaceholder.skin === "lblPlaceholder13" || this.view.lblPlaceholder.skin === "lblPlaceholder15") {
          this.view.lblPlaceholder.skin = skins.placeholder;
        } else {
          this.view.lblPlaceholder.skin = skins.title;
        }
      }
      this.view.tbxDropdownKA.skin = skins.tbxSkin;
    },
    
    testFuction: function(){
    //alert("preshow comp");
      //this.compPreShow();
  }
    
  };
  
  
  
});