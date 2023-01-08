import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Button = ({ typeBtn, className, icon, children, type = 'button', ...props }) => (
  <button className={clsx('btn', typeBtn === 'primary' ? 'btn-primary' : 'btn-normal', className)} {...props}>
    {icon && <div className="flex items-center mr-s">{icon}</div>}
    {children}
  </button>
);

Button.PropTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  typeBtn: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func
};
