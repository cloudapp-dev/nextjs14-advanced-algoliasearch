// components/LoadingButton.tsx
import React from "react";

interface LoadingButtonProps {
  loading: boolean; // Prop to control loading state
  onClick: (e: React.FormEvent) => void; // Prop to handle button click
  startlabel?: string; // Prop to set the button label when not loading
  loadinglabel?: string; // Prop to set the button label when loading is finished
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  onClick,
  startlabel,
  loadinglabel,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
        loading
          ? "bg-blue-400 cursor-not-allowed" // Lighter color and disabled cursor when loading
          : "bg-blue-600 hover:bg-blue-700" // Normal hover effects
      }`}
      disabled={loading} // Disable button when loading
    >
      {!loading ? (
        <span>{startlabel}</span>
      ) : (
        <span className="flex items-center justify-center space-x-3">
          <span className="flex space-x-1">
            <span className="dot bg-white w-2 h-2 rounded-full animate-bounce delay-100"></span>
            <span className="dot bg-white w-2 h-2 rounded-full animate-bounce delay-200"></span>
            <span className="dot bg-white w-2 h-2 rounded-full animate-bounce delay-300"></span>
            <span className="dot bg-white w-2 h-2 rounded-full animate-bounce delay-400"></span>
          </span>
          <span>{loadinglabel}</span>
        </span>
      )}
    </button>
  );
};

export default LoadingButton;
