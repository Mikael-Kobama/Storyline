// Simulando uma lista de tarefas
const tasks = [
  { id: 1, name: "Estudar JavaScript", status: "pendente", priority: "alta" },
  { id: 2, name: "Fazer exercício", status: "concluída", priority: "média" },
  { id: 3, name: "Ler livro", status: "pendente", priority: "baixa" },
  { id: 4, name: "Comprar mantimentos", status: "pendente", priority: "alta" },
  { id: 5, name: "Limpar a casa", status: "concluída", priority: "baixa" },
];

// Função para filtrar tarefas com base em status e/ou prioridade
function filterTasks({ status, priority }) {
  return tasks.filter((task) => {
    const statusMatch = status ? task.status === status : true;
    const priorityMatch = priority ? task.priority === priority : true;
    return statusMatch && priorityMatch;
  });
}

// Função para exibir as tarefas filtradas
function displayFilteredTasks(filters) {
  const filteredTasks = filterTasks(filters);

  if (filteredTasks.length === 0) {
    console.log("Nenhuma tarefa encontrada para os filtros fornecidos.");
    return;
  }

  console.log("Tarefas filtradas:");
  filteredTasks.forEach((task) => {
    console.log(`[${task.status}] [${task.priority}] ${task.name}`);
  });
}

// Exemplo de uso - Filtrar tarefas pendentes e de prioridade alta
const filters = { status: "pendente", priority: "alta" };
displayFilteredTasks(filters);
