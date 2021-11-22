import React from 'react'
import styled from 'styled-components'
import portfolio1 from '../assets/portfolio.jpg'

export default function Portfolio() {
    return (
        <Section id="portfolio">
            <div className="background">
                <img src={portfolio1} alt="" />
            </div>
            <div className="content">
                <h1>Buy Premium Pan Free Hand Toast</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, sit.</h2>
                <button>Buy Now</button>
            </div>
        </Section>
    )
}

const Section = styled.section`
    height: 80vh;
    position: relative;
    border-radius: 5rem;
    &:hover{
        .background{
            img{
                transform: scale(1.2);
            }
        }
    }

    .background{
        height: 100%;
        max-width: 100%;
        overflow: hidden;
        border-radius: 1rem;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            filter: brightness(60%);
            border-radius: 1rem;
            transition: 0.8s ease-in-out;
        }
    }

    .content{
        position: absolute;
        top: 25%;
        left: 10%;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;
        h1{
            font-size: 3rem;
            width: 60%;
        }
        h2{
            width: 60%;
        }
        button{
            border: none;
            padding: 1rem 4rem;
            border-radius: 4rem;
            font-size: 1.4rem;
            color: #fff;
            background: linear-gradient(to right, #fc4958, #e85d05);
            transition: 0.5s ease-in-out;
            text-transform: uppercase;
            &:hover{
                background: linear-gradient(to left, #fc4958, #e85d05);
            }
        }
    }
`;
