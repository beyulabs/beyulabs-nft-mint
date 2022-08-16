import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  icon?: any;
  size?: 'small' | 'large';
  color: 'green' | 'transparent';
  onClick?: () => void;
  disabled?: boolean;
  isLink?: boolean;
  link?: string;
  isTarget?: boolean;
  className?: string;
  inputBtn?: boolean;
}

export const Button = ({
  text,
  onClick,
  disabled,
  size,
  color,
  isLink,
  link,
  className,
  inputBtn,
  isTarget,
  icon,
}: ButtonProps) =>
  !isLink ? (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        color && styles[color],
        size && styles[size],
        styles.btn,
        className,
        inputBtn && styles.inputBtn
      )}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  ) : (
    <a
      href={link}
      target={isTarget ? '_blank' : '_self'}
      className={cn(color && styles[color], size && styles[size], styles.btn)}
      rel="noreferrer"
    >
      {icon && icon}
      <span>{text}</span>
    </a>
  );

// Button.defaultProps = {
//   isLink: false,
//   onClick: null,
//   link: '',
//   className: null,
//   inputBtn: false,
//   disabled: false,
//   isTarget: false,
// };
