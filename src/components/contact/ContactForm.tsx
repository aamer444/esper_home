import { useForm } from "react-hook-form";
import type { ContactFormData } from "../../types";
import Button from "../common/PrimaryButton";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<ContactFormData>();

  const inputClass =
    "w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-esper-navy outline-none transition focus:border-esper-blue focus:ring-2 focus:ring-esper-blue/20";

  const labelClass = "mb-1.5 block text-xs font-semibold text-esper-navy sm:text-sm";

  return (
    <form onSubmit={(event) => event.preventDefault()} className="space-y-4 sm:space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-esper-red">*</span>
          </label>
          <input
            id="fullName"
            className={inputClass}
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-esper-red">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="companyName" className={labelClass}>
            Company Name
          </label>
          <input id="companyName" className={inputClass} {...register("companyName")} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-esper-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-esper-red">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile Number <span className="text-esper-red">*</span>
          </label>
          <input
            id="mobile"
            type="tel"
            className={inputClass}
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9+\-\s]{10,15}$/,
                message: "Enter a valid mobile number",
              },
            })}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs text-esper-red">{errors.mobile.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className={labelClass}>
            City <span className="text-esper-red">*</span>
          </label>
          <input
            id="city"
            className={inputClass}
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <p className="mt-1 text-xs text-esper-red">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="state" className={labelClass}>
            State <span className="text-esper-red">*</span>
          </label>
          <input
            id="state"
            className={inputClass}
            {...register("state", { required: "State is required" })}
          />
          {errors.state && (
            <p className="mt-1 text-xs text-esper-red">{errors.state.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="vehicleModel" className={labelClass}>
            Vehicle / Machine Model
          </label>
          <input id="vehicleModel" className={inputClass} {...register("vehicleModel")} />
        </div>

        <div>
          <label htmlFor="radiatorType" className={labelClass}>
            Radiator Type
          </label>
          <input id="radiatorType" className={inputClass} {...register("radiatorType")} />
        </div>
      </div>

      <div>
        <label htmlFor="issueDescription" className={labelClass}>
          Issue Description <span className="text-esper-red">*</span>
        </label>
        <textarea
          id="issueDescription"
          rows={3}
          className={inputClass}
          {...register("issueDescription", {
            required: "Please describe your inquiry",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters",
            },
          })}
        />
        {errors.issueDescription && (
          <p className="mt-1 text-xs text-esper-red">
            {errors.issueDescription.message}
          </p>
        )}
      </div>

      <fieldset>
        <legend className={labelClass}>
          Preferred Contact Method <span className="text-esper-red">*</span>
        </legend>
        <div className="flex flex-wrap gap-4">
          {(["phone", "email", "whatsapp"] as const).map((method) => (
            <label key={method} className="flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
              <input
                type="radio"
                value={method}
                className="accent-esper-blue"
                {...register("contactMethod", {
                  required: "Select a contact method",
                })}
              />
              <span className="capitalize">{method}</span>
            </label>
          ))}
        </div>
        {errors.contactMethod && (
          <p className="mt-1 text-xs text-esper-red">
            {errors.contactMethod.message}
          </p>
        )}
      </fieldset>

      <div>
        <label htmlFor="attachment" className={labelClass}>
          Attachment (Optional)
        </label>
        <input
          id="attachment"
          type="file"
          className="w-full text-xs text-gray-600 file:mr-3 file:rounded-md file:border-0 file:bg-esper-gray file:px-3 file:py-2 file:text-xs file:font-semibold file:text-esper-navy hover:file:bg-gray-200 sm:text-sm"
        />
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-600 sm:text-sm">
          <input
            type="checkbox"
            className="mt-1 accent-esper-blue"
            {...register("consent", {
              required: "You must agree to be contacted",
            })}
          />
          I agree to be contacted by Esper regarding my inquiry. My data will be
          handled per the{" "}
          <a href="/privacy" className="text-esper-blue underline">
            Privacy Policy
          </a>
          .
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-esper-red">{errors.consent.message}</p>
        )}
      </div>

      <Button type="submit" disabled showArrow={false} className="w-full py-3 text-xs sm:w-auto">
        Submit Inquiry
      </Button>

      <p className="text-xs text-gray-500" role="status">
        Online inquiry submissions are temporarily unavailable. Please call or email our team for assistance.
      </p>
    </form>
  );
};

export default ContactForm;
