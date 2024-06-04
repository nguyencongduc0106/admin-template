import { useEffect, useState } from 'react';
import { TFormFieldOption } from '@src/types';
import { motion } from 'framer-motion';

type SwitchProps = {
  tabs: TFormFieldOption[];
  defaultTab?: string | number;
  onChange?: ({ label, value }: TFormFieldOption) => void;
};

const SwitchTab = ({ tabs, onChange, defaultTab = tabs[0].value }: SwitchProps) => {
  const [selected, setSelected] = useState(defaultTab);
  useEffect(() => {
    if (defaultTab) setSelected(defaultTab);
  }, [defaultTab]);

  return (
    <div className="flex w-fit gap-3 rounded-md bg-slate-300 p-2 shadow-sm">
      {tabs.map((tab) => {
        const isSelected = selected == tab.value;
        return (
          <div
            key={tab.value}
            className={`${isSelected && 'text-white'} relative cursor-pointer px-2 py-1 duration-300`}
            onClick={() => {
              setSelected(tab.value);
              onChange && onChange(tab);
            }}
          >
            <span className="relative z-10">{tab.label}</span>
            {isSelected && (
              <motion.span
                layoutId="tab-bg"
                transition={{ type: 'tween', duration: 0.3 }}
                className="absolute inset-0 z-0 rounded-md bg-primary"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SwitchTab;
