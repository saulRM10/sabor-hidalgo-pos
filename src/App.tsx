import * as Dialog from '@radix-ui/react-dialog';
import taco from './assets/foods/taco.png';
import styles from './components/modal/Modal.module.css';

function App() {
  const meatOptions = [
    'Asada',
    'Al Pastor',
    'Pollo',
    'Birria',
    'Cabeza',
    'Lengua',
    'Nopales (Veggie)',
  ];

  const ingredients = [
    { name: 'Cilantro', id: 'cilantro' },
    { name: 'Onion', id: 'onion' },
    { name: 'Salsa', id: 'salsa' },
  ];

  const extras = [
    { name: 'Cheese', id: 'cheese', price: 1.0 },
    { name: 'Bacon', id: 'bacon', price: 2.0 },
    { name: 'Avocado', id: 'avocado', price: 2.5 },
  ];
  return (
    <div className={styles.menuebox}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button" className="image-trigger">
            <img width={100} height={100} src={taco} alt="Taco Image" />
            <div className="trigger-info">
              <p className="trigger-name">Taco</p>
              <p className="trigger-price">Price: $3</p>
            </div>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.DialogOverlay} />
          <Dialog.Content className={styles.DialogContent}>
            <div className={styles.foodHeader}>
              <img className="food-image" src={taco} alt={'taco img'} />
              <div className={styles.foodDetails}>
                <h2>Taco</h2>
                <h2>$3</h2>
              </div>
            </div>

            <div className="meat-selection">
              <h3 className={styles.foodText}>Meat:</h3>
              <select id="meat">
                <option value="">Select Meat</option>
                {meatOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="ingredients">
              <h3 className={styles.foodText}>Topings:</h3>
              <div className={`${styles.foodText} ${styles.checkboxList}`}>
                {ingredients.map((ingredient) => (
                  <label className={styles.ingredient} key={ingredient.id}>
                    <input
                      type="checkbox"
                      id={ingredient.id}
                      value={ingredient.name}
                    />
                    {ingredient.name}
                  </label>
                ))}
              </div>
            </div>

            <div className="ingredients">
              <h3 className={styles.foodText}>Extras:</h3>
              <div className={`${styles.foodText} ${styles.checkboxList}`}>
                {extras.map((item) => (
                  <label className={styles.ingredient} key={item.id}>
                    <input type="checkbox" id={item.id} value={item.name} />
                    {item.name} $ {item.price}
                  </label>
                ))}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
