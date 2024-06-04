interface Props {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  small?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  // icon?: any;
}

const MainButton = (props: Props) => {
  const { title, outline, type, onClick, className, small, disabled } = props;

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`duration-150 active:scale-95
        ${disabled ? 'opacity-50 ' : 'hover:opacity-75 '} 
        ${outline ? 'bg-white text-primary' : 'bg-primary text-white'} 
        ${small ? 'px-4 py-3 font-medium' : 'px-4 py-3 font-semibold md:px-8'}
        ${className}
        flex min-h-[44px] items-center justify-center gap-[10px] whitespace-nowrap rounded border border-primary text-[14px] leading-5`}
    >
      {/* {icon && <img src={icon} alt="icon" width={20} />} */}
      {title}
    </button>
  );
};

export default MainButton;
