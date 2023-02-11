import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    color: #999;
    
    @media (prefers-color-scheme: dark) { 
        border-color: red;
    }
    
    a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    }
`;

const FooterLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const FooterLogo = styled.span`
    height: 1em;
    margin-left: 0.5rem;

`;

const FooterImage = styled.img`
    filter: invert(1);
`;


export function Footer() {
    return (
        <>
            <StyledFooter>
                <a
                    href="https://github.com/ono-hiroki/hono"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ©2022 Hiroki Ono.
                </a>
            </StyledFooter>
        </>
    )
}
