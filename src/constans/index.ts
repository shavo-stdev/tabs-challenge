import { Tabs } from "./interfaces";

const baseUrl: string | boolean | undefined = import.meta.env.VITE_BASE_URL;
const apiKey: string | boolean | undefined = import.meta.env.VITE_API_KEY;

const tabs: Tabs = [
  {
    id: 1,
    label: "UK news",
  },
  {
    id: 2,
    label: "Football",
  },
  {
    id: 3,
    label: "Travel",
  },
];

export { baseUrl, apiKey, tabs };
