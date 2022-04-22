import { ProducItem } from "./ProducItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: number;
    title: string;
  }>
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {

  return (
    <div>
      <h1>{totalPrice}</h1>

      {results.map(product => (

        <ProducItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList} />
      )
    )}
    </div>
  )
}