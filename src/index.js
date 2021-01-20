const testFetching = async () => {
  const response = await fetch("https://adomainthatdoesntexist.com/toto");
  const text = await response.text();

  const expectedHeader = response.headers.get("foo");

  console.log("expectedHeader", expectedHeader, text);

  if (expectedHeader === "bar") {
    const div = document.createElement("div");
    div.innerText = "The header was found";

    document.body.appendChild(div);
  }
};

testFetching();
