
export const MyTabs = ({ text, style, id, children }) => {
    return (
      <div id={id} style={style}>
        {children}
        <h1>hi this is tabs</h1>
      </div>
    );
  };