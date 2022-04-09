import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filter from './Filter';
import Sorter from './Sorter';
import ListItem from './ListItem';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTheme.titulo}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filter filter={filter} setFilter={setFilter} />
        <Sorter sorter={sorter} setSorter={setSorter} />
      </div>
      <ListItem sorter={sorter} filter={filter} search={search} />
    </section>
  );
}
