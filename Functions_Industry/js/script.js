//Rajmatie Arjune, February 26, Functions_Industry.

//Preparing spreadsheet for income/expenditure statement.

//Cells for spreadsheet would be determined based upon input.
function mySpreadsheet(cells,width,height) {

//Dimension for spreadsheet preparation.
    var cells = 0;
    var width = 10;
    var height = 8;
 
//Enter your width and height to make your spreadsheet.     
    var width = prompt("What is the width of your spreadsheet?");
    var height = prompt("What is the height of your spreadsheet?");
    
//dimension for width and height entry.    
    var dimension = width * height;
    console.log("You will have a spreadsheet with " + dimension + " cells.");
    
//If width is less than or equal to 11 and height greater than or equal to 10, choose smaller size.     
    if (width <= 11 && height >= 10) {
        alert("You could try to use a smaller size spreadsheet to do your statement.");
        console.log("You could try to use a smaller size spreadsheet to do your statement.");
        
//Else if height is exactly 12 or width is excactly 7, switch to portrait size spreadsheet.           
    }else if (height === 12 || width === 7) {
        alert("You will need to switch to portrait size to fit your statement.");
        console.log("You will need to switch to portrait size to fit your statement.");
        
//Else you could use the template available in the office.                        
    }else{
        alert("You could use the spreadsheet template " + dimension + " cells.");
        console.log("You could use the office spreadsheet template " + dimension + " cells.");
    
    }

    return dimension;

    }

mySpreadsheet();

