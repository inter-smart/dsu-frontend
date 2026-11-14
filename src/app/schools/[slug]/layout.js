import SchoolTabsProvider from "@/components/sections/academics/SchoolTabsContext";
import { getSchoolBySlug } from "@/lib/api";

// Loads the school's enabled tabs once for the menu bar on every page of the school.
export default async function SchoolLayout({ params, children }) {
  const { slug } = await params;
  const school = await getSchoolBySlug(slug);
  return <SchoolTabsProvider tabs={Array.isArray(school?.tabs) ? school.tabs : null}>{children}</SchoolTabsProvider>;
}
