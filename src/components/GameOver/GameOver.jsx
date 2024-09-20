export default function GameOver({ retry }) {
  return (
    <>
      <div>
        <h1>Fim de jogo</h1>
        <button onClick={retry}>Resetar jogo</button>
      </div>
    </>
  );
}
