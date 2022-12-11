import styled from "styled-components";

export interface CardPlacehodersProps {}

const StyledCardPlacehoders = styled.div`
    width: 100%;
    max-width: 550px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-radius: 6px;
    background-color: #ffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    display: block;
`;
const StyledGridHeader = styled.div`
    width: 100%;
    padding: 10px 15px;
    display: flex;
    align-items: center;
`;
export const StyledAvatarCircle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ccc;
`;
export const StyledName = styled.div`
    width: 100%;
    max-width: 200px;
    height: 25px;
    margin-left: 10px;
    border-radius: 20px;
    background-color: #ccc;
`;
export const StyledText = styled.div`
    height: 25px;
    margin: 5px 15px 15px 15px;
    border-radius: 20px;
    background-color: #ccc;
`;
export const StyledImage = styled.div`
    width: 100%;
    height: 300px;
    background-color: #ccc;
`;

const CardPlacehoders = () => {
    return (
        <StyledCardPlacehoders>
            <StyledGridHeader>
                <StyledAvatarCircle className="dev-skeleton"/>
                <StyledName className="dev-skeleton"/>
            </StyledGridHeader>

            <StyledText className="dev-skeleton"/>

            <StyledImage className="dev-skeleton"/>
        </StyledCardPlacehoders>
    );
};

export default CardPlacehoders;
