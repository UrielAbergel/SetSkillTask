


export const MyTab = ({ title, style, id, children }) => {

  return (
      <div id={id} style={style}>
        <h1>{title}</h1> 
        {children} 
      </div>
    );
  };