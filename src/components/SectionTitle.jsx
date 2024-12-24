export default function SectionTitle({
  title,
  className,
  onAutoFill,
  onClear,
}) {
  return (
    <div className={className}>
      <div className="title">
        <h1>{title}</h1>
        <div className="buttons">
          <button className="clear-button" onClick={onClear}>
            Clear
          </button>
          <button className="auto-fill" onClick={onAutoFill}>
            Auto-Fill
          </button>
        </div>
      </div>
    </div>
  );
}
