"use client";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
	    type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        inline-flex items-center justify-center
        px-4 py-2 rounded-lg font-medium
        bg-indigo-600 text-white
        hover:bg-indigo-700
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        transition
      "
    >
      {label}
    </button>
  );
}

