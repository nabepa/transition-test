'use client';


type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// ダイアログを表示する系はx
export default function Error({ error, reset }: Props) {
  // TODO: 使うかもしれないので残しておくけど、最終的に入らなかったら削除（スンチェ）
  void reset;

  return <>error page</>
}
