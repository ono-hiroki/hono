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
    {href: 'CustomNodes', label: 'CustomNodes'},
    {href: 'FeatureOverview', label: 'FeatureOverview'},
    {href: 'flow-edit', label: 'flow-edit'},
    {href: 'geometry', label: 'geometry'},
    {href: 'glb', label: 'glb'},
    {href: 'PanningandZooming', label: 'PanningandZooming'},
    {href: 'react-flow', label: 'react-flow'},
    {href: 'SubFlows', label: 'SubFlows'},
    {href: 'three', label: 'three'},
    {href: 'try-three', label: 'try-three'},
    {href: 'UncontrolledFlow', label: 'UncontrolledFlow'},
    {href: 'UsingaStateManagementLibrary', label: 'UsingaStateManagementLibrary'},
    {href: 'write-line', label: 'write-line'},
    {href: 'yakudoo', label: 'yakudoo'}

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
