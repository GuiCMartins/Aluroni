import styles from "./Sorter.module.scss";
import options from "./options.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  sorter: string;
  setSorter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sorter({ sorter, setSorter }: Props) {
  const [open, setOpen] = useState(false);
  const sorterName =
    sorter && options.find((option) => option.value === sorter)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles.ordenador__ativo]: sorter !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sorterName || "Ordenar por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles.ordenador__options__ativo]: open,
        })}
      >
        {options.map((option) => {
          return (
            <div
              className={styles.ordenador__option}
              key={option.value}
              onClick={() => setSorter(option.value)}
            >
              {option.nome}
            </div>
          );
        })}
      </div>
    </button>
  );
}
