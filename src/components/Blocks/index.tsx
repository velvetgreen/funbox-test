import React, { useContext, useState } from 'react';
import getNoun from 'utils/getNoun';
import cn from 'classnames';
import { DataType } from 'types';
import Context from '../../context';
import s from './index.module.scss';

export const Blocks: React.FC = () => {
  const { data } = useContext(Context);
  const [selectedItems, setSelectedItems] = useState<{[idx: number]: boolean}>({});
  const [unhoveredItemIdx, setUnhoveredItemIdx] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    const selectedItemsCopy = { ...selectedItems };
    selectedItemsCopy[idx] = !selectedItemsCopy[idx];
    setSelectedItems({ ...selectedItemsCopy });
  };

  const handleMouseLeave = (idx: number) => {
    if (selectedItems[idx]) {
      setUnhoveredItemIdx(idx);
    }
  };

  const handleMouseEnter = (idx: number) => {
    if (selectedItems[idx] && unhoveredItemIdx === idx) {
      setUnhoveredItemIdx(null);
    }
  };

  const reanderHint = (item: DataType, idx: number) => {
    if (!item.available) {
      return (
        <div className={s.notAvailable}>
          Печалька,
          {' '}
          {item.taste}
          {' '}
          закончился.
        </div>
      );
    }
    return (
      <div className={s.text}>
        Чего сидишь? Порадуй котэ,
        &nbsp;
        <span
          className={s.link}
          role="button"
          tabIndex={idx}
          onClick={() => handleClick(idx)}
        >
          купи
        </span>
        .
      </div>
    );
  };

  return (
    <div className={s.root}>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={cn([s.container],
            {
              [s.active]: selectedItems[idx] && item.available,
              [s.inactive]: !item.available,
            },
            {})}
          onMouseLeave={() => handleMouseLeave(idx)}
          onMouseEnter={() => handleMouseEnter(idx)}
        >
          <div
            className={s.wrapper}
            role="button"
            tabIndex={idx}
            onClick={() => handleClick(idx)}
          >
            <div className={s.block}>
              {
                unhoveredItemIdx === idx && item.available
                  ? <div className={s.mouseOver}>Котэ не одобряет?</div>
                  : <div>Сказочное заморское явство</div>
              }
              <div className={s.title}>{item.title}</div>
              <div className={s.subtitle}>{item.taste}</div>
              <div>
                <span className={s.bold}>{item.amount}</span>
                {' '}
                {getNoun(item.amount, 'порция', 'порции', 'порций')}
              </div>
              <div>
                {item.promotion > 1 && <span className={s.bold}>{item.promotion}</span>}
                {' '}
                {getNoun(item.promotion, 'мышь', 'мыши', 'мышей')}
                {' '}
                в подарок
              </div>
              { item.rating && <div>{item.rating}</div>}
              <div className={s.weight}>
                {item.weight}
                {' '}
              </div>
            </div>
          </div>
          {selectedItems[idx] && item.available
            ? (
              <div className={s.description}>{item.description}</div>
            )
            : reanderHint(item, idx)}
        </div>
      ))}
    </div>
  );
};
