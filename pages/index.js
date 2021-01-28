import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
// import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <a href="https://fontmeme.com/fontes/fonte-sherlock/"><img src="https://fontmeme.com/permalink/210127/4fb223cb38fa5db854dbf90f9843dc2d.png" alt="logo cladoquiz" border="0" /></a>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}
            {' '}
            Ótima aula sobre o assunto
            {' '}
              <a href="https://www.youtube.com/watch?v=SAoFkZczm2Y&t=2294s&ab_channel=CanaldoPirulla">
                <span>aqui.</span>
              </a>
            </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Carol42/cladoquiz" />
    </QuizBackground>

  );
}
