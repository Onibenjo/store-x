import styled , {css} from 'styled-components';
import { Link } from "@reach/router";

export const HeaderContainer = styled.div`
 width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    padding: 1rem;

`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    flex-wrap: wrap;
`;

const OptionContainerStyles = css`
    padding: 0.8rem 1rem;
    cursor: pointer;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;