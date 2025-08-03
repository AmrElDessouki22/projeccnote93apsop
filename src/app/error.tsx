"use client";

import React from 'react';

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>An error occurred: {error.message}</div>;
};

export default ErrorBoundary;