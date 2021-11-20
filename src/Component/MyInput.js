import './MyInput.css'

export const MyInput = ({ text, id, attributes , children }) => {
    return (
    <div className='Input'>
        <input 
        id={id} 
        className='Input-text'
        placeholder={attributes.placeholder} 
        >
        </input>
        <label for="input" class="Input-label">{text}</label>      
    </div>  
    );
  };


