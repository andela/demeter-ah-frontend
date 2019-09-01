import React, { useState, useEffect } from 'react';
import './index.scss';

const Checkbox = ({
  children,
  notifStatus,
  isLoading,
  type,
  handleNotifStatus,
}) => {
  const [status, setStatus] = useState(true);
  let mounted = true;
  const handleToggle = () => {
    if (mounted) {
      setStatus(prevState => !prevState);
      handleNotifStatus(type);
    }
  };

  useEffect(
    () => {
      setStatus(notifStatus);
      return () => {
        mounted = false;
      };
    },
    [notifStatus]
  );

  return (
    <div className="in-app flex flex-wrap w-full md:w-5.5/12">
      <p
        className={`py-2 pr-4 font-semibold whitespace-nowrap text-xs ${isLoading ? 'text-blue-400' : 'text-gray-250'}`}
      >
        {children}
      </p>
      <button type="button" onClick={handleToggle} className="checkbox">
        <div
          className={`wrapper ${status ? 'border-purple-650' : 'border-purple-220'}`}
        >
          <div
            className={`check relative ${status ? 'on bg-purple-650' : 'off bg-purple-220'}`}
          />
        </div>
      </button>
    </div>
  );
};

export default Checkbox;
