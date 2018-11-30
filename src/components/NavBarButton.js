import styled from 'styled-components';
import { lighten } from 'polished';

const NavBarButton = styled.button`
  background: ${props => props.theme.colors.grey.ultraLight};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${props => (props.big ? '1.5rem' : '1rem')};
  font-size: ${props => (props.big ? '1.2rem' : '1rem')};
  padding: ${props => (props.big ? '0.35rem 1.6rem' : '0.25rem 1.5rem')};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

export default NavBarButton;
