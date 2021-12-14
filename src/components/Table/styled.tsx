import styled from 'styled-components';
import colors from '../../assets/themes/colors';

export const TableStyled = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin-top: 15px;
  border-collapse: collapse;

  thead th {
    padding: 10px;
    background-color: ${colors.blue};
    color: ${colors.white};
  }

  tbody {
    td {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid ${colors.gray};
    }
    tr{
      background-color: ${colors.white};
  
      &:nth-child(odd){
        background-color: ${colors.gray};
      }
    }
  }
  
`