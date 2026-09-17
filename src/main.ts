import './style.scss';

interface PackageOption {
  weight: number;
  article: string;
  price: number;
  oldPrice: number;
}

const packages: PackageOption[] = [
  {
    weight: 100,
    article: '01306',
    price: 326.4,
    oldPrice: 349.2,
  },
  {
    weight: 500,
    article: '01307',
    price: 1432,
    oldPrice: 1646,
  },
  {
    weight: 1000,
    article: '01308',
    price: 2064,
    oldPrice: 2592,
  },
  {
    weight: 5000,
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
  button.textContent = `${option.weight} г`;
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

const imageButton = document.querySelector<HTMLButtonElement>(
  '.product-card__image',
);
const imageDialog = document.querySelector<HTMLDialogElement>(
  '.product-card__image-dialog',
);
const imageDialogCloseButton = document.querySelector<HTMLButtonElement>(
  '.product-card__image-dialog-close',
);

const openImageDialog = (): void => {
  if (!imageDialog || imageDialog.open) {
    return;
  }

  imageDialog.classList.remove('is-closing');
  imageDialog.showModal();
};

const closeImageDialog = (): void => {
  if (!imageDialog?.open || imageDialog.classList.contains('is-closing')) {
    return;
  }

  imageDialog.classList.add('is-closing');

  window.setTimeout(() => {
    imageDialog.close();
    imageDialog.classList.remove('is-closing');
    imageButton?.blur();
  }, 400);
};

if (imageButton && imageDialog && imageDialogCloseButton) {
  imageButton.addEventListener('click', openImageDialog);

  imageDialogCloseButton.addEventListener('click', closeImageDialog);

  imageDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeImageDialog();
  });

  imageDialog.addEventListener('click', (event) => {
    if (event.target === imageDialog) {
      closeImageDialog();
    }
  });
}

updateProductInfo(packages[0]);
