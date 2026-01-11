import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface FormFieldOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: FormFieldOption[];
  cols?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const FormField = ({
  name,
  label,
  type = "text",
  placeholder = "",
  required = false,
  as = "input",
  options = [],
  cols = 1,
  value,
  onChange
}: FormFieldProps) => (
  <motion.div variants={itemVariants} className={`col-span-${cols}`}>
    <Label htmlFor={name}>{label}{required && " *"}</Label>
    {as === "input" ? (
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1"
      />
    ) : as === "textarea" ? (
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        rows={5}
        className="mt-1"
      />
    ) : (
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    )}
  </motion.div>
);

export default FormField;