import React, { useState } from "react"; // Importa React e o hook useState
// Define o componente funcional TodoList
const TodoList = () => {
const [tarefa, setTarefa] = useState(""); // Estado para armazenar a nova tarefa
const [listaTarefas, setListaTarefas] = useState([]); // Estado para armazenar a lista de tarefas
// Função para adicionar uma nova tarefa
const adicionarTarefa = () => {
if (tarefa.trim() !== "") { // Verifica se a tarefa não está vazia
setListaTarefas([...listaTarefas, tarefa]); // Adiciona a tarefa à lista
setTarefa(""); // Limpa o campo de entrada
}
};
// Função para remover uma tarefa da lista
const removerTarefa = (index) => {
const novasTarefas = listaTarefas.filter((_, i) => i !== index); // Filtra a lista, removendo a tarefa com o
// índice fornecido
setListaTarefas(novasTarefas); // Atualiza o estado com a nova lista
};
// Retorna a estrutura JSX do componente
return (
<div>
<h1>Lista de Tarefas</h1> {/* Título da aplicação */}
<input
type="text"
value={tarefa} // Define o valor do campo de entrada
onChange={(e) => setTarefa(e.target.value)} // Atualiza o estado ao digitar
placeholder="Adicionar nova tarefa" // Texto de dica para o campo
/>
<button onClick={adicionarTarefa}>Adicionar</button> {/* Botão para adicionar a tarefa */}
<ul>
{listaTarefas.map((tarefa, index) => ( // Mapeia as tarefas na lista
<li key={index}>
{tarefa} {/* Exibe a tarefa */}
<button onClick={() => removerTarefa(index)}>Remover</button> {/* Botão para remover a
tarefa */}
</li>
))}
</ul>
</div>
);
};
// Exporta o componente TodoList para uso em outros arquivos
export default TodoList;
