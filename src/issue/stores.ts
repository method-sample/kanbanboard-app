import { createStore } from "@methodjs/store";

export type IssueState = "Todo" | "InProgress" | "Done";

export interface Issue {
  id: number;
  title: string;
  created: Date;
  state: IssueState;
}

export function initializeIssue(): Issue[] {
  return [];
}

export const [useIssue, setIssue, getIssue] =
  createStore<Issue[]>(initializeIssue);

export function initializeNewIssue(): Issue {
  return {
    id: Date.now(),
    title: "",
    created: new Date(),
    state: "Todo",
  };
}

export const [useNewIssue, setNewIssue, getNewIssue] =
  createStore<Issue>(initializeNewIssue);
