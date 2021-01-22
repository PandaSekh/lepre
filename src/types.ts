export interface IEmoji {
  emoji: string | JSX.Element;
  label: string;
  counter?: number;
}

export type EmojiFN = (emoji: IEmoji) => void;

export type UseEmoji = [IEmoji[], EmojiFN, EmojiFN];

export type EmojiiState = IEmoji[];
export interface EmojiAction {
  type: 'i' | 'd';
  emoji: IEmoji;
}
