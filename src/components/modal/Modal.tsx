import * as Dialog from '@radix-ui/react-dialog';
// type ModalProps = {
//   title: string;
// };

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button" className="image-trigger">
            {' '}
            {/* Replace with your image */}
            <img
              width={100}
              height={100}
              src="https://via.placeholder.com/100"
              alt="Product Image"
            />
            <div className="trigger-info">
              <p className="trigger-name">Product Name</p>
              <p className="trigger-price">Price: $9.99</p>
            </div>
          </button>
        </Dialog.Trigger>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content-container">
          {/* Rest of your ModalContent component */}
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default Modal;
