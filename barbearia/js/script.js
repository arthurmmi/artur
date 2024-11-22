const form = document.getElementById('agendamento');
const agenda = document.getElementById('agenda');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    if (nome && data && horario) {
        const li = document.createElement('li');
        li.textContent = `${nome} - ${data} - ${horario}`;
        agenda.appendChild(li);
        form.reset();
    } else {
        alert('Preencha todos os campos!');
    }
});

const buttons = document.querySelectorAll('header nav ul li');

buttons.forEach(button => {
  // Add hover effect
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#4CAF50'; // Change to desired hover color
    button.style.color = '#fff'; // Change to desired hover text color
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = ''; // Remove hover background color
    button.style.color = '#fff'; // Revert to original text color
  });

  // Optional: Add a subtle border
  button.style.border = '1px solid rgba(255, 255, 255, 0.2)';
});