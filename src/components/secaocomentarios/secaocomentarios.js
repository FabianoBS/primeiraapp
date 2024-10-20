import React, { useState } from "react";
import './styles.css';

const comentariosFicticios = [
    {
      id: 1,
      nome: 'João Silva',
      data: '2024-10-15',
      comentario: 'Adorei este artigo! Muito informativo.',
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      data: '2024-10-14',
      comentario: 'Muito bem escrito, mas poderia incluir mais exemplos.',
    },
    {
      id: 3,
      nome: 'Carlos Souza',
      data: '2024-10-13',
      comentario: 'Achei algumas partes confusas, mas no geral gostei.',
    },
    {
      id: 4,
      nome: 'Ana Paula',
      data: '2024-10-12',
      comentario: 'Excelente! Compartilhei com meus amigos.',
    },
    {
      id: 5,
      nome: 'Lucas Mendes',
      data: '2024-10-11',
      comentario: 'Ótimo conteúdo! Aguardando mais posts como este.',
    },
  ];
  
const SecaoComentarios = () => {
const [comentarios, setComentarios] = useState(comentariosFicticios);
const [novoComentario, setNovoComentario] = useState('');
  
const adicionarComentario = () => {
    if (novoComentario.trim() === '') return;
        const novoComentarioObj = {
            id: comentarios.length + 1,
            nome: 'Usuário Anônimo',
            data: new Date().toISOString().split('T')[0],
            comentario: novoComentario,
        };
    
        setComentarios([...comentarios, novoComentarioObj]);
        setNovoComentario('');
    };
  
    return (
      <div className="secao-comentarios">
        <h2>Comentários</h2>
        {comentarios.map(comentario => (
          <div key={comentario.id} className="comentario">
            <h4>{comentario.nome}</h4>
            <p><em>{comentario.data}</em></p><br/>
            <p>{comentario.comentario}</p>
          </div>
        ))}
        
        <div className="caixa-comentario">
          <textarea
            value={novoComentario}
            onChange={(e) => setNovoComentario(e.target.value)}
            placeholder="Escreva seu comentário..."
            rows="4"
            style={{ width: '100%', borderRadius: '4px', padding: '10px' }}
          />
          <button className="button" onClick={adicionarComentario}>
            Enviar Comentário
          </button>
        </div>
      </div>
    );
  };
  
  export default SecaoComentarios;