import React from "react";
import styled from "styled-components";

const Card = ({ title, code, color }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="header">
                    <div className="top">
                        <div className="circle">
                            <span className="red circle2" />
                        </div>
                        <div className="circle">
                            <span className="yellow circle2" />
                        </div>
                        <div className="circle">
                            <span className="green circle2" />
                        </div>
                        <div className="title">
                            <p id="title2">{title}</p>
                        </div>
                    </div>
                </div>
                <div className="code-container">
                    <textarea
                        className="area"
                        readOnly
                        value={code}
                    />
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .card {
    width: 320px;
    height: 400px;
    background-color: #24233b;
    border-radius: 12px;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.5);
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }

  .card:hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 25px rgba(0,0,0,0.7);
  }

  .top {
  margin-top: 8px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .circle {
    margin-right: 10px;
  }

  .circle2 {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

.red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }

  #title2 {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }

  .code-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .area {
    width: 90%;
    height: 85%;
    background-color: #2c2b4a;
    border-radius: 8px;
    border: none;
    color: #fff;
    padding: 10px;
    resize: none;
    font-family: monospace;
    font-size: 14px;
    line-height: 1.5;
  }

  .area:focus {
    outline: none;
  }
`;

export default Card;
