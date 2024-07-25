const logMessage = (msg, color, backgroundColor) => {
  console.log(`%c ${msg}`, `color: ${color}; background: ${backgroundColor}`);
};

const Log = ({ type, message }) => {
  switch (type) {
      case 'success':
          logMessage(message, 'green', ''); 
          break;
      case 'danger':
          logMessage(message, 'red', ''); 
          break;
      case 'info':
          logMessage(message, 'black', 'yellow'); 
          break;
      default:
          logMessage(message, 'black', ''); 
          break;
  }
  return null; 
};

const App = () => {
  return (
      <div>
          <Log type="success" message="This is a success message" />
          <Log type="danger" message="This is a danger message" />
          <Log type="info" message="This is an info message" />
      </div>
  );
};

export default App;
