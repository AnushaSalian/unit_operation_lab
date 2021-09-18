let reactTemp=0, rateConst=0, freqFact=0, actEng=0,restartBtnClicked=false;
//on click of next button

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nextButton").style.visibility = "hidden";
  setTimeout(() => {
    var start = document.getElementById("start");
    start.innerText = "Reaction Kinetic studies in batch reactor";
    start.style.fontSize = "30px";
    start.classList.add("content-shine");
    start.style.left = "450px";
    start.style.top = "170px";
    document.getElementById("landingPageButton").style.visibility = "visible";
    document.getElementById("landingPageButton").style.cursor = "pointer";
    document.getElementById("landingPageButton").onclick = function () {
      gotoPage1();
    };
  }, 2300);
});

// function changeSubTitle()
// {
	// document.getElementById("subTitle").innerHTML="Click to choose Experiment or Evaluation";
// }

// function changeSubTitleBack()
// {
	// document.getElementById("subTitle").innerHTML="Reaction kinetic studies in plug flow reactor";
// }

// function changeCanvas()
// {
	// console.log("hey");
	// simsubscreennum=1;
	// gotoPage1();
// }

function gotoPage1() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();
}

function navNext() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }

  simsubscreennum += 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("nextButton").style.visibility = "hidden";
  magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------
var dataOn = 0, observeDataOn=0;

function magic() 
{
	if (simsubscreennum == 1) 
	{
		document.getElementById("experimentID").style.visibility = "hidden";
		hide();
	} 
	else if (simsubscreennum == 2)
	{
		document.getElementById("experimentID").style.visibility = "hidden";
		hide();
		if (chosenActivity == 1) 
		{
			console.log("One has chosen!");
			document.getElementById("experimentSetup").style.visibility = "hidden";
			document.getElementById("labelImage").style.visibility = "visible";
			document.getElementById("nextButton").style.visibility = "hidden";
			document.getElementById("configExp").style.visibility = "hidden";
		} 
		else
		{
			console.log("2 has chosen");
			document.getElementById("step2Heading").innerText = "Choose";
			document.getElementById("configExp").style.visibility = "visible";
			document.getElementById("nextButton").style.visibility = "hidden";
		}
		document.getElementById("evaluateButtonFromData").onclick=function()
		{
			reactTemp=document.getElementById("reactionTempEval").value;
			rateConst=document.getElementById("rateConstEval").value;
			freqFact=document.getElementById("freqFactor").value;
			actEng=document.getElementById("activationEnergy").value;
			if(!reactTemp || reactTemp == null || !rateConst || rateConst==null || !freqFact || freqFact==null || actEng ==null|| !actEng)
			{
				alert(" Enter appropriate values in the input field to proceed....");
			}
			else
			{
				document.getElementById("highlightEvaluation").style.visibility="visible";
				addEvaluationFormReadingsToTable(reactTemp,rateConst,freqFact,actEng);
			}
		}
		document.getElementById("clearEvaluationReadings").onclick=function()
		{
			clearTableRows("configInputTable");
			clearTableRows("configSimulatedTable");
		}
	}
	else if (simsubscreennum == 3) 
	{
		hide();
		if (chosenActivity == 1)
		{
			document.getElementById("labelImage").style.visibility = "hidden";
			document.getElementById("experimentSetup").style.visibility = "visible";
			document.getElementById("nextButton").style.visibility = "hidden";
			document.getElementById("evaluatePart").style.visibility = "hidden";
		}
		else 
		{
			console.log("2 has chosen");
			document.getElementById("configExp").style.visibility = "hidden";
			document.getElementById("nextButton").style.visibility = "hidden";
			document.getElementById("evaluatePart").style.visibility = "visible";
		}
	} else if (simsubscreennum == 4) {
		document.getElementById("goBackButton").style.visibility = "visible";
		document.getElementById("obserButton").style.visibility = "visible";
    document.getElementById("observeTable").style.visibility = "hidden";
    if (chosenActivity == 1) {
      document.getElementById("nextButton").style.visibility = "hidden";
      document.getElementById("step4Heading").innerText = "Experiment";
      document.getElementById("obserButton").onclick = "";
      document.getElementById("goBackButton").onclick = function () {
        if (dataOn == 0) {
          document.getElementById("displayExpValues").style.visibility =
            "visible";
          dataOn = 1;
          console.log(dataOn);
        } else if (dataOn == 1) {
          document.getElementById("displayExpValues").style.visibility =
            "hidden";
          dataOn = 0;
          console.log(dataOn);
        }
      };
	  document.getElementById("obserButton").onclick = function ()
	  {
		 document.getElementById("highlight").style.visibility="hidden";
        if (observeDataOn == 0) {
          document.getElementById("observations").style.visibility =
            "visible";
          observeDataOn = 1;
        } else if (observeDataOn == 1) {
          document.getElementById("observations").style.visibility =
            "hidden";
          observeDataOn = 0;
        }
      };
      document.getElementById("experimentSetup").style.visibility = "hidden";
      document.getElementById("nextButton").style.visibility = "hidden";

      document.getElementById("experimentID").style.visibility = "visible";
      document.getElementById("obserButton").style.visibility = "visible";
    } else {
      console.log("2 has chosen");
    }
	document.getElementById("restart").onclick=function()
	{
		document.getElementById("setupButton").disabled=false;
		document.getElementById("highlight").style.visibility = "hidden";
		document.getElementById("experimentID").style.visibility = "hidden";
		document.getElementById("goBackButton").style.visibility = "hidden";
		document.getElementById("obserButton").style.visibility = "hidden";
		document.getElementById("stopwatch").style.visibility = "hidden";
		document.getElementById("time").style.visibility = "hidden";
		document.getElementById("conduct").style.visibility = "hidden";
		document.getElementById("setTemp").innerHTML = "";
		document.getElementById("curTemp").innerHTML = "";
		document.getElementById("conduct").innerHTML = "";
		document.getElementById("volA").value = "1";
		document.getElementById("volB").value = "1";
		document.getElementById("addReading").style.visibility = "hidden";
		document.getElementById("rodHori").style.animation="";
		document.getElementById("liquidLid").style.height="0px";
		document.getElementById("tubeA").style.animation="";
		document.getElementById("tubeB").style.animation="";
		document.getElementById("heater").style.backgroundColor="#800000";
		document.getElementById("restart").style.visibility="hidden";
		document.getElementById("demoButton").disabled = false;
		document.getElementById("labelButton").disabled = false;
		restartBtnClicked=true;
		clearTableRows("observTable");
		gotoSetup();
	}
	//delete only table rows (table heading remains)
	document.getElementById("clearTable").onclick=function()
	{
		clearTableRows("observTable");
	}
  }
  else if (simsubscreennum == 6)
	{
		hide();
		if (chosenActivity == 1) {
		  document.getElementById("observeTable").style.visibility = "hidden";
		  document.getElementById("experimentSetup").style.visibility = "hidden";
		  document.getElementById("labelImage").style.visibility = "hidden";
		  document.getElementById("nextButton").style.visibility = "hidden";
		}
	}
}

function hide()
{
	// document.getElementById("clearTable").style.visibility = "hidden";
	document.getElementById("displayExpValues").style.visibility = "hidden";
	document.getElementById("observations").style.visibility = "hidden";
	document.getElementById("highlight").style.visibility = "hidden";
	document.getElementById("restart").style.visibility = "hidden";
	document.getElementById("goBackButton").style.visibility = "hidden";
	document.getElementById("obserButton").style.visibility = "hidden";
	document.getElementById("msg").style.visibility = "hidden";
    document.getElementById("observeTable").style.visibility = "hidden";
}

function clearTableRows(tableId)
{
	var rows = document.getElementById(tableId).rows;
	var i = rows.length;
	while (--i) 
	{
		rows[i].parentNode.removeChild(rows[i]);
	}
}

function gotoPage5() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 5;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("titleLarge").style.visibility = "hidden";
  document.getElementById("titleSmall").style.visibility = "visible";
  if (chosenActivity == 1) {
    document.getElementById("buttonsList").style.visibility = "visible";
    document.getElementById("demoButton").style.cursor = "pointer";
    // document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("demoButton").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";
      goto6th();
    };
  } else if (chosenActivity == 2) {
    document.getElementById("buttonsListEval").style.visibility = "visible";
    document.getElementById("demoButtonEval").style.cursor = "pointer";
    // document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("demoButtonEval").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";

      goto6th();
    };
  }
  // document.getElementById("labelButton").onclick = function(){
  // 	gotoLabel();
  // }
}

function goto6th() {
  console.log("At 6th canvas");
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 6;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

	if (chosenActivity == 1) 
	{
		document.getElementById("demoOne").style.visibility = "visible";
		document.getElementById("labelButton").style.cursor = "pointer";
		document.getElementById("labelButton").onclick = function ()
		{
			document.getElementById("displayExpValues").style.visibility = "hidden";
			gotoLabel();
		};
	} 
	else if (chosenActivity == 2) 
	{
		document.getElementById("demoTwo").style.visibility = "visible";
		document.getElementById("labelButtonEval").style.cursor = "pointer";
		document.getElementById("labelButtonEval").onclick = function () 
		{
			document.getElementById("displayExpValues").style.visibility = "hidden";
			gotoLabel();
		};
	}
}

function gotoLabel() {
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 2;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  if (chosenActivity == 1) {
    document.getElementById("demoButton").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";

      goto6th();
    };
    document.getElementById("setupButton").style.cursor = "pointer";
    document.getElementById("setupButton").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";

      gotoSetup();
    };
	} 
	else if (chosenActivity == 2) 
	{
		document.getElementById("demoButtonEval").onclick = function () 
		{
			document.getElementById("displayExpValues").style.visibility = "hidden";
			console.log("Pressed demo");
			// document.getElementById("configExp").style.visibility = "hidden";
			goto6th();
		};
		document.getElementById("setupButtonEval").style.cursor = "pointer";
		document.getElementById("setupButtonEval").onclick = function () 
		{
			document.getElementById("highlightEvaluation").style.visibility="hidden";
			document.getElementById("displayExpValues").style.visibility = "hidden";
			gotoSetup();
		};
	}
}

function gotoSetup() {
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 3;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  document.getElementById("expButton").style.cursor = "pointer";
  document.getElementById("expButton").onclick = function () 
  {
	  
		calcVaVb();
		document.getElementById("displayExpValues").style.visibility = "hidden";
		document.getElementById("overflow").style.visibility = "hidden";
		document.getElementById("demoButton").disabled = true;
		document.getElementById("labelButton").disabled = true;
		gotoExp();
		//for after restart button clicked
		
		if(restartBtnClicked)
		{
			incTimer=0;
			clearInterval(incTimer);
			
			// document.getElementById("setupButton").disabled=true;
			document.getElementById("addNaOH").style.visibility="visible";
			document.getElementById("addNaOH").style.visibility="visible";
			document.getElementById("ml1").style.visibility="visible";
			document.getElementById("ml2").style.visibility="visible";
			document.getElementById("volA").style.visibility="visible";
			document.getElementById("volB").style.visibility="visible";
			document.getElementById("msg1").style.visibility="visible";
			document.getElementById("tubeA").src="./Images/A.png";
			document.getElementById("tubeB").src="./Images/B.png";
			document.getElementById("tubeA").style="position: absolute; left: 520px; top:250px; z-index: 2;";
			document.getElementById("tubeB").style="position: absolute; left: 662.5px; top:250px; z-index: 2;";
			document.getElementById("tubeA").style.visibility="visible";
			document.getElementById("tubeB").style.visibility="visible";
			restartBtnClicked=false;
		}
  }
  if (chosenActivity == 2) {
    document.getElementById("labelButtonEval").onclick = function () {
      goBacktoStep2Eval();
    };
    document.getElementById("demoButtonEval").onclick = function () {
      goBacktoStep1Eval();
    };
  }
}

function goBacktoStep1Eval() {
  console.log("Going to 6th one");
  document.getElementById("configExp").style.visibility = "hidden";
  document.getElementById("evaluatePart").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 6;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();
}

function goBacktoStep2Eval() {
  console.log("Going to second");
  document.getElementById("evaluatePart").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 2;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";

  magic();
}

function gotoExp() {
  // document.getElementById("w3").style.visibility = "visible";
  // setInterval(function () {
    // waterFlowMovement("w1", "w2");
  // }, 500);
  console.log("Experiment part.");
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 4;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  document.getElementById("setupButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";

    document.getElementById("overflow").style.visibility = "hidden";

    console.log("clicked for setup");
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("nextButton").style.zIndex = -1;

    goBacktoStep2();
  };
  document.getElementById("labelButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";

    hideAllExperimentParts();
    gotoLabel();
  };
  document.getElementById("demoButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";

    hideAllExperimentParts();
    goto6th();
  };
}

function hideAllExperimentParts() {
  document.getElementById("displayExpValues").style.visibility = "hidden";

  document.getElementById("overflow").style.visibility = "hidden";
  document.getElementById("experimentID").style.visibility = "hidden";
  // document.getElementById("waterSteady").style.visibility = "hidden";
  document.getElementById("obserButton").style.visibility = "hidden";

  document.getElementById("obserButton").style.visibility = "hidden";
}

// ADDED By Jaison.
var chosenActivity;

function selectAction(n) {
  chosenActivity = n;
  console.log(chosenActivity);
  simsubscreennum = 5;
  gotoPage5();
}

// Values from experimental page of experiment PART, not the evaluation.:
var firstML = 1;

function setMLone() {
  firstML = document.getElementById("firstMLValue").value;
  console.log(firstML);
}

var secondML = 1;

function setMLtwo() {
  firstML = document.getElementById("secondMLValue").value;
  console.log(firstML);
}

function gotoObservation() {
  document.getElementById("step4Heading").innerText = "Observations";
  document.getElementById("experimentID").style.visibility = "hidden";
  document.getElementById("observeTable").style.visibility = "visible";
  document.getElementById("setupButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";

    document.getElementById("overflow").style.visibility = "hidden";
    goBacktoStep2();
  };
}

function goBacktoStep2() {
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("nextButton").style.zIndex = -1;
  document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("experimentID").style.visibility = "hidden";
  document.getElementById("obserButton").style.visibility = "hidden";
  document.getElementById("observeTable").style.visibility = "hidden";
  //
  document.getElementById("restart").style.visibility = "hidden";
  document.getElementById("goBackButton").style.visibility = "hidden";
  document.getElementById("obserButton").style.visibility = "hidden";
  document.getElementById("observeTable").style.visibility = "hidden";
  document.getElementById("msg").style.visibility = "hidden";
  document.getElementById("displayExpValues").style.visibility = "hidden";
  document.getElementById("observations").style.visibility = "hidden";

  simsubscreennum = 3;
  document.getElementById("canvas" + 4).style.visibility = "hidden";

  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("experimentSetup").style.visibility = "visible";
  document.getElementById("nextButton").style.visibility = "visible";
}

// ============================  EVALUATION PART

// Step 3

var evalSets = 1;

function setEvalSets() {
  evalSets = document.getElementById("evalSets").value;
  console.log(evalSets);

  var table = document.getElementById("configInputTable");

  var rowCount = table.rows.length - 1;
  console.log("Pre count:  ", rowCount);
  if (rowCount > 0) {
    for (var x = 1; x <= rowCount; x++) {
      table.deleteRow(1);
    }
  }

  for (var i = 1; i <= evalSets; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = `<input name="length" id="inputSet${i}0" style="width:90px" type="number">`;
    cell2.innerHTML = `<input name="length" id="inputSet${i}1" style="width:90px" type="number">`;
    cell3.innerHTML = `<input name="length" id="inputSet${i}2" style="width:90px" type="number">`;
    cell4.innerHTML = `<input name="length" id="inputSet${i}3" style="width:90px" type="number">`;
  }
}

function evaluateConfig() {
  var table = document.getElementById("configInputTable");
  var resultTable = document.getElementById("configResultTable");

  var rowCountPost = table.rows.length - 1;

  console.log("Total rows: ", rowCountPost);
  for (var z = 1; z <= rowCountPost; z++) {
    var out = document.getElementById("showResRey");
    out.innerText = "Calculating...";

    // taking values from columns
    lpm = document.getElementById("inputSet" + z + "0").value;
    pres = document.getElementById("inputSet" + z + "1").value;
    reyn = document.getElementById("inputSet" + z + "2").value;
    fric = document.getElementById("inputSet" + z + "3").value;

    presInMeter = pres / 100;
    if (processFluidEval == "Water") {
      den = 1000;
      // visco = 0.89;
      visco = 0.001;
    } else if (processFluidEval == "Kerosene") {
      den = 820;
      // visco = 0.00164;
      visco = 0.00215;
    }
    diaMeter = chosenPipeDiaEval / 39.37; // convert inch to meter
    console.log("Diameter is inch: ", chosenPipeDiaEval);
    console.log("Diameter of the pipe in meter is: ", diaMeter);
    console.log("Radius is: ", diaMeter / 2);
    lpmConvVelocity =
      (lpm * 0.000017) / (3.14 * (diaMeter / 2) * (diaMeter / 2)); // convert lpm to m3/s              V E L O C I T Y
    console.log("Velocity value is: ", lpmConvVelocity);
    // if(manoFluidEval == "Carbon tetrachloride"){
    // 	visco = 0.901;
    // }
    // else if(manoFluidEval == "Mercury"){
    // 	visco = 1.55;
    // }
    console.log(
      "Viscosity value of " + processFluid + " at 20 deg C is: ",
      visco
    );
    console.log("Density of " + processFluidEval + " fluid is: ", den);
    // Calculate Reynold's
    calculatedReyn = (den * diaMeter * lpmConvVelocity) / visco;
    calculatedReyn = calculatedReyn.toFixed(5); // ======    toFixed(5)
    console.log("Calculated Reynold's value is: ", calculatedReyn);

    var outFric = document.getElementById("showResInFric");

    // ========================================================= Friction Factor calculation.
    if (manoFluidEval == "Carbon tetrachloride") {
      denMano = 1600;
    } else if (manoFluidEval == "Mercury") {
      denMano = 13600;
    }
    console.log(
      "Manometric density value of " + manoFluidEval + " is: ",
      denMano
    );

    // calculate hf value
    hf = ((denMano - den) * presInMeter) / den;
    console.log("Calculated hf value's: ", hf);

    console.log("Length of pipe is: ", pipeLengthEval);
    // calculate FF
    calculatedFricFact =
      (2 * 9.8 * diaMeter * hf) /
      (4 * pipeLengthEval * lpmConvVelocity * lpmConvVelocity);
    calculatedFricFact = calculatedFricFact * 10000;
    calculatedFricFact = calculatedFricFact.toFixed(5); //========     toFixed(5)
    console.log("Calculated F F value is: ", calculatedFricFact);

    // Compare Reynold's and Friction Factor.
    console.log("The rey value taken in is: ", reyn);
    setTimeout(() => {
      // if the count of rows in result table is more than 3, increase the top of both of the result showing paragraph.
      var resultTable = document.getElementById("configResultTable");
      var rowCountPost = resultTable.rows.length - 1;


      //   -----------------------       DELETING ALL ROWS AND CHANGING THE NUMBER OF SETS BACK TO 0.
      var table = document.getElementById("configInputTable");
      table.style.color = "#fff";
      var rowCounttt = table.rows.length - 1;
      console.log("Count of rows after showing result is:  ", rowCounttt);
      document.getElementById("evalSets").value = 0;
      if (rowCounttt > 0) {
        for (var xx = 1; xx <= rowCounttt; xx++) {
          table.deleteRow(1);
        }
      }
      out.innerText = "";
    }, 300);
    setTimeout(() => {
      out.innerText = "";
      outFric.innerText = "";
    }, 5000);

    // Add to result table.
    var row = resultTable.insertRow(z);
    row.style.color = "#fff";
    var reyCell = row.insertCell(0);
    var fricCell = row.insertCell(1);
    reyCell.innerHTML = calculatedReyn;
    fricCell.innerHTML = calculatedFricFact;
  }
}

let settop = 100;
let oldAngle = 0;
let leftMotorPos = 220;
let rightMotorPos = 220;
let liquidPos = { top: 235, height: 10 };
let imgIndex = 0;
let waveIndex = 0;
let naohSetFirst=false;
let ethyleSetFirst=false;
let naohEthyleSet=0;


// setInterval(() => {
  // rotameterAnimation("leftMotor");
  // rotameterAnimation("rightMotor");
  // waveAnimation("liquidLid");
// }, 350);

let totVol = 1,
  eaConc = 0.02,
  shConc = 0.02,
  setTemp = 30;
 // k = 0;
let eaLPH = 0,
  shLPH = 0;

// slider
function rangeSlideEthyl(value) {
  eaConc = document.getElementById("acConc").value;
  document.getElementById("rangeValueEthyl").innerHTML = eaConc + " M";
  document.getElementById("acetConc").innerHTML = eaConc + " M";
}

function rangeSlideNaOH(value) {
  shConc = document.getElementById("ohConc").value;
  document.getElementById("rangeValueNaOH").innerHTML = shConc + " M";
  document.getElementById("ohConce").innerHTML = shConc + " M";
}

let simRateConst=0, simFreqFact=0, simActEng=0;
function addEvaluationFormReadingsToTable(reactTemp,rateConst,freqFact,actEng)
{
	$("#configInputTable").delay(900)
    .queue(function (generate_table) 
	{
        $(this).append("<tr style='text-align:center; background-color:lightgrey;'><td>" + reactTemp + "</td><td>"+ rateConst +"</td><td>"+ freqFact +"</td><td>"+ actEng +"</td></tr>");
		generate_table(); 
    });
	let temp = Number(document.getElementById("reactionTempEval").value);
	simRateConst = Number(648868942 * (2.7182818284590452353602874713527  ** (-45574/(8.314*(temp+273))))); //same as k
	simFreqFact = 6.49;
	simActEng = 45574;
	$("#configSimulatedTable").delay(900)
    .queue(function (generate_table) 
	{
        $(this).append("<tr style='text-align:center; background-color:lightgrey;'><td>" + reactTemp + "</td><td>"+ simRateConst.toFixed(2) +"</td><td>"+ simFreqFact +"</td><td>"+ simActEng +"</td></tr>");
		generate_table(); 
    });
}	
// let rv=0;molar=0,temp=0;
let Va=0,Vb=0;
let VbByVa=0;
function calcVaVb()
{
	V=Number(document.getElementById("reactorVol").value);
	M=Number(document.getElementById("intialMolar").value);
	//temp=Number(document.getElementById("reactionTemp").value);
	Cas=Number(eaConc);
	Cbs=Number(shConc);
	VbByVa=(M*Cas)/Cbs;
	Vb=V*VbByVa/(1+VbByVa);
	Va=V-Vb;
	Va=Va*1000;
	Vb=Vb*1000;
	//console.log(V,M,Cas,Cbs,VbByVa,Vb,Va,Number(Math.round(document.getElementById("volA").value)),Number(Math.round(document.getElementById("volB").value)));
}

//setInterval(function(){calcVaVb();},200);
let oldCond = 0;
let actCond = 0;
let tau = 0;
let Cao = 0;
let Cbo = 0;
let molRatio = 0;
let Xa = 0;
let Ca = 0;
let Cb = 0;
let condAmb = 0;
let Cas,Cbs,V,M,T,k,exp;

function calcConductivity(time) 
{
	calcVaVb();
	V=Number(Va+Vb);
	T = Number(document.getElementById("reactionTemp").value);
	//k  = Number(648868942 * (2.7182818284590452353602874713527  ** (-45574/(8.314*(T+273)))));
	//T=time;
	k  = Number(648868942 * (2.7182818284590452353602874713527  ** (-45574/8.314/(T+273))));
	//oldCond = actCond;
	// tau = (V * 3600) / (1000 * (Va + Vb));
	//tau = V * 3600 / 1000 / (Va + Vb);
	Cao = (Cas * Va) / (Va + Vb);
	Cbo = (Cbs * Vb) / (Va + Vb);
	M = Cbs * Vb / Cas / Va;
	// exp=(2.7182818284590452353602874713527  ** (k*tau*Cao*(M-1)));
	exp=(2.7182818284590452353602874713527  ** (k*time*Cao*(M-1)));
	if(M>1)
	{
		Xa=(M*(1-exp))/(1- (M*exp));
	}
	else 
	{
		// Xa=(k*tau*Cao)/(1+k*tau*Cao);
		Xa=(k*time*Cao)/(1+k*time*Cao);
	}
	Ca = Cao * (1 - Xa);
	Cb = Ca - Cao + Cbo;
	condAmb = (Cb + 0.000063) / 0.00026;
	actCond = condAmb / (1 + 0.0145 * (T - 28));
	if(actCond<0)
	{
		actCond=0;
	}
	console.log(`Cas = ${Cas}, 
	Cbs = ${Cbs},
	Va = ${Va},
	Vb = ${Vb},
	V = ${V},
	T = ${T},
	time = ${time},
	k = ${k},
	tau = ${tau},
	Cao = ${Cao},
	Cbo = ${Cbo},
	M = ${M},
	Xa = ${Xa},
	Ca = ${Ca},
	Cb = ${Cb},
	condAmb = ${condAmb},
	actCond = ${actCond}`);
}

function addNaOHToReactor()
{
	document.getElementById("setupButton").disabled=true;
	calcVaVb();
	console.log(Math.round(Va),Math.round(Vb),Number(Math.round(document.getElementById("volA").value)),Number(Math.round(document.getElementById("volB").value)));
	if(Math.round(Va) == Number(Math.round(document.getElementById("volA").value)) && Math.round(Vb) == Number(Math.round(document.getElementById("volB").value)))
	{
		document.getElementById("msg2").style.visibility="hidden";
		displayTubeA(document.getElementById("volA").value,tubeImagesA,"tubeA");
		displayTubeB(document.getElementById("volB").value,tubeImagesB,"tubeB");
		pourNaOH();
		//console.log("correct");
	}
	else 
	{
		document.getElementById("msg2").style.visibility="visible";
		setTimeout(function()
		{
			displayTubeA(document.getElementById("volA").value,tubeImagesA,"tubeA");
			displayTubeB(document.getElementById("volB").value,tubeImagesB,"tubeB");
			document.getElementById("msg2").style.visibility="hidden";
		},2500);
	}
}

let tubeImagesA = [
  "./Images/A.png",
  "./Images/A100.png",
  "./Images/A300.png",
  "./Images/A600.png",
  "./Images/A800.png",
  "./Images/A1000.png",
];
let tubeImagesB = [
  "./Images/B.png",
  "./Images/B100.png",
  "./Images/B300.png",
  "./Images/B600.png",
  "./Images/B800.png",
  "./Images/B1000.png",
];

const displayTubeA = function (Va,tubeImages,imgId) {
  if(Va <=300) imgIndex=1;
  else if(Va >300 && Va <=900) imgIndex=2;
  else if(Va >900 && Va <=1500) imgIndex=3;
  else if(Va >1500 && Va <=2500) imgIndex=4;
  else if(Va >2500) imgIndex=5;
  document.getElementById(imgId).src = tubeImages[imgIndex];
};

const displayTubeB = function (Va,tubeImages,imgId) {
  if(Va <=300) imgIndex=1;
  else if(Va >300 && Va <=900) imgIndex=2;
  else if(Va >900 && Va <=1500) imgIndex=3;
  else if(Va >1500 && Va <=2500) imgIndex=4;
  else if(Va >2500) imgIndex=5;
  document.getElementById(imgId).src = tubeImages[imgIndex];
};

let rTemp=30;
function setReactorTemp()
{
	rTemp=document.getElementById("reactionTemp").value;
}

let interval=0;
function pourNaOH()
{
	document.getElementById("addNaOH").style.visibility="hidden";
	document.getElementById("ml1").style.visibility="hidden";
	document.getElementById("ml2").style.visibility="hidden";
	document.getElementById("volA").style.visibility="hidden";
	document.getElementById("volB").style.visibility="hidden";
	document.getElementById("msg1").style.visibility="hidden";
	document.getElementById("tubeA").style.animation="moveTubeA1 1.2s forwards";
	setTimeout(function()
	{
		document.getElementById("tubeB").style.animation="moveTubeB 1.2s forwards";
		setTimeout(function()
		{
			document.getElementById("tubeB").style.left="200px";
			document.getElementById("tubeB").style.top="5px";
			document.getElementById("tubeB").style.animation="rotateTubeB 0.5s forwards";
			setTimeout(function()
			{
				document.getElementById("liquidLid").style.top = "225px";
				document.getElementById("liquidLid").style.height = "40px";
				setInterval(function(){waveAnimation();},500);
				setTimeout(function()
				{
					document.getElementById("rodHori").style.animation="rotateRodHori 0.5s infinite linear";
					setTimeout(function()
					{
						document.getElementById("tubeB").style.visibility="hidden";
						document.getElementById("heater").style.backgroundColor="red";
						document.getElementById("setTemp").innerHTML=rTemp;
						setCurrentTemperature(rTemp-4,rTemp);
						setTimeout(function()
						{
							document.getElementById("addEthyl").style.visibility="visible";
						},5500);
					},500);
				},200);
			},500);
		},1200);
	},300);
}

let waveImages = ["./Images/191.svg", "./Images/192.svg"];
const waveAnimation = function () {
	//console.log(waveIndex);
    if (waveIndex == 1) {
      waveIndex = 0;
    } else waveIndex = 1;
	document.getElementById("liquidLid").src = waveImages[waveIndex];
};

function setCurrentTemperature(newTemp,rTemp)
{	
	interval=setInterval(function(){
		if(newTemp<=rTemp)
		{
			document.getElementById("curTemp").innerHTML=newTemp;
			newTemp++;
			// console.log(newTemp);
		}
		else clearInterval(interval);
	},1000);
	// console.log(newTemp);
}

let time=0,min=0,sec=0,incTimer=0;
function addEthylToReactor()
{
	document.getElementById("addEthyl").style.visibility="hidden";
	document.getElementById("tubeA").style.left="265px";
	document.getElementById("tubeA").style.top="280px";
	document.getElementById("tubeA").style.animation="moveTubeA2 1s forwards";
	setTimeout(function()
	{
		document.getElementById("tubeA").style.left="200px";
		document.getElementById("tubeA").style.top="5px";
		document.getElementById("tubeA").style.animation="rotateTubeB 0.5s forwards";
		setTimeout(function()
		{
			document.getElementById("tubeA").style.visibility="hidden";
			document.getElementById("liquidLid").style.top = "200px";
			document.getElementById("liquidLid").style.height = "60px";
			setInterval(function(){waveAnimation();},500);
			setTimeout(function()
			{
				document.getElementById("restart").style.visibility="visible";
				document.getElementById("stopwatch").style.visibility="visible";
				document.getElementById("addReading").style.visibility="visible";
				document.getElementById("time").style.visibility="visible";
				time=0; min=0; sec=0;
				// calcConductivity(time);
				// document.getElementById("conduct").style.visibility = "visibile";
				document.getElementById("conduct").innerHTML=actCond.toFixed(2);
				incTimer=setInterval(function(){incrementTimer()},1000);
			},100);
		},500);
	},1000);
}
let minToSec=0;
function incrementTimer()
{
	sec=sec+15;
	if(sec%60==0)
	{
		sec=0;
		document.getElementById("sec").innerHTML=sec;
		min=min+1;
		document.getElementById("min").innerHTML=min;
	}
	else document.getElementById("sec").innerHTML=sec;
	minToSec=(min*60)+sec;
	calcConductivity(minToSec);
	document.getElementById("conduct").innerHTML=actCond.toFixed(2);	
	console.log(min,sec,minToSec,actCond.toFixed(2));
}

function addReadingsToTable()
{
	document.getElementById("highlight").style.visibility="visible";
	$("#observTable").queue(function (generate_table) 
	{
        $(this).append("<tr style='text-align:center;'><td>"+minToSec+"</td><td>"+actCond.toFixed(2)+"</td></tr>");
		generate_table(); 
    });
}
