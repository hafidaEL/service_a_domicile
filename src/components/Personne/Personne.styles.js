import styled from "styled-components";
import { colors, radius, fontWeights } from "../../shared/variable";
import CardDesign from "../../shared/images/bg-pattern-card.png";

export const Wrapper = styled.div`
  display: flex;
  border: 3px solid ${props => props.color};
  border-radius: 15px;
  color: ${props => props.color};
  justify-content: center;
`;

export const Card = styled.article`
  display: flex;
  justify-content: center;
  background-color: white;
  position: relative;
  width: 15rem;
  border-radius: ${radius};
  box-shadow: 0 4rem 4rem -2rem rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8.75rem;
  color: ${colors.BrandTertiary};
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${CardDesign});
    width: 100%;
    height: 8.75rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-top-left-radius: ${radius};
    border-top-right-radius: ${radius};
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: -50px;
  border: 5px solid white;
  z-index: 1;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  color: black;
  margin-bottom: 20px; 
`;

export const Name = styled.h2`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: ${fontWeights.Bold};
  color: ${colors.BrandSecondary};
  margin-right: 5px;
`;

export const Age = styled.p`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: ${fontWeights.Normal};
`;

export const City = styled.p`
  font-size: 0.875rem;
  margin-bottom: 10px;
`;

export const ContentReservation = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20px;
`;

export const Cv = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  align-items: center;
  border-radius: ${radius};
  color: #f86c29;
  height: 70%;
  margin-bottom: 10px;
`;

export const ReservationWrapper = styled.div`
  display: flex;
  background-color: #f9f9f9;
  padding: 20px;
  align-items: center;
  border-radius: ${radius};
  height: 30%;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-weight: bold;
  border-radius: 20px;
  background-color: background-color: ${({primary}) => primary? '#E38B06': '#000'};
  color: color: ${({primary}) => primary ? '#000': '#fff'};
  padding: 18px 30px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: transform .2s ease;
  &:hover{
      background-color: ${({primary}) => primary? '#fff': '#f86c29'};  
  transform: translateY(-.5rem) scale(1.02);
  color: #000;
  }
`;

