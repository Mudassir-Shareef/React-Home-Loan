import React, { Component } from 'react';
import ReactTable from 'react-table';

class BasicTableComponent extends Component {
    styles = [
        {
            fontFamily: 'sans-serif',
            textAlign: 'center',
        }
    ];

    state = {
        columns: [
            {
                Header: 'Name',
                accessor: 'name',
                show: true,
            },
            {
                Header: 'Age',
                accessor: 'age',
                show: true
            },
            {
                Header: 'Address',
                accessor: 'address',
                show: true
            }
        ],
        fakeData: [
            { name: 'name1', age: 50, address: 'address1' },
            { name: 'name2', age: 20, address: 'address2' },
            { name: 'name3', age: 70, address: 'address3' }
        ]
    }

    toggleColumn = n => {
        const cols = this.state.columns.map((col, i) => n === i ? { ...col, show: !col.show } : col)
        this.setState({
            columns: cols
        })
    }



    render() {
        return (
            <div>
                <ReactTable
                    data={this.state.fakeData}
                    minRows={0}
                    columns={this.state.columns}
                />
            </div>
        );
    }
}

export default BasicTableComponent;



// class extends Component {




//     

//     

//     render() {
//         return (
//             <div>

//                 <div>
//                     <button onClick={() => this.toggleColumn(0)}>Toggle First Column</button>
//                     <button onClick={() => this.toggleColumn(1)}>Toggle Second Column</button>
//                     <button onClick={() => this.toggleColumn(2)}>Toggle Third Column</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default BasicTableComponent

