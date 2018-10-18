// utilities 


// function to turn numbers into readable numbers 
// adds abbreviations 
function abbreviateNumber(value) {
    var thousand = 1000;
    var million = 1000000;
    var billion = 1000000000;
    var trillion = 1000000000000;
    if (value < thousand) {
        return String(value);   
    }
    
    if (value >= thousand && value <= 1000000) {
         return  Math.round(value/thousand) + 'k';   
    }
    
    if (value >= million && value <= billion) {
        return Math.round(value/million) + 'M';   
    }
    
    if (value >= billion && value <= trillion) {
        return Math.round(value/billion) + 'B';   
    }
    
    else {
        return Math.round(value/trillion) + 'T';   
    }
}

export {abbreviateNumber};


// convert epoch timestamp to date format
function convertTime(timestamp) {
    let current = Date.now(); // returns date now in ms
    let difference = current - timestamp; 
    if (Math.floor(difference / (1000 * 60 * 60 * 24 * 365)) > 0) {
      return Math.floor(difference / (1000 * 60 * 60 * 24 * 365)) + " years ago";
    } else if (Math.floor(difference / (1000 * 60 * 60 * 24 * 30)) > 0) {
      return Math.floor(difference / (1000 * 60 * 60 * 24 * 30)) + " months ago";
    } else if (Math.floor(difference / (1000 * 60 * 60 * 24)) > 0) {
      return Math.floor(difference / (1000 * 60 * 60 * 24)) + " days ago";
    } else if (Math.floor(difference / (1000 * 60 * 60)) > 0) {
      return Math.floor(difference / (1000 * 60 * 60)) + " hours ago";
    } else if(Math.floor(difference / (1000 * 60)) > 0) {
      return Math.floor(difference / (1000 * 60)) + " minutes ago";
    } else if (Math.floor(difference / 1000) > 0) {
      return Math.floor(difference / 1000) + " seconds ago";
    } else {
      return "0 seconds ago";
    }
};

export {convertTime};


// to add commas to numbers
function addCommas(num) {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
}
export {addCommas};