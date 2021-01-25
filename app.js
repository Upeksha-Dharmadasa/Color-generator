class Color 
{
  constructor(name, code, rgb) 
    {
      this.name = name;
      this.code = code;
      this.rgb = rgb;
    }
  }

  const ColorsArray = 
  [
    // Red colors
    new Color('Red', '#FF0000', '255,0,0'),
    new Color('Indian Red', '#CD5C5C', '205,92,92'),
    new Color('Crimson', '#DC143C', '220,20,60'),
    new Color('Firebrick', '#B22222', '178,34,34'),
    new Color('Lightcoral', '#F08080', '240,128,128'),
    new Color('Dark Red', '#8B0000', '139,0,0'),
    // Blue colors
    new Color('Blue', '#0000FF', '0,0,255'),
    new Color('Royal Blue', '#4169E1', '65,105,225'),
    new Color('Steel Blue', '#4682B4', '70,130,180'),
    new Color('Navy Blue', '#000080', '0,0,128'),
    new Color('Light Sky Blue', '#87CEFA', '135,206,250'),
    new Color('Deep Sky Blue', '#00BFFF', '0,191,255'),
    // Orange colors
    new Color('Orange','#FFA500', '255,165,0'),
    new Color('Coral', '#FF7F50', '255,127,80'),
    new Color('Tomato', '#FF6347', '255,99,71'),
    new Color('Dark Orange', '#FF8C00', '255,140,0'),
    new Color('Orange red', '#FF4500', '255,69,0'),
    new Color('Gold', '#FFD700', '255,215,0'),
    // Green colors
    new Color('Green', '#008000', '0,128,0'),
    new Color('Forest Green', '#228B22', '34,139,34'),
    new Color('Sea Green', '#2E8B57', '46,139,87'),
    new Color('Medium Sea Green', '#3CB371', '60,179,113'),
    new Color('Pale Green', '#98FB98', '152,251,152'),
    new Color('Dark Green', '#006400', '0,100,0'),
    // Cyan colours
    new Color('Cyan', '#00FFFF', '0,255,255'),
    new Color('Aquamarine', '#7FFFD4', '127,255,212'),
    new Color('Turquoise', '#40E0D0', '64,224,208'),
    new Color('Dark Turquoise', '#00CED1', '0,206,209'),
    new Color('Cadet Blue', '#5F9EA0', '95,158,160'),
    new Color('Teal', '#008080', '0,128,128'),
    // Yellow colors
    new Color('Yellow', '#FFFF00', '255,255,0'),
    new Color('Light Yellow', '#FFFFE0', '255,255,224'),
    new Color('Moccasin', '#FFE4B5', '255,228,181'),
    new Color('Peach Puff', '#FFDAB9', '255,218,185'),
    new Color('Papaya Whip', '#FFEFD5', '255,239,213'),
    new Color('Lemon Chiffon', '#FFFACD', '255,250,205'),
    // Pink colors
    new Color('Pink', '#FFC0CB', '255,192,203'),
    new Color('Light Pink', '#FFB6C1', '255,182,193'),
    new Color('Hot Pink', '#FF69B4', '255,105,180'),
    new Color('Deep Pink', '#FF1493', '255,20,147'),
    new Color('Pale Violet Red', '#DB7093', '219,112,147'),
    new Color('Medium Violet Red', '#C71585', '199,21,133'),
    // Purple colors
    new Color('Purple', '#800080', '128,0,128'),
    new Color('Orchid', '#DA70D6', '218,112,214'),
    new Color('Plum', '#DDA0DD', '221,160,221'),
    new Color('Thistle', '#D8BFD8', '216,191,216'),
    new Color('Lavender','#E6E6FA', '230,230,250'),
    new Color('Indigo', '#4b0082', '75,0,130'),
    // Grey color
    new Color('Grey', '#808080', '128,128,128'),
    new Color('Dim Grey', '#696969', '105,105,105'),
    new Color('Silver', '#C0C0C0','192,192,192'),
    new Color('Slate Gray', '#708090', '112,128,144'),
    new Color('Dark Slate Gray', '#2F4F4F', '47,79,79'),
    new Color('Black', '#000000', '0,0,0'),
    //Brown color
    new Color('Brown', '#A52A2A', '165,42,42'),
    new Color('Maroon', '#800000', '128,0,0'),
    new Color('Rosy Brown', '#BC8F8F', '188,143,143'),
    new Color('Sienna', '#A0522D', '160,82,45'),
    new Color('Bisque', '#FFE4C4', '255,228,196'),
    new Color('Corn Silk', '#FFF8DC', '255,248,220'),
    //White colors
    new Color('White', '#FFFFFF', '255,255,255'),
    new Color('Snow', '#FFFAFA', '255,250,250'),
    new Color('Mint Cream', '#F5FFFA', '245,255,250'),
    new Color('Azure', '#F0FFFF', '240,255,255'),
    new Color('Ivory', '#FFFFF0', '255,255,240'),
    new Color('Lavender Blush', '#FFF0F5', '255,240,245')
  ];

  //get a raqndom color from colors array 
  exports.getRandomColor = () => {
    return ColorsArray[Math.floor(Math.random() * ColorsArray.length)];
  }
  //get a random sub color from particular main color
  exports.getRedColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)];
  }
  exports.getBlueColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+6];
  }
  exports.getOrangeColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+12];
  }
  exports.getGreenColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+18];
  }
  exports.getCyanColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+24];
  }
  exports.getYellowColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+30];
  }
  exports.getPinkColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+36];
  }
  exports.getPurpleColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+42];
  }
  exports.getGreyColors = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+48];
  }
  exports.getBrownColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+54];
  }
  exports.getWhiteColor = () => {
    return ColorsArray[Math.floor(Math.random() * 6)+60];
  }
  //Get All version of specific color 
  var specifics = []
  exports.getAllRedcolors = () =>{
    specifics = [];
    for(i = 0; i < 6; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllBlueColors = () => {
    specifics = [];
    for(i = 6; i < 12; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllOrangeColors = () => {
    specifics = [];
    for(i = 12; i < 18; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllGreenColors = () => {
    specifics = [];
    for(i = 18; i < 24; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllCyanColors = () => {
    specifics = [];
    for(i = 24; i < 30; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllYellowColors = () => {
    specifics = [];
    for(i = 30; i < 36; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllPinkColors = () => {
    specifics = [];
    for(i = 36; i < 42; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllPurpleColors = () => {
    specifics = [];
    for(i = 42; i < 48; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllGreyColors = () => {
    specifics = [];
    for(i = 48; i < 54; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllBrownColors = () => {
    specifics = [];
    for(i = 54; i < 60; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.getAllWhiteColors = () => {
    specifics = [];
    for(i = 60; i < 66; i++){
      specifics.push(ColorsArray[i]);
    }
    return specifics;
  }
  exports.ColorsArray = ColorsArray;

  

