function createTable(){
    document.getElementById("background").innerHTML = "";

    var screenWidth = $("html").width();
    var screenHeight = $("html").height();
    
    var numHsquares = screenWidth/100;
    var numVsquares = screenHeight/100;

    var numHsquaresT = numHsquares;
    var numVsquaresT = numVsquares;
    var tempTable = '<tr>';

    while(numHsquaresT > 0) {
      numHsquaresT--;
      tempTable = tempTable + '<td></td>';
    }

    tempTable = tempTable + '</tr>';

    while(numVsquaresT > 0) {
      $("#background").append(tempTable);
      numVsquaresT--;
    }
}

function getCellPosition(x, y){
    if(document.getElementById('background').rows.length - 1 < x || document.getElementById('background').rows[0].cells.length - 1 < y)
        return [];
    return [document.getElementById('background').rows[x].cells[y].offsetTop,document.getElementById('background').rows[x].cells[y].offsetLeft];
}

function getCell(posX, posY){
    return [Math.floor(posX/104), Math.floor(posY/104)];

}

function getCellWidth(){
    return document.getElementById('background').rows[0].cells[0].offsetWidth - 10;
}

function getCellHeight(){
    return document.getElementById('background').rows[0].cells[0].offsetHeight - 10;
}


function repeatedTile(array, comp){
    var i;
    for (i=0;i<array.length;i++){
        if(array[i][0] == comp[0])
            if(array[i][1] == comp[1]){ 
                return true;
        } 
    }

    return false;
}

function randomizeTiles(){
    var pageWidth = $(window).width();
    var pageHeight = $(window).height();

    var numHsquares = pageWidth/103;
    var numVsquares = pageHeight/100 - 1;

    if((numVsquares - Math.floor(numVsquares)) > 0)
    	numVsquares--;

    if((numHsquares - Math.floor(numHsquares)) > 0)
    	numHsquares--;

    var rands = [];
    var comp = [0,0];

    var i;

    comp[0] = Math.floor((Math.random() * numVsquares));
    comp[1] = Math.floor((Math.random() * numHsquares));

    rands.push([comp[0], comp[1]]);

    for(i=0; i<9; i++){

        while(repeatedTile(rands, comp)){
            comp[0] = Math.floor((Math.random() * numVsquares));
            comp[1] = Math.floor((Math.random() * numHsquares));
        }

        rands.push([comp[0], comp[1]]);

    }

    for(i=0; i<9; i++){
        rands[i] = getCellPosition(rands[i][0], rands[i][1]);
    }


    $(".tiles").css("width", getCellWidth());
    $(".tiles").css("height", getCellHeight());

    $("#about").css("top", rands[0][0]);
    $("#about").css("left", rands[0][1]);

    $("#experience").css("top", rands[1][0]);
    $("#experience").css("left", rands[1][1]);

    $("#interests").css("top", rands[2][0]);
    $("#interests").css("left", rands[2][1]);

    $("#contact").css("top", rands[3][0]);
    $("#contact").css("left", rands[3][1]);

    $("#skills").css("top", rands[4][0]);
    $("#skills").css("left", rands[4][1]);

    $("#cv").css("top", rands[5][0]);
    $("#cv").css("left", rands[5][1]);

    $("#links").css("top", rands[6][0]);
    $("#links").css("left", rands[6][1]);

     $("#visits").css("top", rands[8][0]);
     $("#visits").css("left", rands[8][1]);

    $("#projects").css("top", rands[7][0]);
    $("#projects").css("left", rands[7][1]);


    return rands;
}

function x_hover(){
    $(".tiles").mouseenter(function(){
        $(".big-x").show();
        $(".number").hide();
        $(".text").hide();
        $(".tile-icon").hide();
    });

    $(".tiles").mouseleave(function(){
        $(".big-x").hide();
        $(".number").show();
        $(".text").show();
        $(".tile-icon").show();
    });
}

/********************ABOUT METHODS********************/
function aboutToggles(){
    $(".tiles").toggle();
    $("#about").toggle();
    $("#about-expanded").toggle();
}

function aboutClick(aboutPos){
    if ($("#about-expanded").is(":visible")) {
        var tPos = getCellPosition(1, 1);
        $("#about").css({top:tPos[0], left:tPos[1]});
        $("#about").addClass("tile-expanded");
        $("#about-expanded").css({top:tPos[0], left:tPos[1]});
        $(".about-icon").addClass("fa-times");
        $(".about-icon").removeClass("fa-question");
    }

    else {
        $("#about").css({top:aboutPos[0], left:aboutPos[1]});
        $("#about").removeClass("tile-expanded");
        $(".about-icon").addClass("fa-question");
        $(".about-icon").removeClass("fa-times");

    }
}

function aboutResize(aboutPos){
    if ($("#about-expanded").is(":visible")){
        var tPos = getCellPosition(1, 1);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        $("#about").css({top:tPos[0], left:tPos[1]});
        $("#about").css({width:tWidth, height:tHeight});
        $("#about-expanded").css({top:tPos[0], left:tPos[1]});
        $("#about").addClass("tile-expanded");
    }

    else {
        $("#about").css({top:aboutPos[0], left:aboutPos[1]});
        $("#about").removeClass("tile-expanded");
    }
}
/*****************************************************/
/*******************CONTACT METHODS*******************/
function contactToggles(){
    $(".tiles").toggle();
    $("#contact").toggle();
    $("#contact-expanded").toggle();
}
function contactClick(contactPos){
    if ($("#contact-expanded").is(":visible")) {
        var tPos = getCellPosition(1, 1);
        $("#contact").css({top:tPos[0], left:tPos[1]});
        $("#contact").addClass("tile-expanded");
        $("#contact-expanded").css({top:tPos[0], left:tPos[1]});
        $(".contact-icon").addClass("fa-times");
        $(".contact-icon").removeClass("fa-envelope-o");
        
    }

    else {
        $("#contact").css({top:contactPos[0], left:contactPos[1]});
        $("#contact").removeClass("tile-expanded");
        $(".contact-icon").addClass("fa-envelope-o");
        $(".contact-icon").removeClass("fa-times");

    }
}

function contactResize(contactPos){
    if ($("#contact-expanded").is(":visible")){
        var tPos = getCellPosition(1, 1);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        $("#contact").css({top:tPos[0], left:tPos[1]});
        $("#contact").css({width:tWidth, height:tHeight});
        $("#contact-expanded").css({top:tPos[0], left:tPos[1]});
        $("#contact").addClass("tile-expanded");
    }

    else {
        $("#contact").css({top:contactPos[0], left:contactPos[1]});
        $("#contact").removeClass("tile-expanded");

    }
}
/*****************************************************/
/***************CHECK AVAILABLE METHOD****************/
function isAvailable(cell){
    var pageWidth = $(window).width();
    var pageHeight = $(window).height();

    var numHsquares = pageWidth/103;
    var numVsquares = pageHeight/100 - 1;

    if((numVsquares - Math.floor(numVsquares)) > 0)
        numVsquares--;

    if((numHsquares - Math.floor(numHsquares)) > 0)
        numHsquares--;

    if(cell[0] >= 0 && cell[0] < (numVsquares))
        if(cell[1] >= 0 && cell[1] < (numHsquares))
            return true;
    return false;
}
/*****************************************************/
/********************CHECK METHODS********************/
function checkAvailables(linkPos, numAv){
    var available_dir = [];
    var cell = [];
    cell = [Math.floor(linkPos[0]/100),Math.floor(linkPos[1]/100)];
    //Check availables
    var checkVarX = 0;
    var checkVarY = -1;
    var cycleCount=0;
    var stopCheck = false;
    var valid=true;

    while(!stopCheck){
        cycleCount++;
        if(isAvailable([cell[0]+checkVarX, cell[1]+checkVarY]))
            available_dir.push(getCellPosition(cell[0]+checkVarX, cell[1]+checkVarY));

        if(numAv == available_dir.length)
            stopCheck=true;

        if(cycleCount == 24){
            stopCheck=true;
            valid=false;
        }

        if(cycleCount == 1)
            checkVarX++;

        else if(cycleCount > 1 && cycleCount < 4)
            checkVarY++;

        else if(cycleCount > 3 && cycleCount < 6)
            checkVarX--;

        else if(cycleCount > 5 && cycleCount < 8)
            checkVarY--;

        else if(cycleCount == 8){
            checkVarX++;
            checkVarY--;
        }

        else if(cycleCount > 7 && cycleCount < 11)
            checkVarX++;

        else if(cycleCount > 10 && cycleCount < 15)
            checkVarY++;

        else if(cycleCount > 14 && cycleCount < 19)
            checkVarX--;

        else if(cycleCount > 18 && cycleCount < 23)
            checkVarY--;

        else if(cycleCount == 23)
            checkVarX++;
    }

    if(valid)
        return available_dir;
    else return -1;
}
/*****************************************************/
/********************LINKS METHODS********************/
function linkToggles(linkPos){
    $(".link-expanded").css({top:linkPos[0], left: linkPos[1]});
    $(".tiles").toggle();
    $("#links").toggle();
    $(".link-expanded").toggle();
}

function linkClick(linkPos){
    if ($(".link-expanded").is(":visible")){
        $("#links").addClass("tile-expanded");
        $(".link-icon").addClass("fa-times");
        $(".link-icon").removeClass("fa-link");

        var available_dir = checkAvailables(linkPos, 3);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();

        $("#link1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#link2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#link3").css({top:available_dir[2][0], left:available_dir[2][1]});

        $(".link-expanded").css({width:tWidth, height:tHeight});
    }

    else {
        $(".link-expanded").css({top:linkPos[0], left: linkPos[1]});
        $("#links").css({top:linkPos[0], left:linkPos[1]});
        $("#links").removeClass("tile-expanded");
        $(".link-icon").addClass("fa-link");
        $(".link-icon").removeClass("fa-times");
    }
}

function linkResize(cell, linkPos){
    if(!isAvailable(cell) && $(".link-expanded").is(":visible")){
        cell = getCell(linkPos[0], linkPos[1]);
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 3);
        $("#links").css({top:cellPos[0], left:cellPos[1]});
        $("#links").css({width:tWidth, height:tHeight});
        $("#link1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#link2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#link3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $(".link-expanded").css({width:tWidth, height:tHeight});
        $("#links").addClass("tile-expanded");
    }
    if ($(".link-expanded").is(":visible")){
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 3);
        $("#links").css({top:cellPos[0], left:cellPos[1]});
        $("#links").css({width:tWidth, height:tHeight});
        $("#link1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#link2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#link3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $(".link-expanded").css({width:tWidth, height:tHeight});
        $("#links").addClass("tile-expanded");
    }

    else {
        cell = getCell(linkPos[0], linkPos[1]);
        $("#links").css({top:linkPos[0], left:linkPos[1]});
        $("#links").removeClass("tile-expanded");

    }
    return cell;
}
/*****************************************************/
/******************INTERESTS METHODS******************/
function interestToggles(linkPos){
    $(".int-expanded").css({top:linkPos[0], left:linkPos[1]});
      $(".tiles").toggle();
      $("#interests").toggle();
      $(".int-expanded").toggle();
}

function interestClick(linkPos){
    if ($(".int-expanded").is(":visible")){
        $("#interests").addClass("tile-expanded");
        $(".int-icon").addClass("fa-times");
        $(".int-icon").removeClass("fa-bookmark");

        var available_dir = checkAvailables(linkPos, 6);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();

        $("#int1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#int2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#int3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#int4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#int5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#int6").css({top:available_dir[5][0], left:available_dir[5][1]});

        $(".int-expanded").css({width:tWidth, height:tHeight});
    }

    else {
        $(".int-expanded").css({top:linkPos[0], left: linkPos[1]});
        $("#interests").css({top:linkPos[0], left:linkPos[1]});
        $("#interests").removeClass("tile-expanded");
        $(".int-icon").addClass("fa-bookmark");
        $(".int-icon").removeClass("fa-times");
    }
}

function interestResize(cell, linkPos){
    if(!isAvailable(cell) && $(".link-expanded").is(":visible")){
        cell = getCell(linkPos[0], linkPos[1]);
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 6);
        $("#interests").css({top:cellPos[0], left:cellPos[1]});
        $("#interests").css({width:tWidth, height:tHeight});
        $("#int1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#int2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#int3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#int4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#int5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#int6").css({top:available_dir[5][0], left:available_dir[5][1]});
        $(".int-expanded").css({width:tWidth, height:tHeight});
        $("#interests").addClass("tile-expanded");
    }
    if ($(".int-expanded").is(":visible")){
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 6);
        $("#interests").css({top:cellPos[0], left:cellPos[1]});
        $("#interests").css({width:tWidth, height:tHeight});
        $("#int1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#int2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#int3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#int4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#int5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#int6").css({top:available_dir[5][0], left:available_dir[5][1]});
        $(".int-expanded").css({width:tWidth, height:tHeight});
        $("#interests").addClass("tile-expanded");
    }

    else {
        cell = getCell(linkPos[0], linkPos[1]);
        $("#interests").css({top:linkPos[0], left:linkPos[1]});
        $("#interests").removeClass("tile-expanded");

    }
    return cell;
}
/*****************************************************/
/*****************EXPERIENCES METHODS*****************/
function experienceToggles(linkPos){
    $(".exp-expanded").css({top:linkPos[0], left:linkPos[1]});
    $(".tiles").toggle();
    $("#experience").toggle();
    $(".exp-expanded").toggle();
}

function experienceClick(linkPos){
    if ($(".exp-expanded").is(":visible")){
        $("#experiences").addClass("tile-expanded");
        $(".exp-icon").addClass("fa-times");
        $(".exp-icon").removeClass("fa-bicycle");

        var available_dir = checkAvailables(linkPos, 6);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();

        $("#exp1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#exp2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#exp3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#exp4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#exp5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#exp6").css({top:available_dir[5][0], left:available_dir[5][1]});

        $(".exp-expanded").css({width:tWidth, height:tHeight});
    }

    else {
        $(".exp-expanded").css({top:linkPos[0], left: linkPos[1]});
        $("#experience").css({top:linkPos[0], left:linkPos[1]});
        $("#experience").removeClass("tile-expanded");
        $(".exp-icon").addClass("fa-bicycle");
        $(".exp-icon").removeClass("fa-times");
    }
}

function experienceResize(cell, linkPos){
    if(!isAvailable(cell) && $(".exp-expanded").is(":visible")){
        cell = getCell(linkPos[0], linkPos[1]);
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 6);
        $("#experience").css({top:cellPos[0], left:cellPos[1]});
        $("#experience").css({width:tWidth, height:tHeight});
        $("#exp1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#exp2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#exp3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#exp4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#exp5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#exp6").css({top:available_dir[5][0], left:available_dir[5][1]});
        $(".exp-expanded").css({width:tWidth, height:tHeight});
        $("#experience").addClass("tile-expanded");
    }
    if ($(".exp-expanded").is(":visible")){
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 6);
        $("#experience").css({top:cellPos[0], left:cellPos[1]});
        $("#experience").css({width:tWidth, height:tHeight});
        $("#exp1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#exp2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#exp3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#exp4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#exp5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#exp6").css({top:available_dir[5][0], left:available_dir[5][1]});
        $(".exp-expanded").css({width:tWidth, height:tHeight});
        $("#experience").addClass("tile-expanded");
    }
    else {
        cell = getCell(linkPos[0], linkPos[1]);
        $("#experience").css({top:linkPos[0], left:linkPos[1]});
        $("#experience").removeClass("tile-expanded");

    }
    return cell;
}
/*****************************************************/
/*******************SKILLS METHODS********************/
function skillsToggles(linkPos){
    $(".skill-expanded").css({top:linkPos[0], left:linkPos[1]});
    $(".tiles").toggle();
    $("#skills").toggle();
    $(".skill-expanded").toggle();
}

function skillsClick(linkPos){
    if ($(".skill-expanded").is(":visible")){
        $("#skills").addClass("tile-expanded");
        $(".skills-icon").addClass("fa-times");
        $(".skills-icon").removeClass("fa-graduation-cap");

        var available_dir = checkAvailables(linkPos, 5);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();

        $("#skill1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#skill2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#skill3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#skill4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#skill5").css({top:available_dir[4][0], left:available_dir[4][1]});

        $(".skill-expanded").css({width:tWidth, height:tHeight});
    }

    else {
        $(".skill-expanded").css({top:linkPos[0], left: linkPos[1]});
        $("#skills").css({top:linkPos[0], left:linkPos[1]});
        $("#skills").removeClass("tile-expanded");
        $(".skills-icon").addClass("fa-graduation-cap");
        $(".skills-icon").removeClass("fa-times");
    }
}

function skillsResize(cell, linkPos){
    if(!isAvailable(cell) && $(".skill-expanded").is(":visible")){
        cell = getCell(linkPos[0], linkPos[1]);
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 5);
        $("#skills").css({top:cellPos[0], left:cellPos[1]});
        $("#skills").css({width:tWidth, height:tHeight});
        $("#skill1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#skill2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#skill3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#skill4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#skill5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $(".skill-expanded").css({width:tWidth, height:tHeight});
        $("#skills").addClass("tile-expanded");
    }
    if ($(".skill-expanded").is(":visible")){
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 5);
        $("#skills").css({top:cellPos[0], left:cellPos[1]});
        $("#skills").css({width:tWidth, height:tHeight});
        $("#skill1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#skill2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#skill3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#skill4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#skill5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $(".skill-expanded").css({width:tWidth, height:tHeight});
        $("#skills").addClass("tile-expanded");
    }

    else {
        cell = getCell(linkPos[0], linkPos[1]);
        $("#skills").css({top:linkPos[0], left:linkPos[1]});
        $("#skills").removeClass("tile-expanded");

    }
    return cell;
}
/*****************************************************/
/******************PROJECTS METHODS*******************/
function projectsToggles(linkPos){
    $(".proj-expanded").css({top:linkPos[0], left:linkPos[1]});
    $(".tiles").toggle();
    $("#projects").toggle();
    $(".proj-expanded").toggle();
}

function projectsClick(linkPos){
    if ($(".proj-expanded").is(":visible")){
        $("#projects").addClass("tile-expanded");
        $(".projects-icon").addClass("fa-times");
        $(".projects-icon").removeClass("fa-folder");

        var available_dir = checkAvailables(linkPos, 6);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();

        $("#proj1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#proj2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#proj3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#proj4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#proj5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#proj6").css({top:available_dir[5][0], left:available_dir[5][1]});

        $(".proj-expanded").css({width:tWidth, height:tHeight});
    }

    else {
        $(".proj-expanded").css({top:linkPos[0], left: linkPos[1]});
        $("#projects").css({top:linkPos[0], left:linkPos[1]});
        $("#projects").removeClass("tile-expanded");
        $(".projects-icon").addClass("fa-folder");
        $(".projects-icon").removeClass("fa-times");
    }
}

function projectsResize(cell, linkPos){
    if(!isAvailable(cell) && $(".proj-expanded").is(":visible")){
        cell = getCell(linkPos[0], linkPos[1]);
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 6);
        $("#projects").css({top:cellPos[0], left:cellPos[1]});
        $("#projects").css({width:tWidth, height:tHeight});
        $("#proj1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#proj2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#proj3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#proj4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#proj5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#proj6").css({top:available_dir[5][0], left:available_dir[5][1]});
        $(".proj-expanded").css({width:tWidth, height:tHeight});
        $("#projects").addClass("tile-expanded");
    }
    if ($(".proj-expanded").is(":visible")){
        var cellPos = getCellPosition(cell[0], cell[1]);
        var tWidth = getCellWidth();
        var tHeight = getCellHeight();
        var available_dir = checkAvailables(getCellPosition(cell[0], cell[1]), 6);
        $("#projects").css({top:cellPos[0], left:cellPos[1]});
        $("#projects").css({width:tWidth, height:tHeight});
        $("#proj1").css({top:available_dir[0][0], left:available_dir[0][1]});
        $("#proj2").css({top:available_dir[1][0], left:available_dir[1][1]});
        $("#proj3").css({top:available_dir[2][0], left:available_dir[2][1]});
        $("#proj4").css({top:available_dir[3][0], left:available_dir[3][1]});
        $("#proj5").css({top:available_dir[4][0], left:available_dir[4][1]});
        $("#proj6").css({top:available_dir[5][0], left:available_dir[5][1]});
        $(".proj-expanded").css({width:tWidth, height:tHeight});
        $("#projects").addClass("tile-expanded");
    }

    else {
        cell = getCell(linkPos[0], linkPos[1]);
        $("#projects").css({top:linkPos[0], left:linkPos[1]});
        $("#projects").removeClass("tile-expanded");

    }
    return cell;
}
/*****************************************************/
/*******************EXPANDED METHODS******************/
function expandedShow(){
    $(".tiles").hide();
    $(".expanded").hide();
    $("#expanded-content-tile").toggle();
    $("#expanded-content").toggle();
}

function expandedHide(){
    $(".tiles").show();
    $("#expanded-content-tile").toggle();
    $("#expanded-content").toggle();
    $("#expanded-content").text("");
}

function expandedClick(id, text, expandedid){
    var tid= "#" + id;
    var texpandedid = "#" + expandedid + "> .content-expanded-text";
    var exptext = $(texpandedid).html();
    if ($("#expanded-content").is(":visible")) {
        var color = $(tid).css("background-color");
        $("#expanded-content-tile").css("background",color);
        $("#expanded-content-tile > .text").text(text);
        $("#expanded-content").append(exptext);
    }
}

function expandedResize(){
    var tPos = getCellPosition(1, 1);
    var tWidth = getCellWidth();
    var tHeight = getCellHeight();
    $("#expanded-content-tile").css({top:tPos[0], left:tPos[1]});
    $("#expanded-content-tile").css({width:tWidth, height:tHeight});
    $("#expanded-content").css({top:tPos[0], left:tPos[1]});
}
/*****************************************************/
        

function konamiCode() {
    if (window.addEventListener) {
        var keys = [],
            konami = "38,38,40,40,37,39,37,39,66,65";

        window.addEventListener("keydown", function(e){

            keys.push(e.keyCode);

            if (keys.toString().indexOf(konami) >= 0) {

                $("#background").css({"background-color":"rgba(0,0,0,0)"});
                $('body').css({"background-image": "none"});
                $(".tiles").css({"background-color":"rgba(0,0,0,0.5)"});
                $(".expanded").css({"background-color":"rgba(0,0,0,0.5)"});
                $(".expanded").css({"color":"white"});

                keys = [];
            };
        }, true);
    }
}

function godMode() {
    if (window.addEventListener) {
        var keys = [],
            god = "71,79,68,77,79,68,69";

        window.addEventListener("keydown", function(e){

            keys.push(e.keyCode);

            if (keys.toString().indexOf(god) >= 0) {
                $('#author').attr( 'contenteditable', 'true');
                $('.expanded').attr( 'contenteditable', 'true');
                $('.expanded-editable').attr( 'contenteditable', 'true');
                $('.text').attr( 'contenteditable', 'true');

                $("#god").show();
                setTimeout(function(){
                    $("#god").hide();
                }, 500);
                setTimeout(function(){
                    $("#god").show();
                }, 1000);
                setTimeout(function(){
                    $("#god").hide();
                }, 1500);
                setTimeout(function(){
                    $("#god").show();
                }, 2000);
                
                keys = [];
            };
        }, true);
    }
}

