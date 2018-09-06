export class Owner {
  Id: number;
  OwnerName: string;
  TeamName: string;
  Record: string;
  Ranking: number;
  Ppg: number;
  TotalPoints: number;
  Ypg: number;
  YardsTotal: number;
  PointsAllowed: number;
  PointsAllowedPG: number;
  NextOpponent: string;
  
  constructor(inId: number = 0, inOwnerName: string = '', inTeamName: string = '', inRecord: string = '',
              inRanking: number = 0, inPpg: number = 0.0, inTotalPoints: number = 0.0, inYpg: number = 0.0,
              inYardsTotal: number = 0, inPointsAllowed: number = 0.0, inPointsAllowedPG: number = 0.0, inNextOpponent: string = '') {
    this.Id = inId;
    this.OwnerName = inOwnerName;
    this.TeamName = inTeamName;
    this.Record = inRecord;
    this.Ranking = inRanking;
    this.Ppg = inPpg;
    this.TotalPoints = inTotalPoints;
    this.Ypg = inYpg;
    this.YardsTotal = inYardsTotal;
    this.PointsAllowed = inPointsAllowed;
    this.PointsAllowedPG = inPointsAllowedPG;
    this.NextOpponent = inNextOpponent;
  }
  
  about(): string {
    return "OwnerName = " +this.OwnerName+", TeamName = " +this.TeamName;
  }
  
}
