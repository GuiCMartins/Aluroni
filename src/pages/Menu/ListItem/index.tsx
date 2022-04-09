/* eslint-disable indent */
import menu from 'data/menu.json';
import Item from './Item';
import styles from './ListItem.module.scss';
import { useEffect, useState } from 'react';
import { MenuType } from 'types/Plates';

interface Props {
  sorter: string;
  search: string;
  filter: number | null;
}

export default function ListItem({ filter, sorter, search }: Props) {
  const [list, setList] = useState(menu);

  function searchItem(title: string) {
    const regex = new RegExp(search, 'i');

    return regex.test(title);
  }

  function filterItem(id: number) {
    if (filter !== null) {
      return filter === id;
    }
    return true;
  }

  function sorterItem(list: MenuType) {
    switch (sorter) {
      case 'porcao':
        return list.sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'qtd_pessoas':
        return list.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'preco':
        return list.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return list;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => searchItem(item.title) && filterItem(item.category.id)
    );
    setList(sorterItem(newList));
  }, [filter, search, sorter]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
