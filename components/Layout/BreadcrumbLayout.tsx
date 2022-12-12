import Link from "next/link";
import styled from "styled-components";

export interface BreadcrumbLayoutProps {
    data: any;
}

interface DataItemMapProps {
    href?: string;
    title?: string;
}

const StyledItem = styled.span`
    & + &:before {
        content: "\\BB";
        left: -10px;
        color: #ccc;
        padding: 0px 10px;
    }
`;
const StyledText = styled.span`
    color: #288ad6;
    :hover {
        text-decoration: underline;
    }
`;

const BreadcrumbLayout = ({ data }: any) => {
    return (
        <div style={{margin: "15px 0px"}}>
            {data.map((item: any, index: any) => {
                return (
                    <StyledItem key={index}>
                        <Link href={item.href}>
                            <StyledText>{item.title}</StyledText>
                        </Link>
                    </StyledItem>
                );
            })}
        </div>
    );
};

export default BreadcrumbLayout;
