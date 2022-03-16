const AdviceId = document.querySelector("#AdviceId");

const AdviceText = document.querySelector("#AdviceText");

const btn = document.querySelector("#btn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      const adviceNum = data.slip.id;
      const advice = data.slip.advice;

      AdviceId.textContent = adviceNum;
      AdviceText.innerHTML = `<p>${advice}</p>`;
    });
}

btn.addEventListener("click", function () {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
