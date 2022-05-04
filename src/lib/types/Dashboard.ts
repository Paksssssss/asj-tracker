export enum TradeDirection {
  BUY = "buy",
  SELL = "sell",
}

export enum CalculatorType {
  PERCENTAGE = "PERCENTAGE",
  PIPS = "PIPS",
  GAINS = "GAINS",
}

export interface DashboardSummary {
  startingCapital: number;
  addedCapital: number;
  todayIncome?: number;
  accountValue?: number;
  totalIncome?: number;
}

export const DASHBOARD_SUMMARY = "DashboardSummary";

export const enum DashboardTabs {
  HOME = "home",
  PROJECTIONS = "projections",
  CALCULATORS = "calculators",
}
