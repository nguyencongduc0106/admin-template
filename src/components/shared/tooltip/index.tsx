import { ReactNode } from 'react';

interface ITooltip {
  children: ReactNode;
  content: string;
}

const Tooltip = ({ children, content }: ITooltip) => {
  return (
    <div className="group relative w-fit cursor-pointer">
      {children}
      <div
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
        }}
        className="-z-20 -translate-x-1/2 rounded bg-[#262626] opacity-0 transition duration-300 group-hover:z-20 group-hover:opacity-100"
      >
        <div className="whitespace-nowrap px-3 py-1.5 text-xs text-white">{content}</div>
        <div
          style={{
            borderTop: '8px solid #262626',
            borderRight: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '8px solid transparent',
          }}
          className="absolute left-1/2 top-[calc(100%-2px)] -translate-x-1/2"
        ></div>
      </div>
    </div>
  );
};

export default Tooltip;
