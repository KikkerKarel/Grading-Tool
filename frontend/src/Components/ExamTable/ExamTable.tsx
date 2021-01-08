import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExamTable.css';

interface props {
    data?: any;
}

const columns = [
    {
        dataField: 'id',
        text: 'Examen ID'
    },
    {
        dataField: 'examName',
        text: 'Examen',
    },
    {
        dataField: 'status',
        text: 'Examen status',
        sort: true,
    }
];

class ExamTable extends Component<props> {
    state = {
        Exams: this.props.data,
        examId: 0
    };

    render() {
        let {Exams} = this.state;
        Exams = Exams.filter((exam: any) => exam.status !== "GRADED");

        const tableRowEvents = {
            onClick: (e: any, row: any) => {
                this.setState({
                    examId: row.id
                }, () => window.location.href = "/vraag/beoordelen/" + this.state.examId)
            }
        }

        let rowClassnames = (row: any) => {
            return row.status.toString();
        };

        return (
            <div className="exam-table">
                <BootstrapTable keyField='id'
                                data={Exams}
                                columns={columns}
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