const pixels = Array.from({ length: 42 }, (_, index) => index);

export default function PixelBlast() {
  return (
    <div className="pixel-blast" aria-hidden="true">
      <div className="pixel-blast__wash" />
      <div className="pixel-blast__grid">
        {pixels.map((pixel) => (
          <span key={pixel} style={{ "--pixel-index": pixel }} />
        ))}
      </div>
    </div>
  );
}
