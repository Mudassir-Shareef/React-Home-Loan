import React from 'react';

const Loans = ({ loans }) => {
    return (
        <td>
            {loans.map((loan, index) => (
                <li key={index}>{loan.company.name}</li>
            ))}
        </td>
    );
}

export default Loans;
