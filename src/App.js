import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {                // Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>
                            /* Add Budget component here */
                        }        

                        {                 //Remaining component
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                            /* Add Remaining component here*/
                        }        

                        {                 //ExpenseTotal component
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                            /* Add ExpenseTotal component here */
                        }        
                       
                        { <div className='col-sm'>
                        <ExpenseList />
                    </div>
                            /* Add ExpenseList component here */
                        }         

                        { <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                            /* Add ExpenseItem component here */
                        }        

                        {
                         <div className='col-sm'>
                         <AllocationForm />
                     </div>
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
