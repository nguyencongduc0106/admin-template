import { useEffect, useState } from 'react';
import MainButton from '@src/components/shared/button/main-button';
import SwitchTab from '@src/components/shared/switch-tab';
import Table, { genColumn } from '@src/components/shared/table';
import Tooltip from '@src/components/shared/tooltip';
import ModalWrap from '@src/components/shared/wrapper/modal-wrap';
import Form from '@src/components/transaction/form';
import { useAppDispatch } from '@src/hooks/appHook';
import { setPageCount } from '@src/store/reducers/pagination.reducer';

const Transaction = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<string | undefined>(undefined);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTab('tab3');
      dispatch(setPageCount(10));
    }, 1500);
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <p>Transaction</p>
      <MainButton className="w-[min-content]" title="Open Form" onClick={() => setOpen(true)} />
      <ModalWrap isOpen={open} onClose={() => setOpen(false)}>
        <Form />
      </ModalWrap>
      <SwitchTab
        tabs={[
          { label: 'Tab 1', value: 'tab1' },
          { label: 'Tab 2', value: 'tab2' },
          { label: 'Tab 3', value: 'tab3' },
          { label: 'Tab 4', value: 'tab4' },
        ]}
        onChange={(tab) => console.log('>>> tab change:', tab)}
        defaultTab={tab}
      />
      <Table
        columns={[
          genColumn('Age', 'age'),
          genColumn('Name', 'name', ({ value }) => <Tooltip content="Duckiee">{value}</Tooltip>),
          genColumn('Country', 'country'),
          genColumn('Gender', 'gender'),
          genColumn('ID Number', 'id_no'),
        ]}
        data={[
          // {
          //   name: "John Doe",
          //   age: 1,
          //   country: "USA",
          //   gender: "male",
          //   id_no: "1234567890000000",
          // },
          // {
          //   name: "Jane Smith",
          //   age: 2,
          //   country: "UK",
          //   gender: "male",
          //   id_no: "1234567890000000",
          // },
          // {
          //   name: "Jane Smith",
          //   age: 3,
          //   country: "UK",
          //   gender: "male",
          //   id_no: "1234567890000000",
          // },
          // {
          //   name: "Jane Smith",
          //   age: 4,
          //   country: "UK",
          //   gender: "male",
          //   id_no: "1234567890000000",
          // },
          // {
          //   name: "Jane Smith",
          //   age: 5,
          //   country: "UK",
          //   gender: "male",
          //   id_no: "1234567890000000",
          // },
          // {
          //   name: "Jane Smith",
          //   age: 6,
          //   country: "UK",
          //   gender: "male",
          //   id_no: "1234567890000000",
          // },
          // {
          //   name: "Jane Smith",
          //   age: 7,
          //   country: "UK",
          //   gender: "male",
          //   id_no: "1234567890000000",
          // },
          {
            name: 'Jane Smith',
            age: 8,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 9,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 10,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 11,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 12,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 13,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 14,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 15,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
          {
            name: 'Jane Smith',
            age: 16,
            country: 'UK',
            gender: 'male',
            id_no: '1234567890000000',
          },
        ]}
        loading={loading}
      />
    </div>
  );
};

export default Transaction;
