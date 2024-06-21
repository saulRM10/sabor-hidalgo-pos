import './App.css';
import * as Dialog from '@radix-ui/react-dialog';

function App() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Content>
          <h2> Boo </h2>
        </Dialog.Content>
        <Dialog.Trigger>+</Dialog.Trigger>
      </Dialog.Root>
    </>
  );
}

export default App;
