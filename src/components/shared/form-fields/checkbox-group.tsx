/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { Control, Controller, FieldValues, Path, useFormState } from 'react-hook-form';
import { TFormFieldOption } from '@src/types';

type CheckboxGroupProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  options: TFormFieldOption[];
  disabled?: boolean;
  control: Control<T>;
};

const CheckboxGroup = <T extends FieldValues>({ label, name, control, options, disabled }: CheckboxGroupProps<T>) => {
  const { errors } = useFormState({ control });

  return (
    <div className="">
      <div className="">{label}</div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          // const
          return (
            <div>
              {options.map((option) => (
                <label key={option.value}>
                  <input
                    disabled={disabled}
                    type="checkbox"
                    checked={(field.value || ([] as Array<string | number>)).includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        field.onChange([...(field.value || []), option.value]);
                      } else {
                        const newValue = field.value.filter((value: string) => option.value !== value);
                        field.onChange(newValue);
                      }
                    }}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          );
        }}
      />
      {errors && errors[name] && <p className="text-error">{String(errors[name]?.message)}</p>}
    </div>
  );
};

export default CheckboxGroup;
