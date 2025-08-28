import React from "react";
import styled from "styled-components";
import ButtonSoci from "../Button/ButtonSocial";

const Contato = () => {
    return (
        <Wrapper id="contato">
            <h2>Entre em contato</h2>
            <div className="contact-info">
                <p>Email: rodriguesmarcotulio79@gmail.com</p>
                <p>Endereço: Rua Jupiá - 51 Granada - Uberlândia-MG</p>
                <p className="footer-text">
                    Criação, desenvolvimento e inovação por Marco Túlio R. de Andrade. Um compromisso contínuo em transformar conceitos em experiências visuais inesquecíveis, onde cada projeto conta uma história.
                </p>
            </div>
            <ButtonSoci />
        </Wrapper>
    );
};

export default Contato;

const Wrapper = styled.section`
  background-color: #111;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .contact-info {
    margin-bottom: 2rem;
    p {
      margin: 0.5rem 0;
      font-size: 1rem;
    }
    .footer-text {
      margin-top: 1rem;
      font-size: 0.85rem;
      color: #ccc;
    }
  }

  .botoes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  .Btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    color: #fff;
  }

  .Btn svg {
    vertical-align: middle;
  }

  .instagram {
    background-color: #E1306C;
  }

  .instagram:hover {
    background-color: #C13584;
  }

  .whatsapp {
    background-color: #25D366;
  }

  .whatsapp:hover {
    background-color: #1DA851;
  }

  .linkedin {
    background-color: #0077B5;
  }

  .linkedin:hover {
    background-color: #005582;
  }

  .github {
    background-color: #333;
  }

  .github:hover {
    background-color: #555;
  }
`;
