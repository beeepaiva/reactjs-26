export function Alunos({ alunos, search, ...props }) {

    const filteredAlunos = alunos.filter((aluno) =>
      aluno.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div>
        <h2>Lista de alunos</h2>
  
        {filteredAlunos.length === 0 ? (
          <p>Nenhum aluno encontrado</p>
        ) : (
          <ul>
            {filteredAlunos.map((aluno, index) => (
              <li key={index}>{aluno}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }