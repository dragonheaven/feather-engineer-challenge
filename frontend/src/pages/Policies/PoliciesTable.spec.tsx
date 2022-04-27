import {
   screen,
 } from '@testing-library/react';
 import React from 'react';
 import {cleanup, fireEvent, render} from '@testing-library/react';
import PoliciesTable from './PoliciesTable';

 afterEach(cleanup);
 
 describe('<PoliciesTable />', () => {

   it('Validate Component Structure', () => {
     const { getByTestId } = render(
         <PoliciesTable  rows={[]} />
     );
     expect(getByTestId("policies-table")).toBeInTheDocument();
   });

   it('Display records if rows exists', () => {
     const rows = [
       {id: 'id1', status: 'ACTIVE'}
     ];
    const { getByTestId } = render(
        <PoliciesTable  rows={rows} />
    );
    expect(getByTestId("table-row")).toBeInTheDocument();
  });
  
 });
