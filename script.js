const questions = [
  // <h2>Decomposição</h2>
  //{ q: "O número 56 tem: ___ dezenas e ___ unidades.", a: ["5", "6"] },
  //{ q: "O número 79 tem: ___ dezenas e ___ unidades.", a: ["7", "9"] },
  //{ q: "O número 21 tem: ___ dezenas e ___ unidades.", a: ["2", "1"] },
  //{ q: "O número 4 tem: ___ dezenas e ___ unidades.", a: ["0", "4"] },
  //{ q: "O número 90 tem: ___ dezenas e ___ unidades.", a: ["9", "0"] },
  //{ q: "O número 17 tem: ___ dezena e ___ unidades.", a: ["1", "7"] },
  //{ q: "O número 64 tem: ___ dezenas e ___ unidades.", a: ["6", "4"] },
  //{ q: "O número 89 tem: ___ dezenas e ___ unidades.", a: ["8", "9"] },
  //{ q: "O número 35 tem: ___ dezenas e ___ unidades.", a: ["3", "5"] },
  //{ q: "O número 99 tem: ___ dezenas e ___ unidades.", a: ["9", "9"] },
  { q: "12 + 5 = ___", a: ["17"] },
  { q: "17 + 13 = ___", a: ["30"] },
  { q: "9 + 8 = ___", a: ["17"] },
  { q: "15 + 5 = ___", a: ["20"] },
  { q: "8 - 4 = ___", a: ["4"] },
  { q: "10 - 3 = ___", a: ["7"] },
  { q: "25 - 5 = ___", a: ["20"] },
  { q: "18 - 12 = ___", a: ["6"] },
  // Dezena / meia dezena / dúzia
  // { q: "Uma dezena tem ___ unidades.", a: ["10"] },
  // { q: "Meia dezena tem ___ unidades.", a: ["5"] },
  // { q: "Uma dúzia tem ___ unidades.", a: ["12"] },
  // { q: "Meia dúzia tem ___ unidades.", a: ["6"] },
  // { q: "2 dezenas de balas são ___ balas.", a: ["20"] },
  // { q: "3 meias dezenas de figurinhas são ___ figurinhas.", a: ["15"] },
  // { q: "2 dúzias de ovos são ___ ovos.", a: ["24"] },
  // { q: "Meia dúzia de maçãs são ___ maçãs.", a: ["6"] },
  // { q: "4 dezenas de lápis são ___ lápis.", a: ["40"] },
  // { q: "2 meias dúzias de chocolates são ___ chocolates.", a: ["12"] },

  /// Adição e subtração até 20
  // { q: "João tinha 6 balas e ganhou mais 7. Agora tem ___ balas.", a: ["13"] },
  // {
  //   q: "Maria tinha 15 figurinhas e deu 8. Ficou com ___ figurinhas.",
  //   a: ["9"],
  // },
  // {
  //   q: "Pedro tinha 5 carrinhos e ganhou mais 9. Agora tem ___ carrinhos.",
  //   a: ["14"],
  // },
  // { q: "Ana tinha 16 pirulitos e comeu 9. Sobrou ___ pirulitos.", a: ["7"] },
  // { q: "Lucas tinha 10 bolas e perdeu 3. Ficou com ___ bolas.", a: ["7"] },
  // {
  //   q: "Carla tinha 5 bonecas e ganhou dobro de ele tinha. Agora tem ___ bonecas.",
  //   a: ["15"],
  // },
  // {
  //   q: "Paulo tinha 18 figurinhas e perdeu metade. Ficou com ___ figurinhas.",
  //   a: ["9"],
  // },
  // {
  //   q: "Sofia tinha 9 livros e ganhou mais meia dúzia. Agora tem ___ livros.",
  //   a: ["15"],
  // },
  // { q: "Tiago tinha 14 carrinhos e deu 5. Ficou com ___ carrinhos.", a: ["9"] },
  // {
  //   q: "Laura tinha 9 balas e ganhou mais 4. Agora tem ___ balas.",
  //   a: ["13"],
  // },

  // Dobro e metade
  // { q: "O dobro de 6 é ___", a: ["12"] },
  // { q: "A metade de 10 é ___", a: ["5"] },
  // { q: "O dobro de 9 é ___", a: ["18"] },
  // { q: "A metade de 14 é ___", a: ["7"] },
  // { q: "O dobro de 7 é ___", a: ["14"] },
  // { q: "A metade de 8 é ___", a: ["4"] },
  // { q: "O dobro de 5 é ___", a: ["10"] },
  // { q: "A metade de 12 é ___", a: ["6"] },
  // { q: "O dobro de 4 é ___", a: ["8"] },
  // { q: "A metade de 18 é ___", a: ["9"] },
];

const container = document.getElementById("questions");

questions.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "question";
  let html = `<strong>Questão ${index + 1}:</strong> ${item.q}<br>`;
  item.a.forEach((_, i) => {
    html = html.replace(
      "___",
      `<input type="text" id="ans${index}_${i}" placeholder="número">`,
    );
  });
  div.innerHTML = html;
  container.appendChild(div);
});

function checkAnswers() {
  let score = 0;
  questions.forEach((item, index) => {
    item.a.forEach((correct, i) => {
      const input = document.getElementById(`ans${index}_${i}`);
      const userAnswer = input.value.trim();
      if (userAnswer === correct) {
        input.className = "correct";
        score++;
      } else {
        input.className = "wrong";
      }
    });
  });

  document.getElementById("score").innerText =
    `Parabéns você acertou ${score} de ${questions.reduce((sum, q) => sum + q.a.length, 0)} respostas!`;
}
