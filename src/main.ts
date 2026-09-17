import './style.scss';

interface PackageOption {
  weight: string;
  article: string;
  price: number;
  oldPrice: number;
}

const packages: PackageOption[] = [
  {
    weight: '100 г',
    article: '01306',
    price: 326.4,
    oldPrice: 349.2,
  },
  {
    weight: '500 г',
    article: '01307',
    price: 1432,
    oldPrice: 1646,
  },
  {
    weight: '1000 г',
    article: '01308',
    price: 2064,
    oldPrice: 2592,
  },
  {
    weight: '5000 г',
    article: '01309',
    price: 6320,
    oldPrice: 8710,
  },
];

const optionsContainer = document.querySelector<HTMLElement>(
  '.product-card__options',
);
const articleElement = document.querySelector<HTMLElement>('#product-article');
const priceElement = document.querySelector<HTMLElement>('#product-price');
const oldPriceElement =
  document.querySelector<HTMLElement>('#product-old-price');

if (!optionsContainer || !articleElement || !priceElement || !oldPriceElement) {
  throw new Error('Не удалось найти элементы карточки товара');
}

const formatPrice = (price: number): string =>
  `${price.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ₽`;

const updateProductInfo = (option: PackageOption): void => {
  articleElement.textContent = option.article;
  priceElement.textContent = formatPrice(option.price);
  oldPriceElement.textContent = formatPrice(option.oldPrice);
};

packages.forEach((option, index) => {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = 'product-card__option';
  button.textContent = option.weight;
  button.setAttribute('aria-pressed', String(index === 0));

  button.addEventListener('click', () => {
    document
      .querySelectorAll<HTMLButtonElement>('.product-card__option')
      .forEach((item) => item.setAttribute('aria-pressed', 'false'));

    button.setAttribute('aria-pressed', 'true');
    updateProductInfo(option);
  });

  optionsContainer.append(button);
});

updateProductInfo(packages[0]);
