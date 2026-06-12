// src/components/TarefaItem.jsx
import React from 'react';
import { ItemContainer, TextoTarefa, DeleteButton } from '../styles/components/Tarefa.styles';

export default function TarefaItem({ tarefa, alternarConclusao, removerTarefa }) {
  return (
    <ItemContainer>
      <TextoTarefa 
        concluida={tarefa.concluida} 
        onClick={() => alternarConclusao(tarefa.id)}
      >
        {tarefa.texto}
      </TextoTarefa>
      <DeleteButton onClick={() => removerTarefa(tarefa.id)}>Excluir</DeleteButton>
    </ItemContainer>
  );
}
