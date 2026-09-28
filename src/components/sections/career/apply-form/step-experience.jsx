import { useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { inputStyle } from "./form-constants";

const EXPERIENCE_TYPES = [
  { key: "teaching", label: "Teaching" },
  { key: "research", label: "Research" },
  { key: "postPhd", label: "Post PhD" },
];

export default function StepExperience({ formData, setFormData }) {
  const update = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const updateExperience = (type, field, value) =>
    setFormData((prev) => ({
      ...prev,
      experience: {
        ...prev.experience,
        [type]: { ...prev.experience?.[type], [field]: value },
      },
    }));

  const updatePublication = (field, value) =>
    setFormData((prev) => ({
      ...prev,
      publications: { ...prev.publications, [field]: value },
    }));

  const totalExperience = useMemo(() => {
    const totalMonths = EXPERIENCE_TYPES.reduce((sum, { key }) => {
      const years = Number(formData.experience?.[key]?.years) || 0;
      const months = Number(formData.experience?.[key]?.months) || 0;
      return sum + years * 12 + months;
    }, 0);
    if (!totalMonths) return "";
    return `${Math.floor(totalMonths / 12)} yrs ${totalMonths % 12} mos`;
  }, [formData.experience]);

  return (
    <div>
      <h3 className="text-xl xl:text-2xl font-bold text-[#212121] dark:text-white mb-6.25 xl:mb-7.5">
        Experience Details & Publications
      </h3>

      <div className="grid sm:grid-cols-3 gap-5 xl:gap-6.25 mb-6.25 xl:mb-7.5">
        <div>
          <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
            CURRENT DESIGNATION
          </Label>
          <Input
            placeholder="Eg. Assistant Professor"
            className={inputStyle}
            value={formData.currentDesignation || ""}
            onChange={(e) => update("currentDesignation", e.target.value)}
          />
        </div>
        <div>
          <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
            CURRENT SALARY
          </Label>
          <Input
            placeholder="Eg., 50000"
            className={inputStyle}
            value={formData.currentSalary || ""}
            onChange={(e) => update("currentSalary", e.target.value)}
          />
        </div>
        <div>
          <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
            CURRENT LOCATION
          </Label>
          <Input
            placeholder="Eg., Bengaluru"
            className={inputStyle}
            value={formData.currentLocation || ""}
            onChange={(e) => update("currentLocation", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 xl:gap-6.25 mb-6.25 xl:mb-7.5">
        {EXPERIENCE_TYPES.map((type) => {
          const values = formData.experience?.[type.key] || {};
          return (
            <div key={type.key}>
              <h4 className="text-base xl:text-lg font-bold text-[#212121] dark:text-white mb-2.5 xl:mb-3.75">
                {type.label}
              </h4>
              <div className="grid sm:grid-cols-2 gap-5 xl:gap-6.25">
                <div>
                  <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
                    YEARS
                  </Label>
                  <Input
                    type="number"
                    min="0"
                    placeholder="Eg., 2"
                    className={inputStyle}
                    value={values.years || ""}
                    onChange={(e) => updateExperience(type.key, "years", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
                    MONTHS
                  </Label>
                  <Input
                    type="number"
                    min="0"
                    max="11"
                    placeholder="Eg., 0"
                    className={inputStyle}
                    value={values.months || ""}
                    onChange={(e) => updateExperience(type.key, "months", e.target.value)}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
            TOTAL EXPERIENCE (AUTO-CALCULATED)
          </Label>
          <Input readOnly disabled placeholder="will be calculated" className={inputStyle} value={totalExperience} />
        </div>
      </div>

      <div className="pt-6.25 xl:pt-7.5 border-t border-black/10">
        <h4 className="text-base xl:text-lg font-bold text-[#212121] dark:text-white mb-3.75 xl:mb-5">
          Publications
        </h4>
        <div className="grid sm:grid-cols-2 gap-5 xl:gap-6.25 mb-5 xl:mb-6.25">
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              JOURNALS
            </Label>
            <Input
              type="number"
              min="0"
              placeholder="Eg., 1"
              className={inputStyle}
              value={formData.publications?.journals || ""}
              onChange={(e) => updatePublication("journals", e.target.value)}
            />
          </div>
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              CONFERENCES
            </Label>
            <Input
              type="number"
              min="0"
              placeholder="Eg., 0"
              className={inputStyle}
              value={formData.publications?.conferences || ""}
              onChange={(e) => updatePublication("conferences", e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
            PATENTS
          </Label>
          <Input
            type="number"
            min="0"
            placeholder="Eg., 1"
            className={inputStyle}
            value={formData.publications?.patents || ""}
            onChange={(e) => updatePublication("patents", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
