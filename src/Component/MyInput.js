

export const MyInput = ({ text, style, id, children }) => {
    return (
      <div>
        <input id={id} text={text} style={style} >
        </input>
        <h1>hello from input</h1>
      </div>
     
     
    );
  };