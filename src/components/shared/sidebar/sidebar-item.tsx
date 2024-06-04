import { useId, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@src/hooks/appHook';
import { setActiveSub } from '@src/store/reducers/sidebar.reducer';
import { TSidebarItem } from '@src/types';

type Props = {
  item: TSidebarItem;
};

const ListSubItem = ({ items, subItemClass }: { items: TSidebarItem[]; subItemClass: string }) => {
  const navigate = useNavigate();

  return (
    <div onClick={(e) => e.stopPropagation()} className="space-y-3">
      {items.map((item) => (
        <div key={item.title} onClick={() => navigate(item.link)} className={`text-sm ${subItemClass}`}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

const SidebarItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { activeSub, isExpand } = useAppSelector((state) => state.sidebar);

  const { title, subItems } = item;
  const hasSubItems = subItems && subItems.length > 0;
  const isOpenSub = useMemo(() => activeSub == title, [activeSub]);

  const parentId = useId().replace(/:/g, '');
  const calcSubHeight = () => {
    const children = document.querySelectorAll(`.${parentId}`);
    let height = (children.length - 1) * 12; // 12 is gap between sub-items
    children.forEach((child) => (height += (child as HTMLDivElement).offsetHeight));
    return height;
  };

  return (
    <div
      onClick={() => {
        if (!hasSubItems || !isExpand) {
          navigate(item.link);
        } else dispatch(setActiveSub(!isOpenSub ? title : ''));
      }}
      className="group relative"
    >
      <div className="relative z-10 truncate rounded bg-slate-300 p-2">{title}</div>
      {/* Sub-item List for full sidebar */}
      {hasSubItems && isExpand && (
        <div
          style={{
            height: isOpenSub ? calcSubHeight() : 0,
          }}
          className="overflow-hidden bg-blue-300 pl-4 duration-300"
        >
          <ListSubItem items={subItems} subItemClass={parentId} />
        </div>
      )}

      {/* Sub-item List for minimize sidebar */}
      {!isExpand && (
        <div
          className={`absolute flex ${hasSubItems ? 'top-0' : 'top-1/2 -translate-y-1/2'} invisible left-0 -z-30 w-[max-content] opacity-0 duration-300 group-hover:visible group-hover:left-full group-hover:opacity-100`}
        >
          <div className="ml-2"></div>
          <div className="bg-blue-300">
            <div className="">{title}</div>
            {hasSubItems && <ListSubItem items={subItems} subItemClass={parentId} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
