import styles from './Plate.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import menu from 'data/menu.json';
import PlateTags from 'components/PlateTags';
import NotFound from 'pages/NotFound';
import Header from 'components/Header';

export default function Plate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plate = menu.find((item) => item.id === Number(id));

  if (!plate) {
    return <NotFound />;
  }

  return (
    <Header>
      <button
        className={styles.voltar}
        onClick={() => {
          navigate(-1);
        }}
      >
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{plate.title}</h1>
        <div className={styles.imagem}>
          <img src={plate.photo} alt={plate.title}></img>
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{plate.description}</p>
          <PlateTags {...plate} />
        </div>
      </section>
    </Header>
  );
}
