let reactTemp=0, rateConst=0, freqFact=0, actEng=0;
//on click of next button

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nextButton").style.visibility = "hidden";
  setTimeout(() => {
    var start = document.getElementById("start");
    start.innerText = "Reaction Kinetic studies in plug flow reactor";
    start.style.fontSize = "30px";
    start.classList.add("content-shine");
    start.style.left = "410px";
    start.style.top = "170px";
    document.getElementById("landingPageButton").style.visibility = "visible";
    document.getElementById("landingPageButton").style.cursor = "pointer";
    document.getElementById("landingPageButton").onclick = function () {
      gotoPage1();
    };
  }, 2000);
});

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
				alert(" Enter all the values in the input field to proceed....");
			}
			else
			{
				
				//addEvaluationFormReadingsToTable();
			}
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
	  	document.getElementById("restart").style.visibility = "visible";
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
		document.getElementById("experimentID").style.visibility = "hidden";
		document.getElementById("restart").style.visibility = "hidden";
		document.getElementById("goBackButton").style.visibility = "hidden";
		document.getElementById("obserButton").style.visibility = "hidden";
		document.getElementById("condDiv").style.visibility = "hidden";
		document.getElementById("msg").style.visibility = "hidden";
		gotoSetup();
	}
	//delete only table rows (table heading remains)
	document.getElementById("clearTable").onclick=function()
	{
		var rows = document.getElementById("observTable").rows;
		var i = rows.length;
		while (--i) 
		{
			rows[i].parentNode.removeChild(rows[i]);
		}
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
	document.getElementById("restart").style.visibility = "hidden";
	document.getElementById("goBackButton").style.visibility = "hidden";
	document.getElementById("obserButton").style.visibility = "hidden";
	document.getElementById("condDiv").style.visibility = "hidden";
	document.getElementById("msg").style.visibility = "hidden";
    document.getElementById("observeTable").style.visibility = "hidden";
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
  } else if (chosenActivity == 2) {
    document.getElementById("demoButtonEval").onclick = function () {
      document.getElementById("displayExpValues").style.visibility = "hidden";

      console.log("Pressed demo");
      // document.getElementById("configExp").style.visibility = "hidden";
      goto6th();
    };
    document.getElementById("setupButtonEval").style.cursor = "pointer";
    document.getElementById("setupButtonEval").onclick = function () {
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
  document.getElementById("expButton").onclick = function () {
    document.getElementById("displayExpValues").style.visibility = "hidden";

    document.getElementById("overflow").style.visibility = "hidden";
    gotoExp();
  };
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

// function fluidMoveAndPinMove(angle) {
//   h1Val = 0.0;
//   h2Val = 0.0;
//   valOfRato = 0.0;
//   h1Final = 0.0;
//   valOfRatoNew = 0.0;
//   h2Final = 0.0;

//   document.getElementById("waterPourSecondLongOne").style.visibility =
//     "visible";
//   document.getElementById("gatewayRotate").style.cursor = "auto";

//   document.getElementById("addtoTableButton").style.visibility = "visible";

//   if (processFluid == "Water" && manoFluid == "Mercury") {
//     if (chosenPipeDia == 0.25) {
//       heightLeft = (356 - angle) * 0.093;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.096;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.104;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.093;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.19;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.099;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1066;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.099;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (h1Final >= 69) {
//         h1Final = 70;
//         h2Final = 0;
//         valOfRatoNew = 37.92;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 0.5) {
//       heightLeft = (356 - angle) * 0.014;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.014;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.011;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.011;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.0084;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.0084;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 38;
//         h2Final = 32;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.0) {
//       heightLeft = (356 - angle) * 0;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.00056;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.00056;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 35.2;
//         h2Final = 34.8;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.5) {
//       heightLeft = (356 - angle) * 0;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 35;
//         h2Final = 35;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     }
//     document.getElementById("leftCm").innerText = h1Final;
//     document.getElementById("rightCm").innerText = h2Final;
//     document.getElementById("ratoReadings").innerText = valOfRatoNew;

//     document.getElementById("leftFluid").style.height =
//       parseInt(37) + parseInt(heightLeftNew) + "px";
//     document.getElementById("leftFluid").style.top =
//       parseInt(222) - parseInt(topLeftNew) + "px";
//     document.getElementById("rightFluid").style.height =
//       parseInt(37) - parseInt(heightRightNew) + "px";
//     document.getElementById("rightFluid").style.top =
//       parseInt(222) + parseInt(topRightNew) + "px";
//     document.getElementById("rotatePin").style.top =
//       parseInt(259) - parseInt(topPinNew) + "px";
//   } else if (processFluid == "Kerosene" && manoFluid == "Mercury") {
//     if (chosenPipeDia == 0.25) {
//       heightLeft = (356 - angle) * 0.093;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.096;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.104;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.093;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.04;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.099;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1023;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.099;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (h1Final >= 69) {
//         h1Final = 70;
//         h2Final = 0;
//         valOfRatoNew = 36.42;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 0.5) {
//       heightLeft = (356 - angle) * 0.04;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.034;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.021;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.022;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.0093;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.0093;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 38.3;
//         h2Final = 31.7;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.0) {
//       heightLeft = (356 - angle) * 0.006;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.009;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.006;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.009;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.000842;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.000842;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 35.3;
//         h2Final = 34.7;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.5) {
//       heightLeft = (356 - angle) * 0;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 35;
//         h2Final = 35;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     }
//     document.getElementById("leftCm").innerText = h1Final;
//     document.getElementById("rightCm").innerText = h2Final;
//     document.getElementById("ratoReadings").innerText = valOfRatoNew;

//     document.getElementById("leftFluid").style.height =
//       parseInt(37) + parseInt(heightLeftNew) + "px";
//     document.getElementById("leftFluid").style.top =
//       parseInt(222) - parseInt(topLeftNew) + "px";
//     document.getElementById("rightFluid").style.height =
//       parseInt(37) - parseInt(heightRightNew) + "px";
//     document.getElementById("rightFluid").style.top =
//       parseInt(222) + parseInt(topRightNew) + "px";
//     document.getElementById("rotatePin").style.top =
//       parseInt(259) - parseInt(topPinNew) + "px";
//   } else if (
//     processFluid == "Kerosene" &&
//     manoFluid == "Carbon tetrachloride"
//   ) {
//     if (chosenPipeDia == 0.25) {
//       heightLeft = (356 - angle) * 0.093;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.096;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.104;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.093;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.04;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.099;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.021;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.099;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (h1Final >= 69) {
//         h1Final = 70;
//         h2Final = 0;
//         valOfRatoNew = 7.42;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 0.5) {
//       heightLeft = (356 - angle) * 0.093;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.096;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.104;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.093;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.14;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.099;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.089;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.099;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (h1Final >= 69) {
//         h1Final = 70;
//         h2Final = 0;
//         valOfRatoNew = 31.42;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.0) {
//       heightLeft = (356 - angle) * 0.04;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.034;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.02;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.022;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.0124;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.0124;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 39.4;
//         h2Final = 30.6;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.5) {
//       heightLeft = (356 - angle) * 0.006;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.009;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.006;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.009;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.0017;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.1124;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.0017;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (valOfRatoNew >= 39) {
//         h1Final = 35.6;
//         h2Final = 34.4;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     }
//     document.getElementById("leftCm").innerText = h1Final;
//     document.getElementById("rightCm").innerText = h2Final;
//     document.getElementById("ratoReadings").innerText = valOfRatoNew;

//     document.getElementById("leftPinkFluid").style.height =
//       parseInt(37) + parseInt(heightLeftNew) + "px";
//     document.getElementById("leftPinkFluid").style.top =
//       parseInt(222) - parseInt(topLeftNew) + "px";
//     document.getElementById("rightPinkFluid").style.height =
//       parseInt(37) - parseInt(heightRightNew) + "px";
//     document.getElementById("rightPinkFluid").style.top =
//       parseInt(222) + parseInt(topRightNew) + "px";
//     document.getElementById("rotatePin").style.top =
//       parseInt(259) - parseInt(topPinNew) + "px";
//   } else if (processFluid == "Water" && manoFluid == "Carbon tetrachloride") {
//     console.log("HERE");
//     console.log("Chosen pipe dia is: ", chosenPipeDia);
//     if (chosenPipeDia == 0.25) {
//       console.log("Current deg: ", angle);

//       heightLeft = (356 - angle) * 0.093;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.096;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.104;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.093;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.04;
//       topPinNew = topPin.toFixed(0);

//       h1Val = (356 - angle) * 0.099;
//       h1New = parseFloat(35) + parseFloat(h1Val);
//       console.log("The h1 new dec fixed is: ", h1New);

//       valOfRato = (356 - angle) * 0.019;
//       valOfRatoNew = valOfRato.toFixed(2);
//       console.log("Val of Rato is ", valOfRatoNew);

//       h2Val = (356 - angle) * 0.099;
//       h2New = parseFloat(35) - parseFloat(h2Val);

//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("The h1 final val is: ", h1Final);

//       if (h1Final >= 69) {
//         h1Final = 70;
//         h2Final = 0;
//         valOfRatoNew = 6.67;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 0.5) {
//       console.log("Current deg: ", angle);

//       h1Val = (356 - angle) * 0.098;
//       valOfRato = (356 - angle) * 0.0798;
//       valOfRatoNew = valOfRato.toFixed(2);
//       h1New = parseFloat(35) + parseFloat(h1Val);

//       h2Val = (356 - angle) * 0.098;
//       h2New = parseFloat(35) - parseFloat(h2Val);
//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);
//       console.log("H1 value is: ", h1Final);

//       heightLeft = (356 - angle) * 0.093;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.096;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.104;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.093;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.14;
//       topPinNew = topPin.toFixed(0);

//       if (h1Final >= 68) {
//         h1Final = 70;
//         h2Final = 0;
//         valOfRatoNew = 28.42;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.0) {
//       console.log("Current deg: ", angle);

//       h1Val = (356 - angle) * 0.0146;
//       valOfRato = (356 - angle) * 0.11236;
//       valOfRatoNew = valOfRato.toFixed(2);
//       h1New = parseFloat(35) + parseFloat(h1Val);

//       h2Val = (356 - angle) * 0.0146;
//       h2New = parseFloat(35) - parseFloat(h2Val);
//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);

//       heightLeft = (356 - angle) * 0.04;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.034;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.02;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.022;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       if (valOfRatoNew >= 39) {
//         h1Final = 40.2;
//         h2Final = 29.8;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     } else if (chosenPipeDia == 1.5) {
//       console.log("Current deg: ", angle);

//       h1Val = (356 - angle) * 0.00196;
//       valOfRato = (356 - angle) * 0.11236;
//       valOfRatoNew = valOfRato.toFixed(2);
//       h1New = parseFloat(35) + parseFloat(h1Val);

//       h2Val = (356 - angle) * 0.00196;
//       h2New = parseFloat(35) - parseFloat(h2Val);
//       h1Final = h1New.toFixed(2);
//       h2Final = h2New.toFixed(2);

//       heightLeft = (356 - angle) * 0.006;
//       heightLeftNew = heightLeft.toFixed(0);
//       topLeft = (356 - angle) * 0.009;
//       topLeftNew = topLeft.toFixed(0);

//       heightRight = (356 - angle) * 0.006;
//       heightRightNew = heightLeft.toFixed(0);
//       topRight = (356 - angle) * 0.009;
//       topRightNew = topLeft.toFixed(0);

//       topPin = (356 - angle) * 0.21;
//       topPinNew = topPin.toFixed(0);

//       if (valOfRatoNew >= 39) {
//         h1Final = 35.7;
//         h2Final = 34.3;
//         valOfRatoNew = 40;
//         console.log("Overflow condition");
//         document.getElementById("overflow").style.visibility = "visible";
//       }
//     }
//     document.getElementById("leftCm").innerText = h1Final;
//     document.getElementById("rightCm").innerText = h2Final;
//     document.getElementById("ratoReadings").innerText = valOfRatoNew;

//     document.getElementById("leftPinkFluid").style.height =
//       parseInt(37) + parseInt(heightLeftNew) + "px";
//     document.getElementById("leftPinkFluid").style.top =
//       parseInt(222) - parseInt(topLeftNew) + "px";
//     document.getElementById("rightPinkFluid").style.height =
//       parseInt(37) - parseInt(heightRightNew) + "px";
//     document.getElementById("rightPinkFluid").style.top =
//       parseInt(222) + parseInt(topRightNew) + "px";
//     document.getElementById("rotatePin").style.top =
//       parseInt(259) - parseInt(topPinNew) + "px";
//   }
//   document.getElementById("addtoTableButton").onclick = function () {
//     document.getElementById("addtoTableButton").style.visibility = "hidden";
//     var table = document.getElementById("observeTable");
//     table.style.color = "#fff";
//     var row = table.insertRow(1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     var cell5 = row.insertCell(4);
//     cell1.innerHTML = processFluid;
//     cell2.innerHTML = manoFluid;
//     cell3.innerHTML = valOfRatoNew;
//     cell4.innerHTML = h1Final;
//     cell5.innerHTML = h2Final;
//   };
//   document.getElementById("obserButton").onclick = function () {
//     gotoObservation();
//   };
// }

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
  document.getElementById("condDiv").style.visibility = "hidden";

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
      // ======================================================= VERIFICATION MESSAGE
      // if(rowCountPost > 3){
      // 	out.style.top = "250px";
      // 	outFric.style.top = "280px";
      // }

      // if(calculatedReyn == reyn){
      // 	out.innerText = "Reynold's value is correct!";
      // 	out.style.color = "green";

      // }
      // else{
      // 	out.innerText = "Reynold's value is incorrect!";
      // 	out.style.color = "red";
      // }
      // if(calculatedFricFact == fric){
      // 	outFric.innerText = "Fraction Factot value is correct!";
      // 	outFric.style.color = "green";

      // }
      // else{
      // 	outFric.innerText = "Fraction Factot value is incorrect!";
      // 	outFric.style.color = "red";
      // }

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
let rotameterImages = [
  "./Images/202.svg",
  "./Images/204.svg",
  "./Images/205.svg",
  "./Images/207.svg",
  "./Images/209.svg",
  "./Images/210.svg",
];
let waveImages = ["./Images/191.svg", "./Images/192.svg"];

$(function () {
  // code to execute when the DOM is ready

  $("#rot1").propeller({
    inertia: 0,
    speed: 0,
    onRotate: function () {
		ethyleSetFirst = (naohSetFirst === true && ethyleSetFirst === false) ? false : true;
		displayMsg();
      if (Math.sign(this.deg) == -1) {
        if (leftMotorPos >= 140.5) {
          leftMotorPos = leftMotorPos - 0.5;
          document.getElementById("leftMotor").style.top = `${leftMotorPos}px`;
          setLPH("rot1");
        }
      } else {
        if (leftMotorPos <= 219.5) {
          leftMotorPos = leftMotorPos + 0.5;
          document.getElementById("leftMotor").style.top = `${leftMotorPos}px`;
          setLPH("rot1");
        }
      }
    },
    onDragStart: function () {
      oldAngle = this.angle;
    },
    onStop: function () {
      oldAngle = this.angle;
	  naohEthyleSet++;
      alert("Stopped");
    },
  });
  $("#rot2").propeller({
    inertia: 0,
    speed: 0,
    onRotate: function () {
		naohSetFirst = (naohSetFirst === false && ethyleSetFirst === true) ? false : true;
		displayMsg();
      if (Math.sign(this.deg) == -1) {
        if (rightMotorPos >= 140.5) {
          rightMotorPos = rightMotorPos - 0.5;
          document.getElementById(
            "rightMotor"
          ).style.top = `${rightMotorPos}px`;
          setLPH("rot2");
        }
      } else {
        if (rightMotorPos <= 219.5) {
          rightMotorPos = rightMotorPos + 0.5;
          document.getElementById(
            "rightMotor"
          ).style.top = `${rightMotorPos}px`;
          setLPH("rot2");
        }
      }
    },
    onDragStart: function () {
      oldAngle = this.angle;
    },
    onStop: function () {
      oldAngle = this.angle;
      alert("Stopped");
    },
  });
});

const rotameterAnimation = function (imgId) {
  if (imgIndex <= 5) {
    if (imgIndex == 5) {
      imgIndex = 0;
    } else imgIndex += 1;
  }
  document.getElementById(imgId).src = rotameterImages[imgIndex];
};
const waveAnimation = function (imgId) {
  if (waveIndex <= 1) {
    if (waveIndex == 1) {
      waveIndex = 0;
    } else waveIndex += 1;
  }
  document.getElementById(imgId).src = waveImages[waveIndex];
};

setInterval(() => {
  rotameterAnimation("leftMotor");
  rotameterAnimation("rightMotor");
  waveAnimation("liquidLid");
}, 350);

let totVol = 1,
  eaConc = 0.02,
  shConc = 0.02,
  setTemp = 30;
 // k = 0;
let eaLPH = 0,
  shLPH = 0;

// initialiseExp();
// function setReactorVolume() {
  // totVol = document.getElementById("reactorVolume").value * 1000;
  // document.getElementById("reactVol").innerText = totVol + " Liter(s)";
// }

// function setReactorTemp() {
  // setTemp = document.getElementById("reactionTemp").value;
  // document.getElementById("reactTemp").innerText = setTemp + " degree Celsius";
  // initialiseExp();
  // console.log(k);
// }

// // slider
// function rangeSlideEthyl(value) {
  // eaConc = document.getElementById("acConc").value;
  // document.getElementById("rangeValueEthyl").innerHTML = eaConc + " M";
  // document.getElementById("acetConc").innerHTML = eaConc + " M";
// }

// function rangeSlideNaOH(value) {
  // shConc = document.getElementById("ohConc").value;
  // document.getElementById("rangeValueNaOH").innerHTML = shConc + " M";
  // document.getElementById("ohConce").innerHTML = shConc + " M";
// }

// function initialiseExp() {
  // k = 648868942 * Math.pow(Math.E, -45574 / 8.314 / (setTemp + 273));
  // console.log(k);
// }

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
let Cas,Cbs,Va,Vb,V,M,T,k,exp;

function calcConductivity() {
	Cas=Number(eaConc);
	Cbs=Number(shConc);
	Va=Number(eaLPH);
	Vb=Number(shLPH);
	V=Number(Va+Vb);
	T = Number(document.getElementById("reactionTemp").value);
	k  = 648868942 * (2.7182818284590452353602874713527  ** (-45574/(8.314*(T+273))));
	//oldCond = actCond;
	tau = (V * 3600) / (1000 * (Va + Vb));
	Cao = (Cas * Va) / (Va + Vb);
	Cbo = (Cbs * Vb) / (Va + Vb);
	M = (Cbs * Vb) / (Cas * Va);
	exp=(2.7182818284590452353602874713527  ** (k*tau*Cao*(M-1)));
	if(M>1)
	{
		Xa=(M*(1-exp))/(1- (M*exp));
	}
	else 
	{
		Xa=(k*tau*Cao)/(1+k*tau*Cao);
	}
	Ca = Cao * (1 - Xa);
	Cb = Ca - Cao + Cbo;
	condAmb = (Cb + 0.000063) / 0.00026;
	actCond = condAmb / (1 + 0.0145 * (T - 28));
	console.log(`Cas = ${Cas}, 
	Cbs = ${Cbs},
	Va = ${Va},
	Vb = ${Vb},
	V = ${V},
	T= ${T},
	k= ${k},
	tau= ${tau},
	Cao= ${Cao},
	Cbo= ${Cbo},
	M= ${M},
	Xa= ${Xa},
	Ca= ${Ca},
	Cb= ${Cb},
	condAmb= ${condAmb},
	actCond= ${actCond}`);
}

let conductivity=0,tableArray=[];
function setLPH(sideLPH) 
{
		calcConductivity();
  if (sideLPH == "rot1") {
    eaLPH = Number(((1100 - 5 * leftMotorPos) / 4).toFixed(2));
    document.getElementById("lR").innerHTML = `${eaLPH} LPH`;
  } else if (sideLPH == "rot2") {
    shLPH = Number(((1100 - 5 * rightMotorPos) / 4).toFixed(2));

    document.getElementById("rR").innerHTML = `${shLPH} LPH`;
	
  }
  
  let totalLPH=((200-eaLPH)+(200-shLPH))/200;
  document.getElementById("rain").style.height="89px";
  document.getElementById("rain").style.animation=`rainfall ${totalLPH}s linear infinite`;
  
	if(eaLPH === 0 && shLPH === 0)
	{
		document.getElementById("rain").style.height="0";
		document.getElementsByClassName("tank")[0].style.backgroundImage = "url('./Images/w3.png')";
	}
	else
	{
		document.getElementsByClassName("tank")[0].style.backgroundImage =" url('./Images/w2.png')";
	}
	document.getElementById("condDiv").style.visibility="visible";
	if(eaLPH && shLPH) 
	{		
		document.getElementById("addReading").disabled=false;
		conductivity=actCond.toFixed(2);
		document.getElementById("condVal").innerHTML=conductivity; 
	}
	else 
	{	
		document.getElementById("addReading").disabled=true;
		document.getElementById("condVal").innerHTML="NaN";
	}
	document.getElementById("addReading").onclick=function(){addReadingsToTable(eaLPH,shLPH,conductivity)};
	
	displayMsg();

}

function displayMsg()
{
	if((naohSetFirst === true || shLPH > eaLPH) || (eaLPH === 0 && shLPH === 0)) 
	{
		document.getElementById("msg").style.visibility="hidden";
	}
	else if(naohSetFirst === false || shLPH < eaLPH) document.getElementById("msg").style.visibility="visible";
	
}

function highlight()
{
	if(document.getElementById("highlight").style.visibility=="hidden") document.getElementById("highlight").style.visibility="visible";
	else document.getElementById("highlight").style.visibility="hidden";
}
let stophighlight=0;
function addReadingsToTable(eaLPH,shLPH,conductivity)
{
	stophighlight=setInterval(function(){highlight()},300);
	setTimeout(function()
	{
		clearInterval(stophighlight);
	},1400);
	$("#observTable").delay(900)
    .queue(function (generate_table) 
	{
        $(this).append("<tr style='text-align:center;'><td>" + eaLPH + "</td><td>"+shLPH+"</td><td>"+conductivity+"</td></tr>");
		generate_table(); 
    });
}	