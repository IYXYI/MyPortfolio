body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: white;
  background: black;
  overflow-x: hidden;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; /* stays behind everything */
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px 0;
  z-index: 1000;
}

.menu {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.menu li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}

.menu li a:hover {
  color: #00bcd4;
}

main {
  margin-top: 100px; /* keeps content below the header */
  max-width: 800px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}

section {
  margin-bottom: 60px;
}
