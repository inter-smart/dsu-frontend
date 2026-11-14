"use client";

import { createContext, useContext } from "react";

// Tabs the CMS enables for the current school (see the API's `tabs`); null outside a school route.
const SchoolTabsContext = createContext(null);

export const useSchoolTabs = () => useContext(SchoolTabsContext);

export default function SchoolTabsProvider({ tabs, children }) {
  return <SchoolTabsContext.Provider value={tabs}>{children}</SchoolTabsContext.Provider>;
}
