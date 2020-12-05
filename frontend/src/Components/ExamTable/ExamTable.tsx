import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExamTable.css';
import Cookies from "js-cookie";

interface props{
    data?: any;
}

const columns = [
    {
        dataField: 'id',
        text: 'Exam ID'
    },
    {
        dataField: 'studentName',
        text: 'Student Name',
    },
    {
        dataField: 'status',
        text: 'Exam Status',
        sort: true,
    }
];

class ExamTable extends Component<props> {
    state = {
        Exams: this.props.data
    };

    render() {
        const {Exams} = this.state;
        const tableRowEvents = {
            onClick: (e: any, row: any, rowIndex: any) => {
                Cookies.set('examId', row.id);
                window.location.replace('/question/grade');
                console.log(`Clicked on row with index: ${rowIndex}`);
            },
            onMouseEnter: (e: any, row: any) => {
                console.log(`Enter on row with index: ${row.id}`);
                console.log(row.status)
            }
        }

        let rowClassnames = (row: any) => {
            return row.status.toString();
        };

        return (
            <div className="exam-table">
                <BootstrapTable keyField='id'
                                data={ Exams }
                                columns={ columns }
                                striped={false}
                                bordered={false}
                                hover
                                rowEvents={tableRowEvents}
                                rowClasses={rowClassnames}
                                bodyClasses={"scroll"}
                                classes={"theadClick"}
                                defaultSortDirection={"asc"}
                />
            </div>
        );
    }
}

export default ExamTable