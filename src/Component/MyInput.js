

export const MyInput = ({ text, style, id, attributes , children }) => {
    return (
      <div>
        <input 
        id={id} text={text} style={style} placeholder={attributes.placeholder} >
        </input>
      </div>  
    );
  };


