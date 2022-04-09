import filters from './filters.json';
import styles from './Filter.module.scss';
import classNames from 'classnames';

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter }: Props) {
  function selectFilter(option: IOption) {
    if (option.id === filter) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div className={styles.filtros}>
      {filters.map((option) => (
        <button
          key={option.id}
          onClick={() => selectFilter(option)}
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles.filtros__filtro__ativo]: filter === option.id,
          })}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
