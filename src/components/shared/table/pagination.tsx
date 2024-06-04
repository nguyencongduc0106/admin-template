import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@src/hooks/appHook';
import { setPageCount, setPageIndex, setPageSize } from '@src/store/reducers/pagination.reducer';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { pageIndex, pageSize, pageCount } = useAppSelector((state) => state.pagination);
  const [currPage, setCurrPage] = useState(pageIndex);

  useEffect(() => {
    dispatch(setPageIndex(pageCount ? 1 : 0));
    dispatch(setPageSize(10));
    if (pageCount) dispatch(setPageCount(pageCount));
  }, [pageCount]);

  const canNextPage = pageIndex < pageCount;

  const canPrevPage = pageIndex > 1;

  const formatPage = (index: number) => {
    return index < 1 ? 1 : index > pageCount ? pageCount : index;
  };

  const goToPage = (index: number) => {
    dispatch(setPageIndex(index));
    setCurrPage(index);
  };

  const toNextPage = () => {
    dispatch(setPageIndex(pageIndex + 1));
    setCurrPage(pageIndex + 1);
  };

  const toPrevPage = () => {
    dispatch(setPageIndex(pageIndex - 1));
    setCurrPage(pageIndex - 1);
  };

  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-4">
        <button
          className="flex size-6 items-center justify-center rounded-md bg-primary text-xs text-white disabled:opacity-50"
          onClick={() => goToPage(1)}
          disabled={!canPrevPage}
        >
          {'<<'}
        </button>

        <button
          className="flex size-6 items-center justify-center rounded-md bg-primary text-xs text-white disabled:opacity-50"
          onClick={() => toPrevPage()}
          disabled={!canPrevPage}
        >
          {'<'}
        </button>

        <span>
          Page:{' '}
          <input
            type="number"
            value={currPage}
            onChange={(e) => setCurrPage(Number(e.target.value))}
            onBlur={() => goToPage(formatPage(currPage))}
            style={{ width: '38px' }}
            disabled={pageCount === 0}
            className="text-center"
            onKeyDown={(e) => {
              if (['.', ',', '+', '-', 'e', 'E'].includes(e.key)) e.preventDefault();
              else if (e.key === 'Enter') e.currentTarget.blur();
            }}
          />
          of {pageCount}
        </span>

        <button
          className="flex size-6 items-center justify-center rounded-md bg-primary text-xs text-white disabled:opacity-50"
          onClick={() => toNextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>

        <button
          className="flex size-6 items-center justify-center rounded-md bg-primary text-xs text-white disabled:opacity-50"
          onClick={() => goToPage(pageCount)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
      </div>

      <select
        value={pageSize}
        onChange={(e) => {
          dispatch(setPageSize(Number(e.target.value)));
        }}
      >
        {[10, 20, 30, 40, 50].map((size) => {
          return (
            <option key={size} value={size}>
              Show {size}
            </option>
          );
        })}
      </select>
      {/* <div className="flex items-center gap-2">
        Show
        <SelectField
          control={control}
          name="pageSize"
          options={[
            { label: "10", value: 10 },
            { label: "20", value: 20 },
            { label: "30", value: 30 },
            { label: "40", value: 40 },
            { label: "50", value: 50 },
            { label: "60", value: 60 },
            { label: "70", value: 70 },
          ]}
          onChange={(opt) => {
            dispatch(setPageSize(Number(opt.value)));
          }}
        />
      </div> */}
    </div>
  );
};

export default Pagination;
