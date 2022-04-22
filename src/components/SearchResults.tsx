import { List, ListRowRenderer } from "react-virtualized";
import { ProducItem } from "./ProducItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishList,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProducItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>{totalPrice}</h1>

      <List
        height={300}
        rowHeight={25}
        width={900}
        overscanRowCount={10}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
