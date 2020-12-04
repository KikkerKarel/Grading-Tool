import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExamTable.css';
import Cookies from "js-cookie";

interface props{
    data?: any;
}

const columns = [{
    dataField: 'id',
    text: 'Examen ID',
}, {
    dataField: 'studentName',
    text: 'Naam Student'
}, {
    dataField: 'status',
    text: 'Examen Status',
    sort: true
}

];

class ExamTable extends Component<props> {
    state = {
        Exams: this.props.data
    };
    private examstatus: any;

    async componentDidMount() {
    }

    render() {
        const {Exams} = this.state;
        const tableRowEvents = {
            onClick: (e: any, row: any, rowIndex: any) => {
                Cookies.set('examId', row.id);
                window.location.replace('/vraag/beoordeel');
                console.log(`clicked on row with index: ${rowIndex}`);
            },
            onMouseEnter: (e: any, row: any, rowIndex: any) => {
                console.log(`enter on row with index: ${row.id}`);
                console.log(row.status)
            }
        }
        const rowStyle = (row: any, rowIndex: any) => {
            if (row.status === 1)
            {
                return { backgroundColor: 'rgba(233,79,44,0.36)' }
            }
            else if (row.status === 2)
            {
                return { backgroundColor: 'rgba(178,0,0,0.48)' }
            }
            else if (row.status === 3)
            {
                return { backgroundColor: 'rgba(235,226,48,0.62)' }
            }
            else {
                return { backgroundColor: 'rgba(0,98,0,0.5)' }
            }
        };

        return (
            <div className="exam-table">
                <BootstrapTable keyField='id'
                                data={ Exams }
                                columns={ columns }
                                striped={false}
                                bordered={false}
                                hover
                                rowEvents={ tableRowEvents }
                                rowStyle={ rowStyle }
                />
            </div>
        );
    }
}

export default ExamTable
