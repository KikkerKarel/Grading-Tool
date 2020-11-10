import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExamTable.css';
import Cookies from 'js-cookie';

interface props{
    data?: any;
}

const columns = [{
    dataField: 'id',
    text: 'Exam ID',
}, {
    dataField: 'studentName',
    text: 'Student Name'
}, {
    dataField: 'status',
    text: 'Exam Status',
    sort: true
}
];


class ExamTable extends Component<props> {
    state = {
        Exams: this.props.data
    };

    async componentDidMount() {
    }

    render() {
        const {Exams} = this.state;
        const tableRowEvents = {
            onClick: (e: any, row: any, rowIndex: any) => {
                Cookies.set('examId', row.id);
                window.location.replace('/question/');
                console.log(`Clicked on row with index: ${row.id}`);
            },
            onMouseEnter: (e: any, row: any, rowIndex: any) => {
                console.log(`Enter on row with index: ${row.id}`);
            }
        }
        return (
            <div className="exam-table">
            <BootstrapTable keyField='id'
                            data={ Exams }
                            columns={ columns }
                            striped
                            hover
                            rowEvents={ tableRowEvents }
            />
            </div>
        );
    }
}

export default ExamTable
