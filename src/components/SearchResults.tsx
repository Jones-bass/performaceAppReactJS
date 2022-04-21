import { ProductItem } from "./ProducItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>

}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}

    </div>
  )
}