export interface AddProductWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductWishListProps) {
  return (
    <span>
      Deseja adcionar aos favoritos
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
