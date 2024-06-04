import { useEffect } from 'react';
import { LIST_ITEM } from '@src/constants/sidebar.constant';
import { useAppDispatch, useAppSelector } from '@src/hooks/appHook';
import { resetInitial, setActiveSub, setIsExpand, setIsHide } from '@src/store/reducers/sidebar.reducer';

import MainButton from '../button/main-button';

import SidebarItem from './sidebar-item';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { isExpand, isHide } = useAppSelector((state) => state.sidebar);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) dispatch(resetInitial());
    });
  }, []);

  return (
    <>
      <div
        onClick={() => dispatch(setIsHide(true))}
        className={`fixed ${!isHide && 'z-[15] max-md:inset-0 max-md:bg-blur max-md:backdrop-blur-sm'} duration-300`}
      />
      <div
        className={`bg-primary ${isExpand ? 'w-64' : 'w-24'} ${isHide && 'max-md:-translate-x-full'} inset-y-0 z-20 p-4 duration-300 max-md:absolute`}
      >
        <div className="">Sidebar</div>

        <div className="space-y-3">
          {LIST_ITEM.map((item) => (
            <SidebarItem key={item.title} item={item} />
          ))}
        </div>

        <MainButton
          onClick={() => {
            dispatch(setIsExpand(!isExpand));
            isExpand && dispatch(setActiveSub(''));
          }}
          title="Toggle"
          outline
        />
      </div>
    </>
  );
};

export default Sidebar;
