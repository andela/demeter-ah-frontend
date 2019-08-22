import React, { Fragment, useState } from 'react';
import './index.scss';

const Reportview = ({ closeModal, handleSubmit, reportBody }) => {
  const [body, setBody] = useState('');

  const handleChanege = (e) => {
    e.persist();
    setBody((e.target.value).trim());
  };

  return (
    <Fragment>
      <div className="shade">
        <div className="wrapper">
          <div className="flex justify-between items-center px-4">
            <h2>Report Article</h2>
            <span
              className="items-center cursor-pointer outline-none"
              onClick={closeModal}
              role="button"
              onKeyPress={closeModal}
              tabIndex={0}
            >
              X
            </span>
          </div>
          <form onSubmit={handleSubmit} className="flex-grow flex-col p-4">
            <textarea
              className="border rounded-1xl resize-none text-xs border-gray-50 p-3 text-sm w-full pb-4"
              required
              placeholder="write your message here"
              name="body"
              onChange={handleChanege}
              ref={reportBody}
            />
            <div className="w-full flex justify-end pt-5">
              {(body)
                ? (
                  <button
                    type="submit"
                    className="text-xs border border-solid border-purple-250 text-purple-250 rounded-lg h-8 mr-0 px-8"
                  >
                    Send
                  </button>
                ) : ''
              }
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Reportview;
