import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

// Generic card grid for the school Departments and Faculty tabs.
export function SchoolDepartments({ slug, departments = [] }) {
  if (!departments.length) return null;
  return (
    <section className="container py-[40px] md:py-[60px]">
      <div className="cmn_Title mb-[25px]">Departments</div>
      <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((d) => (
          <Link
            key={d.id}
            href={`/schools/${slug}/departments/${d.slug}`}
            className="rounded-[15px] border border-[#F3DFD2] bg-white p-[20px] transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-[#1a1a1a]"
          >
            <div className="font-bold">{d.name}</div>
            {d.programmes?.length > 0 && (
              <p className="mt-[8px] text-[#4A5565] dark:text-white/80">
                {d.programmes.length} programme{d.programmes.length > 1 ? "s" : ""}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
