import React from 'react'
import styled from 'styled-components'
import Services1 from '../assets/Services1.png'
import Services2 from '../assets/Services2.png'
import Services3 from '../assets/Services3.png'
import {TitleStyles} from './ReusuableStyles'

export default function Services() {
    return (
        <Section id="services">
            <div className="title">
                <h1 className="yellow">What we do?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi praesentium deserunt, numquam ipsum corrupti obcaecati officiis aliquid ab eligendi?</p>
            </div>
            <div className="services">
                <div className="service">
                    <img src={Services2} alt="" />
                    <p>He Printing and Typesetting the industry <span>Lorem ipsum</span> dolor sit amet.</p>
                    <button>Read More</button>
                </div>

                <div className="service yellow">
                    <img src={Services1} alt="" />
                    <p>He Printing and Typesetting the industry <span>Lorem ipsum</span> dolor sit amet.</p>
                    <button>Read More</button>
                </div>

                <div className="service">
                    <img src={Services3} alt="" />
                    <p>He Printing and Typesetting the industry <span>Lorem ipsum</span> dolor sit amet.</p>
                    <button>Read More</button>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    margin: 2rem 4rem;
    ${TitleStyles}
    .services{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10vw;
        margin-top: 4rem;
        .service{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5vw;
            padding: 0 3vw;
            img{
                height: 2.8rem;
            }
            p{
                text-align: center;
                line-height: 2rem;
                font-size: 1.1rem;
            }
            button{
                padding: 0.6rem 3rem;
                letter-spacing: 0.1rem;
                border-radius: 2rem;
                font-size: 1.1rem;
                border: none;
                color: #fff;
                cursor: pointer;
                background-color: #fc4958;
                transition: 0.3s ease-in-out;
                &:hover{
                    background-color: #f9c74f;
                }
            }
        }

        .yellow{
            button{
                background-color: #f9c74f;
                &:hover{
                    background-color: #fc4958
                }
            }
        }
    }
`;
