// src/components/Header.jsx
import React from 'react';
import { HeaderContainer, ThemeButton } from '../styles/components/Header.styles';

export default function Header({ toggleTema, temaAtual }) {
  return (
    <HeaderContainer>
      <h1>Minhas Tarefas</h1>
      <ThemeButton onClick={toggleTema}>
        {temaAtual === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </ThemeButton>
    </HeaderContainer>
  );
}
