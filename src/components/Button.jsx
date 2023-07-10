export const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
};
