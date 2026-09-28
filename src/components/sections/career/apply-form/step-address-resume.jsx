import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function StepAddressResume({ formData, setFormData }) {
  const update = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div>
      <h3 className="text-xl xl:text-2xl font-bold text-[#212121] dark:text-white mb-6.25 xl:mb-7.5">
        Communication & Resume
      </h3>

      <div className="mb-6.25 xl:mb-7.5">
        <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
          ADDRESS FOR COMMUNICATION *
        </Label>
        <Textarea
          required
          rows={4}
          placeholder="Eg. 123, MG Road Bengaluru"
          className="rounded-[3px] 2xl:rounded-[4px]"
          value={formData.address || ""}
          onChange={(e) => update("address", e.target.value)}
        />
      </div>

      <div>
        <h4 className="text-base xl:text-lg font-bold text-[#212121] dark:text-white mb-3.75 xl:mb-5">
          Resume
        </h4>
        <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
          UPLOAD RESUME (PDF/DOC/DOCX, MAX 10MB) *
        </Label>
        <div className="h-10 xl:h-11 2xl:h-12 w-full max-w-[420px] border border-[#E5E7EB] dark:border-[#333] rounded-[3px] 2xl:rounded-[4px] bg-white dark:bg-[#1f1f1f] overflow-hidden">
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            className="w-full h-full text-xs xl:text-sm text-[#212121] dark:text-[#F9FAFB] file:h-full file:mr-3 file:px-3.75 file:border-0 file:border-r file:border-[#E5E7EB] dark:file:border-[#333] file:bg-[#F9FAFB] dark:file:bg-[#2a2a2a] file:text-xs xl:file:text-sm file:font-medium file:text-[#212121] dark:file:text-white"
            onChange={(e) => update("resume", e.target.files?.[0]?.name || "")}
          />
        </div>
      </div>
    </div>
  );
}
