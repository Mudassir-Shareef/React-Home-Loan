import React from 'react';

const Loans = ({ loans }) => {
    return (
        <td>
            {loans.map((loan, index) => (
                <li key={index}>{loan.upfrontFee}</li>
            ))}
        </td>
    );
}

export default Loans;
