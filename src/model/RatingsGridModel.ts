export class RatingsGridModel {
  public alertsOn: string;
  public approved: boolean;
  public approvedBy: string;
  public approvedOn: string;
  public comments: string;
  public containsRiskCell: string;
  public counterPartyName: string;
  public currency: string;
  public date: string;
  public ewsType: string;
  public groupName: string;
  public groupRctId: string;
  public id: number;
  public isin: number;
  public miscellaneous: string;
  public name: string;
  public newLevel: number;
  public newLevelAsOf: string;
  public notificationSent: string;
  public pcru: string;
  public previousLevel: number;
  public previousLevelAsOf: string;
  public rctId: string;
  public riskCell: string;
  public supplimentaryInfo: {
    country: string;
    exchange: string;
    tickerCode: string;
  };
  public type: string;
  public variationPercentage: number;
  public validate: string;
  public permission: string;
  public manualAction: any;
}
