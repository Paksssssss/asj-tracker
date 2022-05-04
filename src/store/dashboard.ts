import { DashboardSummary, DASHBOARD_SUMMARY } from "lib/types/Dashboard";
import { writable } from "svelte/store";

const initialDashboard: DashboardSummary = {
  startingCapital: 0,
  addedCapital: 0,
  todayIncome: 0,
  accountValue: 0,
  totalIncome: 0,
};

const createDashboardSummary = () => {
  const { set, subscribe, update } = writable(initialDashboard);

  return {
    set,
    subscribe,
    update,
    updateDashboard: (newValues: DashboardSummary) => {
      update((current) => {
        localStorage.setItem(
          DASHBOARD_SUMMARY,
          JSON.stringify({ ...current, ...newValues })
        );
        console.log(newValues);
        console.log({ ...current, ...newValues });
        return { ...current, ...newValues };
      });
    },
    initializeDashboard: () => {
      const storedDashSummary = localStorage.getItem(DASHBOARD_SUMMARY);
      if (storedDashSummary) {
        set(JSON.parse(storedDashSummary) as DashboardSummary);
      } else {
        console.log("No Stored dashboard values here");
      }
    },
  };
};

export const dashboardSummary = createDashboardSummary();
