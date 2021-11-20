import './MyLabel.css'

export const MyLabel = ({id, children}) => {

    return (
      <div>
        <h2 id={id} className='labelCenter'></h2>
        {children}
      </div>
    );
  };