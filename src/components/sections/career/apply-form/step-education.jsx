import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { inputStyle } from "./form-constants";

const LEVELS = [
  { key: "puc", label: "PUC / 10+2 / Diploma" },
  { key: "ug", label: "UG" },
  { key: "pg", label: "PG" },
  { key: "phd", label: "Ph.D" },
];

export default function StepEducation({ formData, setFormData }) {
  const update = (level, field, value) =>
    setFormData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [level]: { ...prev.education?.[level], [field]: value },
      },
    }));

  return (
    <div>
      <h3 className="text-xl xl:text-2xl font-bold text-[#212121] dark:text-white mb-6.25 xl:mb-7.5">
        Educational Qualification Details
      </h3>

      <div className="flex flex-col gap-6.25 xl:gap-7.5">
        {LEVELS.map((level) => {
          const values = formData.education?.[level.key] || {};
          return (
            <div key={level.key} className="pb-6.25 xl:pb-7.5 not-last:border-b border-black/10">
              <h4 className="text-base xl:text-lg font-bold text-[#212121] dark:text-white mb-3.75 xl:mb-5">
                {level.label}
              </h4>
              <div className="grid sm:grid-cols-3 gap-5 xl:gap-6.25 mb-5 xl:mb-6.25">
                <div>
                  <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
                    DEGREE NAME *
                  </Label>
                  <Input
                    required
                    placeholder="Eg. PUC/Diploma"
                    className={inputStyle}
                    value={values.degreeName || ""}
                    onChange={(e) => update(level.key, "degreeName", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
                    SPECIALIZATION
                  </Label>
                  <Input
                    placeholder="Eg., Science /Commerce"
                    className={inputStyle}
                    value={values.specialization || ""}
                    onChange={(e) => update(level.key, "specialization", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
                    YEAR OF PASSING
                  </Label>
                  <Input
                    type="number"
                    placeholder="Eg., 2010"
                    className={inputStyle}
                    value={values.yearOfPassing || ""}
                    onChange={(e) => update(level.key, "yearOfPassing", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 xl:gap-6.25">
                <div>
                  <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
                    % OBTAINED
                  </Label>
                  <Input
                    placeholder="Eg., 78.5"
                    className={inputStyle}
                    value={values.percentage || ""}
                    onChange={(e) => update(level.key, "percentage", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
                    UNIVERSITY/BOARD
                  </Label>
                  <Input
                    placeholder="Eg., state board/University"
                    className={inputStyle}
                    value={values.universityBoard || ""}
                    onChange={(e) => update(level.key, "universityBoard", e.target.value)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
