let bank_points = 0;
let live_points = 0;
let live_points_minus1 = 2;
let live_points_minus2 = 1;
let live_points_plus1 = 4;
let live_points_plus2 = 6;
let live_points_temp = 0;


function onclick_right() {
    //add points
    if(live_points == 0) {
        live_points = 1;
        document.getElementById("points1").style.color = "red";
    }
    else if(live_points == 1)
    {
        live_points = 2;
        document.getElementById("points1").style.color = "black";
        document.getElementById("points2").style.color = "red";
    }
    else if(live_points == 2)
    {
        live_points = 3;
        document.getElementById("points2").style.color = "black";
        document.getElementById("points3").style.color = "red";
    }
    else{
        live_points_plus2 = live_points_plus2 + live_points;
        live_points_plus1 = live_points_plus1 + live_points_minus1;
        live_points_temp = live_points_minus1;
        live_points_minus1 = live_points;
        live_points = live_points + live_points_minus2;
        live_points_minus2 = live_points_temp;

        refreshPoints();
    }
}

function onclick_wrong() {
    resetPoints();
    refreshPoints();
}

function onclick_bank() {
    bank_points = bank_points + live_points;
    document.getElementById("bank_points").textContent = bank_points;
    resetPoints();
    refreshPoints();
}

function resetPoints() {
    live_points = 0;
    live_points_minus1 = 2;
    live_points_minus2 = 1;
    live_points_plus1 = 4;
    live_points_plus2 = 6;
    live_points_temp = 0;
}

function refreshPoints() {
    document.getElementById("points1").textContent = live_points_minus2.toString();
    document.getElementById("points2").textContent = live_points_minus1.toString();
    if(live_points >= 3)
    {
        document.getElementById("points3").textContent = live_points.toString();
    }
    else{
        document.getElementById("points3").textContent = "3";
    }
    document.getElementById("points4").textContent = live_points_plus1.toString();
    document.getElementById("points5").textContent = live_points_plus2.toString();

        document.getElementById("points1").style.color = "black";
        document.getElementById("points2").style.color = "black";
        document.getElementById("points3").style.color = "black";
        document.getElementById("points4").style.color = "black";
        document.getElementById("points5").style.color = "black";

        if(live_points >= 3)
        {
            document.getElementById("points3").style.color = "red";
        }
}