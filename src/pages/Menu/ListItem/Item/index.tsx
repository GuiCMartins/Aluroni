import styles from './Item.module.scss';
import { PlateType } from 'types/Plates';
import PlateTags from 'components/PlateTags';
import { useNavigate } from 'react-router-dom';

export default function Item(item: PlateType) {
  const { title, description, photo, id } = item;
  const navigate = useNavigate();

  return (
    <div
      className={styles.item}
      onClick={() => {
        navigate(`/prato/${id}`);
      }}
    >
      <div className={styles.item__imagem}>
        <img src={photo} alt={title}></img>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <PlateTags {...item} />
      </div>
    </div>
  );
}
