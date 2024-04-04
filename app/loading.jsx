'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {display: 'block', margin: '100px auto'};

const loading = ({loading}) => {
  return (
    <ClipLoader cssOverride={override} size={80} loading={loading} color="#7C3AED"
        aria-label="Loading Spinner" />)}

export default loading;