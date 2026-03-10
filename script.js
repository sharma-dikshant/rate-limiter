const delay = process.argv[2] || 50; // in ms

setInterval(async () => {
  const res = await fetch("http://localhost:5500/test");
  console.log(res.status);
}, delay);
