import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClickPermission = () => {
    Notification.requestPermission();
  };
  const handleClickNotification = () => {
    new Notification("test");
  };
  const handleClickNotificationWithSound = () => {
    new Notification("test").addEventListener("show", () => {
      new Audio("x.mp3").play();
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>通知設定：{Notification.permission}</p>
        <button onClick={handleClickPermission}>通知を許可する</button>
        <button onClick={handleClickNotification}>
          通知する（音なし）
        </button>
        <button onClick={handleClickNotificationWithSound}>
          通知する（音あり）
        </button>
      </header>
    </div>
  );
}

export default App;
