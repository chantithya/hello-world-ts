"use strict";
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
console.log('status code', StatusCodes.NotFound);
console.log('status code', StatusCodes.Success);
var CardinalDirections_;
(function (CardinalDirections_) {
    CardinalDirections_["North"] = "North";
    CardinalDirections_["East"] = "East";
    CardinalDirections_["South"] = "South";
    CardinalDirections_["West"] = "West";
})(CardinalDirections_ || (CardinalDirections_ = {}));
;
console.log('CardinalDirections_', CardinalDirections_.North);
console.log('CardinalDirections_', CardinalDirections_.West);
let ourTuple;
ourTuple = [5, false, 'Coding God was here'];
console.log('ourTuple:', ourTuple);
let ourTuple_;
ourTuple_ = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple_);
const graph = [55.2, 41.3];
const graph_ = [55.2, 41.3];
const [x, y] = graph;
//# sourceMappingURL=index.js.map