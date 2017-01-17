

 function launchpad(ship){
  var array = [];
  array[0] = "Let's take a ride to the Moon!";
  array[1] = "Do preflight check!";
  array[2] = "Don't forget the Doritos!";
  array[3] = ship.name + " is the name of this ship!";
  var count = 0;
  var intervalID = setInterval(function(){
    console.log(array[count]);
    count++;
    if(count > array.length){
      var trainedCrew = trainCrew(arrayCrew);
      ship.loadCrew(trainedCrew);
      ship.captain(arrayCrew);
      ship.mountPropulsion(rocket);
      ship.fire(rocket.addFuel(10));
      ship.takeoff(ship.fire);
      clearInterval(intervalID);
    }
  }, 1000);
}



 function Ship(name){
   this.name = name;
   this.crew = [];
   this.captainOfDay = [];
   this.propulsion = null;
   this.rocket = null;
 }

Ship.prototype.loadCrew = function(crewMembers){
  crewMembers.forEach(function(member){
    this.crew.push(member);
    console.log("Crew Member:" + member.name + " " + "is boarding the ship!");
  }.bind(this));
};

Ship.prototype.captain = function(crewMember){
  crewMember.forEach(function(member){
    this.captainOfDay.push(member);
  }.bind(this));
    var number = this.captainOfDay.length;
    var random_number = Math.floor(Math.random() * number);
    console.log("Today's captain is:" + this.captainOfDay[random_number]);
};

Ship.prototype.mountPropulsion = function(object){
  this.propulsion = object;
console.log("Propulsion mounted!");
};

Ship.prototype.takeoff = function(){
  var canTakeoff = this.rocket;
    if (canTakeoff === true){
      console.log ("Whoooooosh!");
    }else if(canTakeoff === false){
      console.log("Engines failed to fire, takeoff unsuccessful!");
    }
};

Ship.prototype.fire = function(fuel){
  if (fuel > 0){
    var fuelRemaining = (fuel - 1);
    console.log("Engines have been fired!" + "remaining fuel:" + fuelRemaining);
    this.rocket = true;
  }else if (fuel < 0){
    console.log("Engines failed, no rocket fuel");
    this.rocket = false;
  }
};

var rocket = {
  fuel: 0,
  addFuel: function(integer){
    console.log("Ship has been filled with:" + (integer + rocket.fuel));
    return rocket.fuel + integer;
  }
};



 function CrewMember(name, trained){
   this.name = name;
   this.trained = false;
 }

var arrayCrew = [
  "Spock",
  "Darth",
  "Ewok",
  "Hans"
];

function trainCrew(array){

return array.map(function(name){
  return new CrewMember(name, true);
});
}

 var ourShip = new Ship('StarFighter');
 launchpad(ourShip);
