import styles from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import casa from 'assets/about/casa.png';
import pasta1 from 'assets/about/massa1.png';
import pasta2 from 'assets/about/massa2.png';

export default function About() {
  const imgs = [pasta1, pasta2];

  return (
    <section>
      <h3 className={stylesTheme.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imgs.map((img, index) => {
          return (
            <div key={index} className={styles.imagens__imagem}>
              <img src={img} alt="Imagem de massa"></img>
            </div>
          );
        })}
      </div>
    </section>
  );
}
