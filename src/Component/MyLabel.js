

export const MyLabel = ({style, id, children }) => {

    return (
      <div style={style}>
        <h1 id = {id}></h1>
        {children}
      </div>
    );
  };