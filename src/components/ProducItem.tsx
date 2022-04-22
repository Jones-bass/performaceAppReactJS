import dynamic from "next/dynamic";
import { AddProductWishListProps } from "./AddProductWishList";
import { memo, useState } from "react";

//import { AddProductWishList } from "./AddProductWishList";

const AddProductWishList = dynamic<AddProductWishListProps>(
  () => {
    return import("./AddProductWishList").then((mod) => mod.AddProductWishList);
  },
  {
    loading: () => <span>Loading...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddWish, setIsAddWish] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddWish(true)}>
        Adicionar aos Favoritos
      </button>
      {isAddWish && (
        <AddProductWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddWish(false)}
        />
      )}
    </div>
  );
}

export const ProducItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

// Criar uma nova versão do component
// Comparar com versões anteriores
// Se ouver alteração, vai atualizar o que alterou
