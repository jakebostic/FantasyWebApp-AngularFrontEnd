export class Team {
  Id: number;
  Location: string;
  TeamName: string;
  Division: string;
  Record: string;
  Ppg: number;
  PointsAllowedPG: number;
  
   constructor(inId: number = 0, inLocation: string = '',     inTeamName: string = '', inDivision: string = '', inRecord: string = '', inPpg: number = 0, inPointsAllowedPG: number = 0) {
    
     this.Id = inId;
     this.Location = inLocation;
     this.TeamName = inTeamName;
     this.Division = inDivision;
     this.Record = inRecord;
     this.Ppg = inPpg;
     this.PointsAllowedPG = inPointsAllowedPG;
  }
  
  about(): string {
    return "Location = " +this.Location+", TeamName = " +this.TeamName;
  }
}

