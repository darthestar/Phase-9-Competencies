var gameInfo = function() {
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ];
};

var teams = [];
createTeamNames = function(games){

  var teamNames = [];

  for(team = 0; team < games.length; team++){
    if(teamNames.indexOf((games[team].home_team)) == -1){
        var teamName = games[team].home_team;
        teamNames.push(teamName);
        initializeTeams(teams, teamName);
    }
    if(teamNames.indexOf((games[team].away_team)) == -1){
      var teamName = games[team].away_team;
      teamNames.push(teamName);
      initializeTeams(teams, teamName);
    }
  }
};
function initializeTeams(teams, teamName){
  teams.push({
    name:  teamName,
    wins:  0,
    losses:  0,
    ranks:  0,
  });
 }

 setWinsLosses =function(games, teams){


  for(team = 0; team < games.length; team++){

    if((games[team].home_score) > (games[team].away_score)){

 var teamWinner = teams.filter(function (teami){return teami.name === games[team].home_team;});
    teamWinner[0]['wins'] += 1;
  var teamWinner = teams.filter(function (teami){return teami.name === games[team].away_team;});
  teamWinner[0]['losses'] += 1;
    }
    if ((games[team].home_score) < (games[team].away_score)){
      var teamWinner = teams.filter(function (teami){return teami.name === games[team].away_team;});
    teamWinner[0]['wins'] += 1;
    var teamWinner = teams.filter(function (teami){return teami.name === games[team].home_team;});
  teamWinner[0]['losses'] += 1;
                }
 }
   console.log(teams);
 };


 var sortedTeams = teams.sort(function(a, b){
  return ((b.wins-b.losses) - (a.wins-a.losses));
});

var rank = function(teams){
  for (var i = 0; i < teams.length; i++) {
    teams[i].rank = i+1;
  }
};


createTeamNames(gameInfo());
setWinsLosses(gameInfo(), teams);

console.log("--------------------------------------------------");
console.log("| Name      Rank      Total Wins    Total Losses |");
sortedTeams.forEach(function(team, index) {
  var spaces = Array(11 - team.name.length).join(" ");
  console.log("| " + team.name + spaces + team.rank + "         " + team.wins + "             " + team.losses + "    |");
});
console.log("--------------------------------------------------");
