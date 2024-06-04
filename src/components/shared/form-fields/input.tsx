/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { Control, Controller, FieldValues, Path, useFormState, useWatch } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  control: Control<T>;
}

const InputField = <T extends FieldValues>({ label, name, required, control, ...props }: InputProps<T>) => {
  const { errors } = useFormState({ control });
  const values = useWatch({ control });

  return (
    <div className="">
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => {
          const controlledField = { ...field, value: values[name] || '' };
          return <input {...props} {...controlledField} className="text-slate-800" />;
        }}
      />
      {errors && errors[name] && <p className="text-error">{String(errors[name]?.message)}</p>}
    </div>
  );
};

export default InputField;
