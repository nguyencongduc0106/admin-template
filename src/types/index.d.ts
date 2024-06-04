export type TSidebarItem = {
  title: string;
  icon: string;
  link: string;
  subItems?: TSidebarItem[];
};

export type TFormFieldOption = {
  label: string | ReactNode;
  value: string | number;
};
