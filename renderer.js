const trololo = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};
trololo();

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})}`;
