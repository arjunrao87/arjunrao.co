import styled from 'styled-components';
import theme from '../../config/Theme';

const Subline = styled.div`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.grey.light};
  ${props => props.sectionTitle && 'margin-top: -3rem'};
  ${props => props.sectionTitle && 'margin-bottom: 4rem'};
  ${props => props.sectionTitle && 'text-align: center'};
  margin-bottom: -2rem;
`;

export default Subline;
