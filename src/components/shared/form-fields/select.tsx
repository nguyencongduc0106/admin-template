/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { ReactNode, useEffect, useState } from 'react';
import { Control, Controller, FieldValues, Path, useFormState, useWatch } from 'react-hook-form';
import useClickOutside from '@src/hooks/useClickOutside';
import { TFormFieldOption } from '@src/types';
import { AnimatePresence, motion } from 'framer-motion';

interface SelectProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  placeholder?: string;
  options: TFormFieldOption[];
  required?: boolean;
  disabled?: boolean;
  control: Control<T>;
  onChange?: (opt: TFormFieldOption) => void;
}

const SelectField = <T extends FieldValues>({
  label,
  name,
  control,
  options,
  required,
  placeholder,
  onChange,
  // disabled,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { nodeRef } = useClickOutside(() => setIsOpen(false));
  const [selectedLabel, setSelectedLabel] = useState<string | ReactNode>('');
  const { errors } = useFormState({ control });
  const value = useWatch({ control })[name];

  useEffect(() => {
    if (value) {
      const option = options.find((option) => option.value == value);
      if (option) setSelectedLabel(option.label);
    }
  }, [value]);

  return (
    <div className="">
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <div ref={nodeRef} className="relative" onClick={() => setIsOpen(!isOpen)}>
            <div className="h-6 w-full bg-white text-gray-700">{selectedLabel || placeholder}</div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: '-30%' }}
                  animate={{ opacity: 1, y: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute top-[calc(100%+4px)] z-10 bg-gray-600 text-white`}
                >
                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        field.onChange(option.value);
                        setSelectedLabel(option.label);
                        setIsOpen(false);
                        onChange && onChange(option);
                      }}
                      className=""
                    >
                      {option.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      />
      {errors && errors[name] && <p className="text-error">{String(errors[name]?.message)}</p>}
    </div>
  );
};

export default SelectField;
