import React from "react";
import styled from "styled-components";

const Projetos = () => {
    const projetos = [
        {
            titulo: "Star Trails",
            descricao: "Um projeto interativo com HTML, CSS e JS, onde o mouse deixa rastros coloridos, criando efeitos visuais dinâmicos na tela.",
            imagem: "/move_mouse.png",
            link: "https://mouse-animado.vercel.app",
        },
        {
            titulo: "Credit Flow",
            descricao: "Simulação de um formulário de pagamento com cartão de crédito, projetado para recriar uma experiência de compra online com validação de dados.",
            imagem: "/projeto2.png",
            link: "https://cart-o-de-credito.vercel.app",
        },
        {
            titulo: "Reprodutor de Musica",
            descricao: "Reprodutor de música semelhante ao Spotify, com funções de reprodução e controle de faixas, oferecendo uma interface intuitiva para os usuários.",
            imagem: "/projeto3.png",
            link: "https://sp-tifai.vercel.app/#",
        },
        {
            titulo: "Site Católico com funcionalidade de Catequese Online",
            descricao: "Site institucional para uma paróquia católica, com design responsivo e funcionalidade de catequese online para engajar a comunidade, feito em React para apresentação do TCC.",
            imagem: "/site-catolico.png",
            link: "https://site-catolico.vercel.app",
        },
    ];

    return (
        <Wrapper id="projetos">
            <h2>Meus Projetos</h2>
            <div className="cards">
                {projetos.map((projeto, index) => (
                    <div className="card" key={index}>
                        <img src={projeto.imagem} alt={`Projeto ${index + 1}`} />
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.descricao}</p>
                        <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                            Ver Projeto
                        </a>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default Projetos;

const Wrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
background: #112801;
background: radial-gradient(at left bottom, #112801, #010101);
  color: #fffff;

  h2 {
  color: #fff;
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .card {
    background: #fff;
    border-radius: 10px;
    padding: 1rem;
    width: 300px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  .card img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  .card h3 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }

  .card p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .card a {
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .card a:hover {
    background-color: #0056b3;
  }
`;
