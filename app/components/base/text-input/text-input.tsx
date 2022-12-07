import type { InputHTMLAttributes } from 'react';

type TextInputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, error, ...inputProps }: TextInputProps) => {
  return (
    <label className="flex flex-col space-y-2">
      <span className="text-xs text-text-light dark:text-dark-text-light font-medium">
        {label}
      </span>

      <input
        className="text-text-dark dark:text-white text-sm font-semibold px-5 py-4 dark:bg-overlay-dark-background rounded border border-dark-text-light dark:border-purple-darkest outline-none focus:border-purple-default"
        {...inputProps}
      />

      {error && (
        <span className="inline-block text-xs text-red-default">{error}</span>
      )}
    </label>
  );
};
