import { useState, useCallback } from 'react';

export default function useInputs(value: string) {
  const [input, setInput] = useState(value);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return [input, onChange] as [string, typeof onChange];
}
