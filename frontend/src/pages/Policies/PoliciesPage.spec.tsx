import {
   screen,
 } from '@testing-library/react';
 import React from 'react';
 import {cleanup, fireEvent, render} from '@testing-library/react';
import PoliciesPage from './PoliciesPage';

 afterEach(cleanup);
 
 describe('<PoliciesPage />', () => {

   it('Validate Component Structure', () => {
     const { getByTestId } = render(
         <PoliciesPage />
     );
     expect(getByTestId("policies")).toBeInTheDocument();
   });

   it('Validate if search input has been imported successfully', () => {
    const { getByTestId } = render(
        <PoliciesPage />
    );
    expect(getByTestId("search-div")).toBeInTheDocument();
  });

  it('Validate if policies table has been imported successfully', () => {
    const { getByTestId } = render(
        <PoliciesPage />
    );
    expect(getByTestId("policies-table")).toBeInTheDocument();
  });
  
 });
