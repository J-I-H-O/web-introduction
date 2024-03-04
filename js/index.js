function submit() {
  const username = document.getElementById("username").value;
  const query = 'input[name="movie"]:checked';
  const selectedElements = document.querySelectorAll(query);

  const selectedElementsCount = selectedElements.length;

  alert(
    username + "님, 저와 " + selectedElementsCount + "개의 취향이 같으시네요!"
  );
}
