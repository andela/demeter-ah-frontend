import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button';

export const AuthNav = () => (
  <>
    <Link to="/signup">
      <Button
        type="button"
        name="Sign Up"
        classes="btn-purple w-32 hidden md:inline"
      />
    </Link>
    <Link to="/signin">
      <Button
        type="button"
        name="Sign In"
        classes=" cursor-pointer btn-white w-32 ml-2 text-purple-650 border hidden md:inline border-solid border-purple-650"
      />
    </Link>
  </>
);

export const CreateArticleNav = ({ openModal }) => (
  <Button type="button" onClick={() => openModal()} name="Next Step" classes="btn-purple" />
);
