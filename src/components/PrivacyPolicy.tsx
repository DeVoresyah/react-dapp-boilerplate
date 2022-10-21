import React from "react";

// Component Props
export interface PrivacyPolicyProps {
  isAgree: boolean;
  onAgree: (value: boolean) => void;
}

export const PrivacyPolicy = (props: PrivacyPolicyProps) => {
  const { isAgree, onAgree } = props;

  return (
    <div className="mt-5">
      <p className="text-sm font-bold">
        Accept <span className="text-purple-400">Terms of Service</span> and{" "}
        <span className="text-purple-400">Privacy Policy</span>
      </p>
      <div className="flex items-center">
        <input
          className="w-4 h-4 rounded outline-none checked:text-indigo-500 focus:ring-indigo-300"
          id="accept"
          type="checkbox"
          checked={isAgree}
          onChange={() => onAgree(!isAgree)}
        />
        <label className="ml-2 font-bold" htmlFor="accept">
          I read and accept
        </label>
      </div>
    </div>
  );
};


