import { Owner } from './owner';
import { Team } from './team';

export class Player {
  Id: number;
  Owner: Owner;
  Team: Team;
  FirstName: string;
  LastName: string;
  Position: string;
  Ppg: number;
  PointsTotal: number;
  Carries: number;
  CarriesPG: number;
  Catches: number;
  CatchesPG: number;
  Ypg: number;
  YardsTotal: number;
  Touchdowns: number;
  
  constructor(inId: number = 0, own: Owner = null, inTeam: Team = null, fName: string = '', lName: string = '', pos: string = '', inPpg: number = 0.0, ptsTotal: number = 0.0, carr: number = 0, carrPG: number = 0.0, inCatches: number = 0, catchPG: number = 0.0, inYpg: number = 0.0, ydsTotal: number = 0, tds: number = 0) {
    this.Id = inId;
    this.Owner = own;
    this.Team = inTeam;
    this.FirstName = fName;
    this.LastName = lName;
    this.Position = pos;
    this.Ppg = inPpg;
    this.PointsTotal = ptsTotal;
    this.Carries = carr;
    this.CarriesPG = carrPG;
    this.Catches = inCatches;
    this.CatchesPG = catchPG;
    this.Ypg = inYpg;
    this.YardsTotal = ydsTotal;
    this.Touchdowns = tds;
    
  }
  
}
