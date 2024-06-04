import { useAppDispatch } from '@src/hooks/appHook';
import { setIsHide } from '@src/store/reducers/sidebar.reducer';

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-gray-400">
      Header
      <button onClick={() => dispatch(setIsHide(false))} className="md:hidden">
        Show Sidebar
      </button>
    </div>
  );
};

export default Header;
