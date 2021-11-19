

export const MyLabel = ({style, id, children }) => {

    return (
      <div id={id} style={style}>
        {children}
      </div>
    );
  };