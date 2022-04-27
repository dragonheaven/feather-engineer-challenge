import {
   screen,
 } from '@testing-library/react';
 import React from 'react';
 import {cleanup, fireEvent, render} from '@testing-library/react';
import SearchInput from './SearchInput';

 afterEach(cleanup);
 
 describe('<SearchInput />', () => {

   it('Validate Component Structure', () => {
     const { getByTestId } = render(
         <SearchInput onSearch={()=>{}} searchPlaceholder="Search Policies"/>
     );
     expect(getByTestId("search-div")).toBeInTheDocument();
   });

   it('Validate Component Placeholder', () => {
    const { getByPlaceholderText } = render(
        <SearchInput onSearch={()=>{}} searchPlaceholder="Search Policies"/>
    );
    expect(getByPlaceholderText("Search Policies")).toBeInTheDocument();
  });
 });

 