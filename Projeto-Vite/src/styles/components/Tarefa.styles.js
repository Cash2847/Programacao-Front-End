import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

export const FilterButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  background-color: ${(props) => props.active ? props.theme.buttonBg : props.theme.cardBg};
  color: ${(props) => props.active ? props.theme.buttonText : props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.cardBg};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

export const TextoTarefa = styled.span`
  text-decoration: ${(props) => props.concluida ? 'line-through' : 'none'};
  opacity: ${(props) => props.concluida ? 0.5 : 1};
  cursor: pointer;
  flex: 1;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #bb2d3b;
  }
`;