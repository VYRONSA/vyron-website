export default function Wordmark({ large = false }: { large?: boolean }) {
  return (
    <span className={`wordmark${large ? ' wordmark-lg' : ''}`}>
      <span className="wordmark-name">
        VYRON<span className="wordmark-soft">SOFT</span>
      </span>
      <span className="wordmark-sub">(Pty) Ltd</span>
    </span>
  );
}
