var GRIDSIZE = 20;
var numberOfPaths = 0;

function getToEnd(actionData) {
  if (actionData.rmoves <= 0 && actionData.dmoves <= 0) {
    numberOfPaths++;
    return;
  }

  if ( actionData.action == 'right' ) {
    // Last move was a RIGHT action, we go down
    for(var i = 0; i < actionData.dmoves; i++) {
      getToEnd({
        dmoves: actionData.dmoves - (i+1),
        rmoves: actionData.rmoves,
        action: 'down'
      });
    }
  } else if( actionData.action == 'down' ) {
    // Last move was a DOWN action, we go right
    for(var i = 0; i < actionData.rmoves; i++) {
      getToEnd({
        dmoves: actionData.dmoves,
        rmoves: actionData.rmoves - (i+1),
        action: 'right'
      });
    }
  }
}

for(var i = 0; i < GRIDSIZE; i++) {
  // All the possibilities for going right
  getToEnd({
    dmoves: GRIDSIZE,
    rmoves: GRIDSIZE - (i+1),
    action: 'right'
  });
  // All the possibilities for going down
  getToEnd({
    dmoves: GRIDSIZE - (i+1),
    rmoves: GRIDSIZE,
    action: 'down'
  });
}

numberOfPaths
// Answer is 137846528820
