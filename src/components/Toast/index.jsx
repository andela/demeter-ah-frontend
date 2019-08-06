import React from 'react';
import { toast } from 'react-toastify';
import './react-toastify.css';

export const Toast = ({ output }) => (<h4 className="text-center p-2">{output}</h4>);

export default function callToast(output, type) {
  toast[type](<Toast output={output} />);
}
