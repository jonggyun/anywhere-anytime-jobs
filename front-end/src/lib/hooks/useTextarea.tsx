import { useState, useCallback } from 'react';

export default function useTextarea(value: string) {
  const [input, setTextarea] = useState(value);
  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  }, []);

  return [input, onChange] as [string, typeof onChange];
}
