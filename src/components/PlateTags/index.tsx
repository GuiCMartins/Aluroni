import styles from './PlateTags.module.scss';
import classNames from 'classnames';
import { PlateType } from 'types/Plates';

export default function PlateTags({
  category,
  size,
  serving,
  price,
}: PlateType) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size} g</div>
      <div className={styles.tags__qtdpessoas}>
        Serve {serving} {`pessoa${serving === 1 ? '' : 's'}`}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
