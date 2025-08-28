// src/components/Home/Hero.js
import React from "react";
import "./Hero.css";
import Button from "../Button/Button";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>
                    Olá, meu nome é <span>Marco Túlio</span>
                </h1>
                <p>Bem-vindo ao meu portfólio!</p>
                <Button />
            </div>
            <div className="hero-image">
                <img src="\minha-foto.JPG" alt="Marco Túlio" />
            </div>
        </section>
    );
}