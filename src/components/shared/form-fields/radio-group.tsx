import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TFormFieldOption } from '@src/types';

type RadioGroupProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  options: TFormFieldOption[];
  disabled?: boolean;
  control: Control<T>;
};

const RadioGroup = <T extends FieldValues>({ label, name, control, options, disabled }: RadioGroupProps<T>) => {
  return (
    <div className="">
      <div className="">{label}</div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            {options.map((option) => (
              <label key={option.value}>
                <input
                  disabled={disabled}
                  type="radio"
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={() => field.onChange(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default RadioGroup;
