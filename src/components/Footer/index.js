import styled from 'styled-components'

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  position: relative;

  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    text-decoration: none;
    transition: .3s;
    color: #3CB371;
    font-size: 16px;
    text-decoration: none;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
      &#169;2021 Criado por 
        {' '}
        <a href="https://www.linkedin.com/in/caroline-oliveira-86059b109/">
          <span>Caroline H Oliveira</span>
        </a>
        {' '}
        durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
} 