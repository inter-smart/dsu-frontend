import Link from "next/link";
import { getSchools } from "@/lib/api";

export const metadata = { title: "Schools" };

export default async function Page() {
  const schools = await getSchools();
  const list = Array.isArray(schools) ? schools : [];

  return (
    <section className="container py-[40px] md:py-[60px]">
      <div className="cmn_Title mb-[25px]">Our Schools</div>
      {list.length === 0 ? (
        <p>Schools will be listed here soon.</p>
      ) : (
        <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {list.map((school) => (
            <Link
              key={school.id}
              href={`/schools/${school.slug}`}
              className="rounded-[15px] border border-[#F3DFD2] bg-white p-[20px] transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-[#1a1a1a]"
            >
              <div className="font-bold">{school.name}</div>
              {school.hasDepartments && school.departments?.length > 0 && (
                <p className="mt-[8px] text-[#4A5565] dark:text-white/80">
                  {school.departments.length} departments
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
