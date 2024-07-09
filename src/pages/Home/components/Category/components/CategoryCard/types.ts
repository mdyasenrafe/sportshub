export type TCategory = {
  icon: JSX.Element;
  name: string;
  link: string;
  description: string;
};

export interface CategoryCardProps {
  data: TCategory;
  onClick: () => void;
}
