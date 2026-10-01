import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PhoneInput, COUNTRIES } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { inputStyle, DEPARTMENTS, POSITIONS, DESIGNATIONS } from "./form-constants";

export default function StepPersonal({ formData, setFormData }) {
  const update = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div>
      <h3 className="text-xl xl:text-2xl font-bold text-[#212121] dark:text-white mb-1.5">
        Personal Information
      </h3>
      <p className="text-sm xl:text-base text-[#4A5565] dark:text-gray-300 mb-6.25 xl:mb-7.5">
        Please fill all mandatory fields. DOB format: DD-MM-YYYY. Resume max: 10MB.
      </p>

      <div className="grid gap-5 xl:gap-6.25">
        <div>
          <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
            NAME *
          </Label>
          <Input
            required
            placeholder="Enter Your Name"
            className={inputStyle}
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-5 xl:gap-6.25">
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              PHONE *
            </Label>
            <PhoneInput
              required
              placeholder="000 000 0000"
              value={formData.phone}
              selectedCountry={formData.country || COUNTRIES[0]}
              className={`${inputStyle} [&>button]:bg-transparent`}
              onCountryChange={(country) => update("country", country)}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              EMAIL ID *
            </Label>
            <Input
              type="email"
              required
              placeholder="Enter Your Email ID"
              className={inputStyle}
              value={formData.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              DATE OF BIRTH (DD-MM-YYYY) *
            </Label>
            <Input
              required
              placeholder="DD-MM-YYYY"
              className={inputStyle}
              value={formData.dob}
              onChange={(e) => update("dob", e.target.value)}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 xl:gap-6.25">
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              DEPARTMENT *
            </Label>
            <Select value={formData.department} onValueChange={(val) => update("department", val)}>
              <SelectTrigger className={inputStyle}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              POSITION YOU ARE APPLYING FOR? *
            </Label>
            <Select value={formData.position} onValueChange={(val) => update("position", val)}>
              <SelectTrigger className={inputStyle}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {POSITIONS.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
              DESIGNATION APPLYING FOR? *
            </Label>
            <Select value={formData.designation} onValueChange={(val) => update("designation", val)}>
              <SelectTrigger className={inputStyle}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {DESIGNATIONS.map((designation) => (
                  <SelectItem key={designation} value={designation}>
                    {designation}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-xs xl:text-sm font-medium text-[#212121] dark:text-gray-200 mb-1.5">
            DETAILS OF OUR ADVERTISEMENT (OPTIONAL)
          </Label>
          <Textarea
            placeholder="Eg : Advertisement Ref ABC123"
            className="rounded-[3px] 2xl:rounded-[4px]"
            value={formData.advertisement}
            onChange={(e) => update("advertisement", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
