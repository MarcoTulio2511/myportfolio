import React from "react";
import styled from "styled-components";
import Card from "./Card";

const cardsData = [
    {
        title: "Formação & Certificações",
        code: `Sou formado em Análise e Desenvolvimento de Sistemas pela Unipac Uberlândia. 
Busquei certificações em Segurança da Informação, LGPD e Desenvolvimento Full-Stack, 
sempre aprimorando minhas habilidades técnicas e estratégicas.`,
    },
    {
        title: "Habilidades Técnicas",
        code: `Domínio em HTML, CSS, JavaScript, WordPress e Wix Studio. 
Criação de interfaces responsivas, interativas e otimizadas para performance.`,
    },
    {
        title: "Experiência Profissional",
        code: `Atuei como estagiário na Ply Agency e na Algar Telecom. 
Criação de sites institucionais, landing pages e projetos de UI/UX, com foco em usabilidade e acessibilidade.`,
    },
    {
        title: "Perfil & Colaboração",
        code: `Proativo e orientado a soluções eficazes, com experiência em trabalho em equipes multidisciplinares. 
Foco em prototipação, refinamento visual e comunicação clara para alcançar resultados consistentes.`,
    },
];

export default function Sobre() {
    return (
        <Wrapper id="sobre">
            <h2>Sobre mim e meu trabalho</h2>
            <p style={{ width: "1200px", marginBottom: "24px" }}>
                Sou Marco Túlio Rodrigues, um desenvolvedor front-end e designer UI/UX com formação em Análise e Desenvolvimento de Sistemas.
                Minha paixão por tecnologia me levou a buscar certificações em Segurança da Informação, LGPD e Desenvolvimento Full-Stack.
                Tenho experiência em HTML, CSS, JavaScript, WordPress e Wix Studio, atuando em projetos institucionais, landing pages e UI/UX.
                Sou proativo, focado em soluções eficazes, com habilidades em prototipação, acessibilidade, refinamento visual e trabalho colaborativo.
            </p>
            <div className="cards-container">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </Wrapper >
    );
}

const Wrapper = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a1a);
  color: #fff;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }

  p {
    max-width: 1218px;
    margin: 0 auto 0rem auto;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .cards-container {
    display: flex;
    margin: 15px 0 15px 0;

    justify-content: center;
    gap: 2rem;
  }
`;
