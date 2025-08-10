export interface ImageProps {
  imageUrl: string;
  prompt: string;
  width?: string;
  height?: string;
  action?: () => void;
}
