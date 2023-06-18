import ColorPicker from "./components/ColorPicker";

const colors = ["red", "yellow", "blue", "green"];

function App() {
  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
