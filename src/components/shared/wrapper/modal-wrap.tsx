import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: string;
};

const ModalWrap = ({ isOpen = false, onClose, children, title = 'Modal Title' }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="no-scrollbar fixed inset-0 z-50 grid place-items-center overflow-y-scroll bg-blur backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-[92%] max-w-lg rounded-lg bg-slate-50 p-6 text-gray-700 shadow-xl"
          >
            <div className="">{title}</div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWrap;
