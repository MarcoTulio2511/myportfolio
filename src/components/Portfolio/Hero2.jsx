import React from "react";
import styled from "styled-components";
import Button from "../Button/Button"; // seu botão já estilizado

const Hero2 = () => {
    return (
        <Wrapper>
            <div className="content">
                <div className="text">
                    <h1>Leve seus projetos front-end ao próximo nível com interfaces modernas, responsivas e interativas</h1>
                    <p>Para criar experiências digitais de alto impacto, é essencial unir design, usabilidade e tecnologia. Desenvolvo soluções front-end elegantes e funcionais, focadas na performance, acessibilidade e experiência do usuário, garantindo que cada projeto alcance seu potencial máximo.</p>
                    <Button text="Ver Projetos" link="#projetos" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Hero2;

const Wrapper = styled.section`

  background: url('/back-hero.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
    min-height: 72vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

.content {
display: flex
;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    bottom: -133px;
    position: relative;
}

    .text {
  max-width: 900px;
  text-align: center;
}
  .text button, .text a { 
  margin: 0 auto;
}
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }

  .image img {
    width: 300px;
    border-radius: 15px; 
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }
    .image img {
      margin-top: 2rem;
      width: 80%;
    }
  }
`;
