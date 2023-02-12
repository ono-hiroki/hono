import styled from 'styled-components';
import Link from 'next/link';

const StyledFooter = styled.footer`
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
   
    color: #999;
    
    @media (prefers-color-scheme: dark) { 
        border-color: red;
    }
    
    a {
    display: inline-block;
    padding: 4px 12px;
    }
    
    a:hover,
    a:active,
    a:focus {
        color: #0070f3;
    }
`;

const NAV_LINKS = [
    {href: '/', label: 'index'},
    {href: '/about', label: 'about'},
]

export const Header = () => {
    return (
        <>
            <StyledFooter>
                {NAV_LINKS.map(({href, label}) => (
                    <Link key={href} href={href}>{label}</Link>
                ))}
            </StyledFooter>
        </>
    )
}
