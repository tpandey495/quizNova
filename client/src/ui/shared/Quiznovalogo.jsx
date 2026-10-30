import React from "react";
import quiznovalogo from "../../assets/quiznovaLogo.png";

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  danger: "btn-danger",
};

const sizeClasses = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

const Quiznovalogo = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  onClick,
  children,
  type = "button",
  className = "",
  ...rest
}) => {
  return (
    <>
      <div className={"flex gap-1.5  h-16  items-center"}>
        <img
          className={"h-10 w-auto object-contain"}
          src={quiznovalogo}
          alt="Logo"
        />

        <div>
          <p
            className={" font-system-ui text-xl font-medium text-[#000000]"}
          >
            QuizNova
          </p>
        </div>

      </div>
    </>
  );
};

export default Quiznovalogo;
