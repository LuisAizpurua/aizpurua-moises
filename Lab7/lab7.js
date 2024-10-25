const CandidateModule = (() => {
    const candidates = [];

    const addCandidate = (name, color) => {
        candidates.push({ name, color, points: 0 });
        renderCandidates();
        renderBarChart();
    };

    const removeCandidate = (name) => {
        const index = candidates.findIndex(c => c.name === name);
        if (index !== -1) {
            candidates.splice(index, 1);
            renderCandidates();
            renderBarChart();
        }
    };

    const addPoints = (name, points) => {
        const candidate = candidates.find(c => c.name === name);
        if (candidate) {
            candidate.points += points;
            renderBarChart();
        }
    };

    const renderCandidates = () => {
        const candidatesList = document.getElementById('candidatesList');
        candidatesList.innerHTML = '';

        candidates.forEach(candidate => {
            const candidateDiv = document.createElement('div');
            candidateDiv.className = 'candidate';
            candidateDiv.innerHTML = `
                <span style="color: ${candidate.color}">${candidate.name} (${candidate.color})</span>
                <button onclick="CandidateModule.removeCandidate('${candidate.name}')">Eliminar</button>
                <button onclick="CandidateModule.addPoints('${candidate.name}', 1)">Agregar 1 Punto</button>
            `;
            candidatesList.appendChild(candidateDiv);
        });
    };

    const renderBarChart = () => {
        const barChart = document.getElementById('barChart');
        barChart.innerHTML = '';

        const totalPoints = candidates.reduce((acc, candidate) => acc + candidate.points, 0);

        candidates.forEach(candidate => {
            const percentage = totalPoints > 0 ? (candidate.points / totalPoints) * 100 : 0;
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.backgroundColor = candidate.color;
            bar.style.width = percentage + '%';
            bar.innerText = `${candidate.name}: ${Math.round(percentage)}%`;
            barChart.appendChild(bar);
        });
    };

    return {
        addCandidate,
        removeCandidate,
        addPoints
    };
})();

document.getElementById('addCandidate').addEventListener('click', () => {
    const name = document.getElementById('candidateName').value;
    const color = document.getElementById('colorPicker').value;

    if (name) {
        CandidateModule.addCandidate(name, color);
        document.getElementById('candidateName').value = '';
    } else {
        alert('Por favor, introduce un nombre para el candidato.');
    }
});