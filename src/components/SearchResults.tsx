import { useMemo } from "react";
import { ProducItem } from "./ProducItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>

}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [results])

  return (
    <div>
      <div>{totalPrice}</div>
      
      {results.map((product) => (
        <div key={product.id}>
          <ProducItem product={product} />
        </div>
      ))}

    </div>
  )
}